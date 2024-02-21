import React from "react";
import Logo5 from "../../../../assets/image/5.png";
import Vector from "../../../../assets/image/Vector.png";
import path from "../../../../resources/path";
import "./introduce.css";
import { useHistory } from "react-router-dom";
export default function IntroduceHomeComponent() {
  const history = useHistory();
  const handleClick = () => {
    history.push(path.INTRODUCE);
  };
  return (
    <div className="wrap-body">
      <div className="introduce">
        <div className="row">
          <div className="col-6">
            <div className="introduce-left">
              <div className="introduce-left-title"></div>
              <div className="introduce-img">
                <img src={Logo5} alt="" width="100%" height="100%" />
                <div className="introduce-img-title">
                  <div className="introduce-vector">
                    <img src={Vector} alt="" />
                  </div>
                  <div className="introduce-img-title-content">
                    <span>
                      Năng suất tôm thu hoạch đạt từ 100-120 tấn/ha/năm
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="introduce-title-content">
              <div className="introduce-title-1">
                <span>
                  Giới thiệu về <br /> Trúc Anh BiOtech
                </span>
              </div>
              <div className="introduce-title-2">
                <span>
                  Công ty TNHH CNSH Trúc Anh, tiền thân là công ty TNHH SX & TM
                  Trúc Anh, được thành lập năm 2004, theo giấy phép kinh doanh
                  và mã số thuế 1900295157 do Sở Kế hoạch & đầu tư Bạc Liêu cấp,
                  là đơn vị chuyên sản xuất kinh doanh thuốc thú y thuỷ sản; Tư
                  vấn, phát triển vùng nuôi...xác định tầm quan trọng của các
                  chế phẩm sinh học trong việc bảo vệ môi trường và tạo ra sản
                  phẩm tôm sạch nên từ khi thành lập đến nay các chế phẩm sinh
                  học của công ty Trúc Anh luôn được nghiên cứu kỷ,{" "}
                </span>
              </div>
              <div className="bnt-introduce" onClick={handleClick}>
                <span>XEM THÊM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
