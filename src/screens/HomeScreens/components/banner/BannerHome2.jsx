import React from "react";
import "./banner.css";
import Logo2 from "../../../../assets/image/2.png";
import Logo4 from "../../../../assets/image/4.png";
export default function BannerHome2() {
  return (
    <div className="banner2">
      <img src={Logo2} alt="" width="100%" height="100%" />
      <div className="bg-banner"></div>
      <div className="content-banner2">
        <div className="row">
          <div className="banner2-logo">
            <img src={Logo4} alt="" width="100%" height="100%" />
          </div>
          <div className="title-banner2">
            <span>
              Chúng tôi dẫn đầu trong <br /> “Quy trình nuôi tôm sạch”
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
