import React from "react";
import Logo25 from "../../../assets/image/25.png";

export default function ShrimpContactComponents() {
  return (
    <div className="wrap-shrimp-contact">
      <div className="img">
        <img src={Logo25} alt="" width="100%" height="100%" />
      </div>
      <div className="shrimp-contact-bg"></div>
      <div className="shrimp-contact-content-bg">
        <div className="">
          <i class="fa-solid fa-phone-volume"></i>
        </div>
        <div className="shrimp-title-contact">
          <span>GỌI NGAY</span>
        </div>
        <div className="shrimp-title-contact-1">
          <span>ĐỂ ĐƯỢC TƯ VẤN</span>
        </div>
        <div className="shrimp-title-contact-2">
          <span>1900 55 88 32</span>
        </div>
      </div>
    </div>
  );
}
