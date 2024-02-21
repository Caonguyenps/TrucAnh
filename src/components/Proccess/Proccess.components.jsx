import React from "react";
import "./proccess.css";
import Vector1 from "../../assets/image/Vector1.png";
import Vector2 from "../../assets/image/Vector2.png";
import Vector3 from "../../assets/image/Vector3.png";
import Vector4 from "../../assets/image/Vector4.png";
import Logo9 from "../../assets/image/9.png";
import Logo10 from "../../assets/image/10.png";
import Logo11 from "../../assets/image/11.png";
import Logo12 from "../../assets/image/12.png";
export default function ProccessComponents() {
  return (
    <div className="row">
      <div className="col-3">
        <div className="proccess-wrap-img">
          <div className="proccess-img">
            <img src={Logo9} alt="" width="100%" height="100%" />
          </div>
          <div className="proccess-logo">
            <img src={Vector1} alt="" width="100%" />
          </div>
        </div>
        <div className="proccess-content">
          <div className="proccess-title">
            <span>Vùng Miền</span>
          </div>
          <div className="proccess-description">
            <span>Kỹ thuật nuôi dựa vào vị trí địa lý </span>
          </div>
          <div className="wrap-proccess-btn">
            <div className="proccess-btn">
              <i class="fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="proccess-wrap-img">
          <div className="proccess-img">
            <img src={Logo10} alt="" width="100%" height="100%" />
          </div>
          <div className="proccess-logo">
            <img src={Vector2} alt="" width="100%" />
          </div>
        </div>
        <div className="proccess-content">
          <div className="proccess-title">
            <span>Thời Tiết</span>
          </div>
          <div className="proccess-description">
            <span>Chăm sóc tôm đúng cách khi thời tiết thay đổi</span>
          </div>
          <div className="wrap-proccess-btn">
            <div className="proccess-btn">
              <i class="fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="col-3 proccess-wrap-img-height ">
        <div className="proccess-wrap-img">
          <div className="proccess-img">
            <img src={Logo11} alt="" width="100%" height="100%" />
          </div>
          <div className="proccess-logo">
            <img src={Vector3} alt="" width="100%" />
          </div>
        </div>
        <div className="proccess-content">
          <div className="proccess-title">
            <span>Mùa vụ</span>
          </div>
          <div className="proccess-description">
            <span>Giảm thiểu rủi ro, nâng cao hiệu quả nuôi tôm</span>
          </div>
          <div className="wrap-proccess-btn">
            <div className="proccess-btn">
              <i class="fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="proccess-wrap-img">
          <div className="proccess-img">
            <img src={Logo12} alt="" width="100%" height="100%" />
          </div>
          <div className="proccess-logo">
            <img src={Vector4} alt="" width="100%" />
          </div>
        </div>
        <div className="proccess-content">
          <div className="proccess-title">
            <span>Kiến thức</span>
          </div>
          <div className="proccess-description">
            <span>Cập nhật kiến thức nuôi tôm sạch</span>
          </div>
          <div className="wrap-proccess-btn">
            <div className="proccess-btn">
              <i class="fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
