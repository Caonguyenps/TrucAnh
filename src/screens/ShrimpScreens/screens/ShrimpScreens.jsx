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
  const [listsCategory, setListsCategory] = useState([
    { name: "Tôm giống", id: "1" },
  ]);
  const [id, setId] = useState(0);

  const showlistsShrimp = listsShrimp.map((e, index) => {
    if (e.id == id) {
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
    } else if (id == 0) {
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
    }
  });

  const handleClickProduct = (id) => {
    history.push({
      pathname: path.DETAILSSHRIMP,
      search: `?id=${id}`,
    });
  };

  const handleClickCategory = (id) => {
    setId(id);
  };

  return (
    <div className="shrimp mt-3">
      <div className="wrap-body">
        <div className="row">
          <div className="col-3">
            <ShrimpCategoryComponents
              data={listsCategory}
              handleClickCategory={handleClickCategory}
            />
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
