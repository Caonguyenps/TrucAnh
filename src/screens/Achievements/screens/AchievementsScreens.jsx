import React, { useState } from "react";
import BannerComponents from "../../../components/Banner/Banner.components";
import Logo1 from "../../../assets/image/13.png";
import Logo16 from "../../../assets/image/16.png";
import Logo17 from "../../../assets/image/17.png";
import Logo18 from "../../../assets/image/18.png";
import Logo19 from "../../../assets/image/19.png";
import Logo20 from "../../../assets/image/20.png";
import Logo21 from "../../../assets/image/21.png";
import Logo22 from "../../../assets/image/22.png";
import Logo23 from "../../../assets/image/23.png";
import Logo24 from "../../../assets/image/24.png";

import "./achi.css";

export default function AchievementsScreens() {
  return (
    <div>
      <BannerComponents banner={Logo1} title="THÀNH TÍCH" />
      <div className="wrap-body">
        <div className="news-title-top">
          <span>Thành tích</span>
        </div>
        <div className="achievement">
          <div className="row">
            <div className="col-4">
              <div className="achievement-img-title-content">
                <div className="wrap-img-achievement">
                  <div className="img-achievement-1">
                    <img src={Logo16} alt="" width="100%" height="100%" />
                  </div>
                </div>
                <div className="title-achievement">
                  <span> Cup vàng thủy sản Việt Nam năm 2012</span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="achievement-img-title-content">
                <div className="wrap-img-achievement">
                  <div className="img-achievement-2">
                    <img src={Logo17} alt="" width="100%" height="100%" />
                  </div>
                </div>
                <div className="title-achievement">
                  <span>
                    {" "}
                    Kỷ niệm chương "vì sự phát triển khoa <br /> học và công
                    nghệ"
                  </span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="achievement-img-title-content">
                <div className="wrap-img-achievement">
                  <div className="img-achievement-3">
                    <img src={Logo18} alt="" width="100%" height="100%" />
                  </div>
                </div>
                <div className="title-achievement">
                  <span>
                    Giấy chứng nhận giải vàng chất lượng <br /> quốc gia năm
                    2014
                  </span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="achievement-img-title-content">
                <div className="wrap-img-achievement">
                  <div className="img-achievement-4">
                    <img src={Logo19} alt="" width="100%" height="100%" />
                  </div>
                </div>
                <div className="title-achievement">
                  <span>Cup vàng thủy sản Việt Nam năm 2012</span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="achievement-img-title-content">
                <div className="wrap-img-achievement">
                  <div className="img-achievement-5">
                    <img src={Logo20} alt="" width="100%" height="100%" />
                  </div>
                </div>
                <div className="title-achievement">
                  <span>
                    Kỷ niệm chương "vì sự phát triển khoa <br /> học và công
                    nghệ"
                  </span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="achievement-img-title-content">
                <div className="wrap-img-achievement">
                  <div className="img-achievement-6">
                    <img src={Logo23} alt="" width="100%" height="100%" />
                  </div>
                </div>
                <div className="title-achievement">
                  <span>
                    Giấy chứng nhận giải vàng chất lượng <br /> quốc gia năm
                    2014
                  </span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="achievement-img-title-content">
                <div className="wrap-img-achievement">
                  <div className="img-achievement-7">
                    <img src={Logo24} alt="" width="100%" height="100%" />
                  </div>
                </div>
                <div className="title-achievement">
                  <span>
                    Kỷ niệm chương "vì sự phát triển khoa <br /> học và công
                    nghệ"
                  </span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="achievement-img-title-content">
                <div className="wrap-img-achievement">
                  <div className="img-achievement-8">
                    <img src={Logo21} alt="" width="100%" height="100%" />
                  </div>
                </div>
                <div className="title-achievement">
                  <span>
                    Kỷ niệm chương "vì sự phát triển khoa <br /> học và công
                    nghệ"
                  </span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="achievement-img-title-content">
                <div className="wrap-img-achievement">
                  <div className="img-achievement-9">
                    <img src={Logo22} alt="" width="100%" height="100%" />
                  </div>
                </div>
                <div className="title-achievement">
                  <span>
                    Giấy chứng nhận giải vàng chất lượng <br /> quốc gia năm
                    2014
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
