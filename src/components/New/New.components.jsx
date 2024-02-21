import React from "react";
import "./new.css";
import Logo6 from "../../assets/image/6.png";
import Logo7 from "../../assets/image/7.png";
import Logo8 from "../../assets/image/8.png";
export default function NewComponents(props) {
  return (
    <div className=" mt-3">
      <div className="wrap-news">
        <div className="news-img-title-content">
          <div className="img-news">
            <img src={props.image} alt="" width="100%" height="100%" />
          </div>
          <div className="date-news">
            <span>{props.date}</span>
          </div>
          <div className="title-news">
            <span>{props.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
