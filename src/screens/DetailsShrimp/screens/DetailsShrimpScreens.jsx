import React, { useState, useEffect } from "react";
import "./detailShrimp.css";
import queryString from "query-string";
import data from "../../../resources/shrimp.json";
export default function DetailsShrimpScreens(props) {
  const search = queryString.parse(props.location.search);
  const id = search.id;
  const [details, setDetails] = useState({
    image: "",
    name: "",
    id: "",
  });
  const [status, setStatus] = useState(false);
  useEffect(() => {
    if (id) {
      const findShrimp = data.listsshrimp.findIndex((e) => {
        return e.id == id;
      });
      if (findShrimp != -1) {
        setDetails(data.listsshrimp[findShrimp]);
      } else {
        setStatus(true);
      }
    }
  }, [id]);

  const showElement = details.element?.map((e, index) => {
    return (
      <div>
        <span>{e}</span>
      </div>
    );
  });

  const showAmount = details.amount?.map((e, index) => {
    return (
      <div>
        <span>{e}</span>
      </div>
    );
  });
  return (
    <div className="wrap-body">
      {status ? (
        <div className="erdetails">
          <span>404 ERROR</span>
        </div>
      ) : (
        <div className="details-product-body">
          <div className="details-product-body-1">
            <div className="details-product-img">
              <img src={details.image} alt="" width="40%" height="40%" />
            </div>
            <div className="details-product-name">
              <span>{details.name}</span>
            </div>
            <div>
              <div className="title-details">
                <span>Mô tả:</span>
              </div>
              <div>{showElement}</div>
            </div>
          </div>
        </div>
      )}

      <div className="buy-product">
        <div className="buy-product-1">
          <i class="fa-solid fa-phone-volume"></i>
          <span>ĐĂNG KÝ MUA HÀNG</span>
        </div>
      </div>
    </div>
  );
}
