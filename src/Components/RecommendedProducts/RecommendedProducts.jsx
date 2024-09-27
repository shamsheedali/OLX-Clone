import React from "react";
import "./RecommendedProducts.css";
import Heart from "../../assets/Heart";
import { Link } from "react-router-dom";

const RecommendedProducts = () => {
  return (
    <div className="postParentDiv">
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        {/* //card--link */}
        <div className="cards">
          <Link to={'/product'}>
            <div className="card">
              <div className="favorite">
                <Heart />
              </div>
              <div className="image">
                <img src="../../../Images/R15V3.jpg" alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; 250000</p>
                <span className="kilometer">Two Wheeler</span>
                <p className="name"> YAMAHA R15V3</p>
              </div>
              <div className="date">
                <span>10/5/2021</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecommendedProducts;
