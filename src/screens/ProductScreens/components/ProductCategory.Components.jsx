import React, { useState } from "react";
import "../screens/product.css";

export default function ProductCategoryComponents(props) {
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState([
    { name: "Tất cả", id: "0" },
    { name: "Giá cả", id: "1" },
    { name: "Thức ăn bổ sung", id: "2" },
    { name: "Khoáng chất, dinh dưỡng", id: "3" },
    { name: "Xử lý môi trường", id: "4" },
  ]);

  const handleClickCategory = (id) => {
    setValue(id);
    props.handleClickCategory(id);
  };

  const showListsCategory = category.map((e, index) => {
    return (
      <div
        className={
          "product-category-title-1 " + (e.id == value ? "active-category" : "")
        }
        onClick={() => {
          handleClickCategory(e.id);
        }}
      >
        <span>{e.name}</span>
        <i class="fa-solid fa-angle-right"></i>
      </div>
    );
    // if (e.id == value) {
    //   return (
    //     <div
    //       className="product-category-title-1 active"
    //       onClick={() => {
    //         handleClickCategory(e.id);
    //       }}
    //     >
    //       <span>{e.name}</span>
    //       <i class="fa-solid fa-angle-right"></i>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div
    //       className="product-category-title-1"
    //       onClick={() => {
    //         handleClickCategory(e.id);
    //       }}
    //     >
    //       <span>{e.name}</span>
    //       <i class="fa-solid fa-angle-right"></i>
    //     </div>
    //   );
    // }
  });

  return <div className="product-category">{showListsCategory}</div>;
}
