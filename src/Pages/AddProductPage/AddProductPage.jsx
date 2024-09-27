import React, { useState } from "react";
import "./AddProductPage.css";
import { addProduct } from "../../Firebase/firebase";
import { uploadImage } from "../../Firebase/imageService";
import { useNavigate } from "react-router-dom";

const AddProductPage = () => {

  const navigate = useNavigate();

  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  //Adding Image
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  //form submit handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageUrl = "";
      if (image) imageUrl = await uploadImage(image);

      const newProduct = {
        productName,
        category,
        price: parseFloat(price),
        imageUrl,
      };

      //addproduct function calling
      await addProduct(newProduct);
      navigate('/')

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add-product-page">
      <h1 className="title">Add Your Product</h1>
      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            type="text"
            id="productName"
            placeholder="Enter Product Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            id="category"
            placeholder="Enter Product Category"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            id="price"
            placeholder="Enter Product Price"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Choose Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImage}
            required
          />
        </div>

        <div className="image-preview">
          <h3>Image Preview:</h3>
          <img src="" alt="Preview" />
        </div>

        
          <button type="submit" className="submit-btn">
            Add Product
          </button>
      </form>
    </div>
  );
};

export default AddProductPage;
