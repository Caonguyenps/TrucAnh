import React from "react";
import BannerComponents from "../../../components/Banner/Banner.components";
import BannerContact from "../../../assets/image/14.png";
import "./contact.css";
import ContactFormComponents from "../components/ContactForm.components";

export default function ContactScreens() {
  return (
    <div>
      <BannerComponents
        banner={BannerContact}
        title="THÔNG TIN TUYỂN DỤNG VÀ LIÊN HỆ"
      />
      <div className="wrap-body">
        <div className="contact">
          <div className="title-contact">
            <span>Trụ sở chính</span>
          </div>
          <div className="row">
            <div className="col-5">
              <div className="img-contact">
                <img
                  src="https://trucanh.com.vn/Content/UI/imgconsultancy/trai_giong.JPG"
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div className="col-7">
              <div className="content-contact-1">
                <span>CÔNG TY TNHH SX&TM TRÚC ANH</span>
              </div>
              <div className="content-title-contact">
                <div className="content-contact">
                  <i class="fa-solid fa-house"></i>
                  <span>
                    Ấp Công Điền, Xã Vĩnh Trạch, TP. Bạc Liêu, Bạc Liêu
                  </span>
                </div>
                <div className="content-contact">
                  <i class="fa-solid fa-phone"></i>
                  <span>1900 55 88 32</span>
                </div>
                <div className="content-contact">
                  <i class="fa-solid fa-envelope"></i>
                  <span>trucanhkd@gmail.com</span>
                </div>
                <div className="content-contact">
                  <i class="fa-brands fa-android"></i>
                  <span>
                    M.S.D.N: 1900 29 5157, ngày cấp: 20/09/2004, Cấp tại Sở Kế
                    hoạch và Đầu tư tỉnh Bạc Liêu
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="title-contact">
            <span>Chi nhánh</span>
          </div>
          <div className="row">
            <div className="col-5">
              <div className="img-contact">
                <img
                  src="https://trucanh.com.vn/Content/UI/imgconsultancy/trai_giong_trong_nha.JPG"
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div className="col-7">
              <div className="content-contact-1">
                <span>CÔNG TY TNHH SX&TM TRÚC ANH</span>
              </div>
              <div className="content-title-contact">
                <div className="content-contact">
                  <i class="fa-solid fa-house"></i>
                  <span>
                    Ấp Công Điền, Xã Vĩnh Trạch, TP. Bạc Liêu, Bạc Liêu
                  </span>
                </div>
                <div className="content-contact">
                  <i class="fa-solid fa-phone"></i>
                  <span>1900 55 88 32</span>
                </div>
                <div className="content-contact">
                  <i class="fa-solid fa-envelope"></i>
                  <span>trucanhkd@gmail.com</span>
                </div>
                <div className="content-contact">
                  <i class="fa-brands fa-android"></i>
                  <span>
                    M.S.D.N: 1900 29 5157, ngày cấp: 20/09/2004, Cấp tại Sở Kế
                    hoạch và Đầu tư tỉnh Bạc Liêu
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="title-contact-table">
            <span>Để lại thông tin để chúng tôi có thể liên hệ sớm nhất</span>
          </div>
          <ContactFormComponents />
        </div>
      </div>
    </div>
  );
}
