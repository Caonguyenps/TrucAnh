import React, { useState, useEffect } from "react";
import "./details.css";
import { useParams } from "react-router-dom";
import queryString from "query-string";
import data from "../../../resources/product2.json";

export default function DetailsScreens(props) {
  //   const id = useParams().id;
  const search = queryString.parse(props.location.search);
  const id = search.id;
  const [details, setDetails] = useState({
    image: "",
    name: "",
    id: "",
  });
  const [status, setStatus] = useState(true);
  useEffect(() => {
    if (id) {
      const findProduct = data.listsproduct2.findIndex((e) => {
        return e.id == id;
      });
      if (findProduct != -1) {
        setDetails(data.listsproduct2[findProduct]);
      } else {
        setStatus(false);
      }
    }
  }, [id]);

  console.log(details);

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
        <div className="details-product-body">
          <div className="details-product-body-1">
            <div className="details-product-img">
              <img src={details.image} alt="" width="20%" height="20%" />
            </div>
            <div className="details-product-name">
              <span>{details.name}</span>
            </div>
            <div>
              <div className="title-details">
                <span>Thành phần:</span>
              </div>

              <div>{showElement}</div>
            </div>
            <div>
              <div className="title-details">
                <span>Công dụng:</span>
              </div>
              <div>{details.uses}</div>
            </div>
            <div>
              <div className="title-details">
                <span>Liều lượng:</span>
              </div>
              <div>
                <div> {showAmount}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="erdetail">
          <span>404 ERROR</span>
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
