import React from "react";
import BannerComponents from "../../../components/Banner/Banner.components";
import BannerNews from "../../../assets/image/2.png";
import NewComponents from "../../../components/New/New.components";
import news2 from "../../../resources/news2.json";
import "./new.css";
import { useState } from "react";
import CategoryComponent from "../../../components/Category/Category.component";

export default function NewsScreens() {
  const [listsNews2, setListsNews] = useState(news2.listsnews2);
  const [listsCategory, setListsCategory] = useState([
    { name: "Quỹ hổ trợ người nuôi trồng", key: 1 },
    { name: "Tin tức công ty", key: 2 },
    { name: "Tin tức thủy sản", key: 3 },
    { name: "Giá cả thị trường", key: 4 },
    { name: "An sinh xã hội", key: 5 },
  ]);
  const [key, setKey] = useState(1);
  const showListsNews2 = listsNews2.map((e, index) => {
    if (e.type == key) {
      return (
        <div className="col-3">
          <NewComponents image={e.image} date={e.date} title={e.title} />
        </div>
      );
    }
  });

  const handleClickCategory = (key) => {
    setKey(key);
  };
  return (
    <div>
      <BannerComponents banner={BannerNews} title="TIN TUC" />
      <div className="wrap-body">
        <CategoryComponent
          data={listsCategory}
          handleClickCategory={handleClickCategory}
        />
        <div className="row">{showListsNews2}</div>
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
