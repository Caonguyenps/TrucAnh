import React from "react";
import "../screens/product.css";
export default function ProductComponents(props) {
  return (
    <div className="product-img-name-1">
      <div className="product-img-img">
        <img src={props.image} alt="" width="100%" height="100%" />
      </div>
      <div className="product-name-name">{props.name}</div>
    </div>
  );
}
