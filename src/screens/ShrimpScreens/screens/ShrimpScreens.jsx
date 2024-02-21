import React, { useState } from "react";
import ShrimpCategoryComponents from "../components/Shrimp.Category.Components";
import ShrimpComponents from "../components/Shrimp.Components";
import ShrimpContactComponents from "../components/Shrimp.Contact.Components";
import shrimp from "../../../resources/shrimp.json";
import ShrimpHightlightComponents from "../components/Shrimp.Hightlight.Components";
import path from "../../../resources/path";
import { useHistory } from "react-router-dom";
import "./shrimp.css";

export default function ShrimpScreens(props) {
  const history = useHistory();
  const [listsShrimp, setListsShrimp] = useState(shrimp.listsshrimp);
  const showlistsShrimp = listsShrimp.map((e, index) => {
    console.log(e);
    return (
      <div
        className="col-4"
        onClick={() => {
          handleClickProduct(e.id);
        }}
      >
        <ShrimpComponents thumbnail={e.thumbnail} name={e.name} />
      </div>
    );
  });

  const handleClickProduct = (id) => {
    history.push({
      pathname: path.DETAILSSHRIMP,
      search: `?id=${id}`,
    });
  };

  return (
    <div className="shrimp mt-5">
      <div className="wrap-body">
        <div className="row">
          <div className="col-3">
            <ShrimpCategoryComponents />
            <ShrimpContactComponents />
            <ShrimpHightlightComponents />
          </div>
          <div className="col-9">
            <div className="row">{showlistsShrimp}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
