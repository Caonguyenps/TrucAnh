import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/image/logo.png";
import path from "../../resources/path";
import { useHistory } from "react-router-dom";
export default function HeaderComponents() {
  const [value, setValue] = useState(1);
  const history = useHistory();
  const handleClick = (path) => {
    history.push(path);
  };

  return (
    <div id="header">
      <div className="wrap-body">
        <div className="header-top">
          <div className="header-top-left">
            <div className="header-top-icon">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-youtube "></i>
            </div>
          </div>
          <div className="header-top-right">
            <div className="header-top-content">
              <div className="content-item">
                <span className="icon-header">
                  <i class="fa-solid fa-magnifying-glass"></i>Tìm kiếm
                </span>
              </div>
              <div className="content-item">
                <span className="icon-header">
                  <i class="fa-solid fa-briefcase"></i>
                  Liên kết đào tạo
                </span>
              </div>
              <div className="content-item">
                <span className="icon-header">
                  <i class="fa-solid fa-phone"></i>
                  Tuyển dụng
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="header-bottom">
          <div className="header-bottom-left">
            <div className="header-bottom-logo">
              <div className="bottom-logo">
                <img onClick={() => handleClick(path.HOME)} src={logo} alt="" />
              </div>
            </div>
          </div>
          <div className="header-bottom-right">
            <div className="header-bottom-content">
              <div className="bottom-content-item">
                <span onClick={() => handleClick(path.HOME)}>Trang chủ</span>
              </div>
              <div className="bottom-content-item">
                <span onClick={() => handleClick(path.INTRODUCE)}>
                  Giới thiệu
                </span>
              </div>
              <div className="bottom-content-item">
                <span onClick={() => handleClick(path.NEWS)}>Tin tức </span>
              </div>
              <div className="bottom-content-item">
                <span onClick={() => handleClick(path.PROCCESS)}>
                  Quy trình nuôi tôm
                </span>
              </div>
              <div className="bottom-content-item">
                <span onClick={() => handleClick(path.SHRIMP)}>Tôm giống </span>
              </div>
              <div className="bottom-content-item">
                <span onClick={() => handleClick(path.PRODUCT)}>Sản phẩm </span>
              </div>
              <div className="bottom-content-item">
                <span onClick={() => handleClick(path.ACHIEVEMENTS)}>
                  Thành tích{" "}
                </span>
              </div>
              <div className="bottom-content-item">
                <span onClick={() => handleClick(path.LIBRARY)}>Thư viện</span>
              </div>
              <div className="bottom-content-item">
                <span onClick={() => handleClick(path.CONTACT)}>Liên hệ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
