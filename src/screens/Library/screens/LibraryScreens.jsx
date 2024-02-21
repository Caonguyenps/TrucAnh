import React, { useState } from "react";
import BannerComponents from "../../../components/Banner/Banner.components";
import BannerLibrary from "../../../assets/image/15.png";
import NewComponents from "../../../components/New/New.components";
import "./library.css";
import library from "../../../resources/library.json";
import CategoryComponent from "../../../components/Category/Category.component";
export default function LibraryScreens() {
  const [listLibrary, setlistLibrary] = useState(library.listslibrary);
  const [listsCategory, setListsCategory] = useState([
    { name: "Hình ảnh", key: 1 },
    { name: "Video", key: 2 },
  ]);
  const [key, setkey] = useState(1);
  const showListsLibrary = listLibrary.map((e, index) => {
    if (e.type == key) {
      return (
        <div className="col-3">
          <NewComponents image={e.image} date={e.date} title={e.title} />
        </div>
      );
    }
  });
  const handleClickCategory = (key) => {
    setkey(key);
  };

  return (
    <div>
      <BannerComponents banner={BannerLibrary} title="HÌNH ẢNH / VIDEO" />
      <div className="wrap-body">
        <CategoryComponent
          data={listsCategory}
          handleClickCategory={handleClickCategory}
        />
        <div className="row">{showListsLibrary}</div>
      </div>
      <div className="btn-library-title">
        <div className="btn-title">
          <span>Xem thêm</span>
        </div>
      </div>
    </div>
  );
}
