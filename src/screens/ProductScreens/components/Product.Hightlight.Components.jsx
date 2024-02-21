import React from "react";
import "./product.css";
import Logo26 from "../../../assets/image/26.png";
import Logo27 from "../../../assets/image/27.png";

import "../screens/product.css";
export default function ProductHightlightComponents() {
  return (
    <div className="product-hightlight">
      <div className="product-hightlight-title">
        <span>Sản phẩm nổi bật</span>
      </div>
      <div className="product-hightlight-img-name">
        <div className="product-hightlight-img">
          <img src={Logo26} alt="" width="100%" height="100%" />
        </div>
        <div className="product-hightlight-name">
          <span>ANTI STRESS-VB</span>
        </div>
        <div className="product-hightlight-img">
          <img src={Logo27} alt="" width="100%" height="100%" />
        </div>
        <div className="product-hightlight-name">
          <span>YUCCA MAX</span>
        </div>
      </div>
    </div>
  );
}
