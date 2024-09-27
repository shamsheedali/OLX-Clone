import React from 'react'
import './ProductPage.css'
import Navbar from '../../Components/Navbar/Navbar'
import SubNav from '../../Components/SubNav/SubNav'
import SingleProductPage from '../../Components/SingleProduct/SingleProduct'
import Footer from '../../Components/Footer/Footer'

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <SubNav />
      <SingleProductPage />
      <Footer />
    </div>
  )
}

export default ProductPage
