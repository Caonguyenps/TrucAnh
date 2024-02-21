import React from "react";
import "./product.css";
export default function ProductComponent(props) {
  return (
    <div className=" mt-3">
      <div className="wrap-product-body">
        <div className="wrap-product">
          <div className="img-product">
            <img src={props.image} alt="" width="100%" height="100%" />
          </div>
          <div className="wrap-product-content">
            <div className="product-content">
              <div className="product-type">
                <span>{props.content}</span>
              </div>
              <div className="product-name">
                <span>{props.title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
