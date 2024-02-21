import React from "react";
import "./Banner.css";
import Logo4 from "../../assets/image/4.png";
export default function BannerComponents(props) {
  return (
    <div className="wrap-banner-screens">
      <div className="banner-img">
        <img src={props.banner} alt="" width="100%" height="100%" />
      </div>

      <div className="banner-bg"></div>
      <div className="banner-content">
        <div className="banner-title">
          <div className="banner-logo">
            <img src={Logo4} alt="" width="20%" height="100%" />
          </div>
          <div className="banner-name">
            <span>{props.title}</span>
          </div>
        </div>
      </div>
      
    </div>
  );
}
