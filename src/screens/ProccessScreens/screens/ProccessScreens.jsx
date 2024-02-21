import React from "react";
import BannerComponents from "../../../components/Banner/Banner.components";
import BannerProccess from "../../../assets/image/3.png";
import NewComponents from "../../../components/New/New.components";
import proccess from "../../../resources/proccess.json";
import "./proccess.css";
import { useState } from "react";
import CategoryComponent from "../../../components/Category/Category.component";

export default function ProccessScreens() {
  const [listsProccess, setListsProccess] = useState(proccess.listsproccess);
  const [listsCategory, setListsCategory] = useState([
    { name: "Vùng miền", key: 1 },
    { name: "Thời tiết", key: 2 },
    { name: "Mùa vụ", key: 3 },
    { name: "Kiến thức", key: 4 },
  ]);

  const [key, setKey] = useState(1);

  //key đã có giá trị khi set bên dưới
  //kiểm tra element nào có type = với key thì trả về, không thì thôi
  const showListsProccess = listsProccess.map((e, index) => {
    if (e.type == key) {
      return (
        <div className="col-3">
          <NewComponents image={e.image} date={e.date} title={e.title} />
        </div>
      );
    }
  });

  //function nhận vào key của compoent con khi click vào
  //set key đã nhận vào key khởi tạo ở [key, setKey] =>  dùng để so sánh khi map
  const handleClickCategory = (key) => {
    setKey(key);
  };
  return (
    <div>
      <BannerComponents banner={BannerProccess} title="QUY TRINH NUOI TOM" />
      <div className="wrap-body">
        {/* truyền function đã viết ở trên qua component con */}
        <CategoryComponent
          data={listsCategory}
          handleClickCategory={handleClickCategory}
        />
        <div className="row">{showListsProccess}</div>
      </div>
      <div className="wrap-btn-intro">
        <div className="btn-introduce-title">
          <div className="bnt-introduce">
            <span>Xem thêm</span>
          </div>
        </div>
      </div>
    </div>
  );
}
