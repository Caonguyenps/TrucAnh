import React, { useState } from "react";
import ProductComponents from "../components/Product.Components";
import ProductContactComponents from "../components/Product.Contact.Components";
import ProductHightlightComponents from "../components/Product.Hightlight.Components";
import product from "../../../resources/product2.json";
import "./product.css";
import ProductCategoryComponents from "../components/ProductCategory.Components";
import { useHistory } from "react-router-dom";
import path from "../../../resources/path";

export default function ProductScreens() {
  const history = useHistory();
  const [listsProduct, setListsProduct] = useState(product.listsproduct2);
  const [listsCategory, setListsCategory] = useState([
    { name: "Sản phẩm được bán chạy", id: 1 },
    { name: "Thức ăn bổ sung", id: 2 },
    { name: "Khoáng chất, dinh dưỡng", id: 3 },
    { name: "Xử lý môi trường", id: 4 },
  ]);
  const [id, setId] = useState(0);
  const showlistsproduct2 = listsProduct.map((e, index) => {
    if (e.id == id) {
      return (
        <div
          className="col-4"
          onClick={() => {
            handleClickProduct(e.id);
          }}
        >
          <ProductComponents image={e.image} name={e.name} />
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
          <ProductComponents image={e.image} name={e.name} />
        </div>
      );
    }
  });

  const handleClickProduct = (id) => {
    // history.push(`/chi-tiet-san-pham/${id}`);
    history.push({
      pathname: path.DETAILS,
      search: `?id=${id}`,
    });
  };

  const handleClickCategory = (id) => {
    setId(id);
  };

  return (
    <div className="product-product mt-3">
      <div className="wrap-body">
        <div className="row">
          <div className="col-3">
            <ProductCategoryComponents
              data={listsCategory}
              handleClickCategory={handleClickCategory}
            />
            <ProductContactComponents />
            <ProductHightlightComponents />
          </div>
          <div className="col-9">
            <div className="row">{showlistsproduct2}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
