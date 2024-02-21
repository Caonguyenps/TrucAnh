import React, { useState } from "react";
import "./category.css";

export default function CategoryComponent(props) {
  const [value, setValue] = useState(1);
  const showLists = props.data.map((e, index) => {
    if (e.key == value) {
      return (
        <div
          className="item-category active"
          onClick={() => handleClick(e.key)}
        >
          <span>{e.name}</span>
        </div>
      );
    } else {
      return (
        <div className="item-category" onClick={() => handleClick(e.key)}>
          <span>{e.name}</span>
        </div>
      );
    }
  });

  const handleClick = (key) => {
    setValue(key);
    //truyền giá trị key khi click vào qua function của screen cha nhận vào từ props
    props.handleClickCategory(key);
  };
  return (
    <>
      {props.data.length < 3 ? (
        <div className="wrap-category-min">{showLists}</div>
      ) : (
        <div className="wrap-category">{showLists}</div>
      )}
    </>
  );
}
