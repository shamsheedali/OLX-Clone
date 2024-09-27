import React from "react";
import "./AddProductPage.css";

const AddProductPage = () => {
  return (
    <div className="add-product-page">
      <h1 className="title">Add Your Product</h1>
      <form className="product-form">
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="productName"
            placeholder="Enter Product Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            placeholder="Enter Product Category"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            placeholder="Enter Product Price"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Choose Image</label>
          <input type="file" id="image" accept="image/*" required />
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
