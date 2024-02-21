import React from "react";
import Logo26 from "../../../assets/image/26.png";
import Logo27 from "../../../assets/image/27.png";

export default function ShrimpHightlightComponents() {
  return (
    <div className="shrimp-hightlight">
      <div className="shrimp-hightlight-title">
        <span>Sản phẩm nổi bật</span>
      </div>
      <div className="shrimp-hightlight-img-name">
        <div className="shrimp-hightlight-img">
          <img src={Logo26} alt="" width="100%" height="100%" />
        </div>
        <div className="shrimp-hightlight-name">
          <span>ANTI STRESS-VB PRO</span>
        </div>
        <div className="shrimp-hightlight-img">
          <img src={Logo27} alt="" width="100%" height="100%" />
        </div>
        <div className="shrimp-hightlight-name">
          <span>YUCCA MAX</span>
        </div>
      </div>
    </div>
  );
}
