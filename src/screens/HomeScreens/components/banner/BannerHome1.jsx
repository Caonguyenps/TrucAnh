import React from "react";
import Logo3 from "../../../../assets/image/3.png";
import Logo4 from "../../../../assets/image/4.png";
import button from "../../../../assets/image/button.png";
import "./banner.css";

export default function BannerHome1() {
  return (
    <div className="banner2">
      <img src={Logo3} alt="" width="100%" height="100%" />
      <div className="bg-banner"></div>
      <div className="content-banner2">
        <div className="row">
          <div className="col-8">
            <div className="banner2-logo">
              <img src={Logo4} alt="" width="100%" height="100%" />
            </div>
            <div className="title-banner2">
              <span>Bạn đồng hành với nhà nông</span>
            </div>
          </div>
          <div className="col-4">
            <img src={button} alt="" width="20%" className="mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
