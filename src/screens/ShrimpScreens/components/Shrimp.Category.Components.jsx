import React, { useState } from "react";
import "../screens/shrimp.css";

export default function ShrimpCategoryComponents(props) {
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState([{ name: "Tôm giống", id: "0" }]);

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
  });

  return <div className="product-category">{showListsCategory}</div>;
}
