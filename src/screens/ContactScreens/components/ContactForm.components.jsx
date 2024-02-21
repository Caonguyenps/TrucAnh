import React from "react";

const ContactFormComponents = () => {
  return (
    <div className="wrap-form">
      <div className="row">
        <div className="col-4">
          <div className="input-information-contact">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Họ tên (*)"
            />
          </div>
        </div>
        <div className="col-4">
          <div className="input-information-contact">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Điện thoại (*)"
            />
          </div>
        </div>
        <div className="col-4">
          <div className="input-information-contact">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="col-12">
          <div className="input-information-contact-1">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Địa chỉ"
            />
          </div>
          <div className="input-information-contact-1">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Tiêu đề"
            />
          </div>
          <div className="input-information-contact-2">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Nội dung "
            />
          </div>
          <div className="btn-information-contact">
            <div className="row">
              <div className="col-8">
                <div className="information-contact">
                  <span>(*) Thông tin bắt buộc</span>
                </div>
              </div>
              <div className="col-4">
                <div className="col4">
                  <div className="btn-contact">
                    <span>Gửi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormComponents;
