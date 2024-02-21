import React from "react";
import BannerComponents from "../../../components/Banner/Banner.components";
import BannerNews from "../../../assets/image/1.png";
import NewComponents from "../../../components/New/New.components";
import introduce from "../../../resources/introduce.json";
import "./introduce.css";
import { useState } from "react";

export default function IntroduceScreens() {
  const [listsIntroduce, setListsIntroduce] = useState(
    introduce.listsintroduce
  );
  const showListsIntroduce = listsIntroduce.map((e, index) => {
    return (
      <div className="col-3">
        <NewComponents image={e.image} date={e.date} title={e.title} />
      </div>
    );
  });
  return (
    <div>
      <BannerComponents banner={BannerNews} title="GIOI THIEU" />
      <div className="wrap-body">
        <div className="news-title-top">
          <span>Mô hình & Phát triển</span>
        </div>
        <div className="row">{showListsIntroduce}</div>
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
