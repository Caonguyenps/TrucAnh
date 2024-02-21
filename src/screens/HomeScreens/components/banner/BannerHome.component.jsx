import React from "react";
import Slider from "react-slick";
import Logo1 from "../../../../assets/image/1.png";
import Logo2 from "../../../../assets/image/2.png";
import Logo3 from "../../../../assets/image/3.png";
import Logo4 from "../../../../assets/image/4.png";
import "./banner.css";

export default function BannerHomeComponent() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="img-banner">
        <img src={Logo1} alt="" width="100%" height="100%" />
        <div className="img-banner-content">
          <div className="img-title-content">
            <span>QUY TRÌNH NUÔI TÔM SẠCH</span>
          </div>
          <div className="img-banner-content-logo">
            <img src={Logo4} alt="" width="100%" height="100%" />
          </div>
          <div className="img-banner-content-2">
            <span>
              Bằng sự tận tâm với người nông dân, lấy thành công của người nuôi
              trồng thuỷ sản làm tiêu chí để thành công cho công ty
            </span>
          </div>
        </div>
      </div>
      <div className="img-banner">
        <img src={Logo2} alt="" width="100%" height="100%" />
      </div>
      <div className="img-banner">
        <img src={Logo3} alt="" width="100%" height="100%" />
      </div>
    </Slider>
  );
}
