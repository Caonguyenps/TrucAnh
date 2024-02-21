import React from "react";
import "../screens/shrimp.css";
export default function ShrimpComponents(props) {
  return (
    <div className="shrimp-img-name-1  mt-4">
      <div className="shrimp-img-1">
        <img src={props.thumbnail} alt="" width="100%" height="100%" />
      </div>
      <div className="shrimp-name-1">{props.name}</div>
    </div>
  );
}
