import React from "react";
import "./shrimp.css";
import Logo26 from "../../../assets/image/tomgiong.jpg";
import Logo27 from "../../../assets/image/tomgiong1.jpg";

export default function ShrimpHightlightComponents() {
  return (
    <div className="shrimp-hightlight">
      <div className="shrimp-hightlight-title">
        <span>Sản phẩm nổi bật</span>
      </div>
      <div className="shrimp-hightlight-img-name">
        <div className="shrimp-hightlight-img">
          <img src={Logo26} alt="" width="103%" height="100%" />
        </div>
        <div className="shrimp-hightlight-name">
          <span>Tôm sú</span>
        </div>
        <div className="shrimp-hightlight-img">
          <img src={Logo27} alt="" width="103%" height="100%" />
        </div>
        <div className="shrimp-hightlight-name">
          <span>Litopenaeus setiferus</span>
        </div>
      </div>
    </div>
  );
}
