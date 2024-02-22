import React, { useState } from "react";
import NewComponents from "../../../components/New/New.components";
import "./HomeScreens.css";
import BannerHomeComponent from "../components/banner/BannerHome.component";
import IntroduceHomeComponent from "../components/introduce/IntroduceHome.component";
import news from "../../../resources/news.json";
import BannerHome1 from "../components/banner/BannerHome1";
import BannerHome2 from "../components/banner/BannerHome2";
import ProccessComponents from "../../../components/Proccess/Proccess.components";
import product from "../../../resources/product.json";
import ProductComponent from "../components/Product/Product.component";
export default function HomeScreens() {
  const [listsNews, setListsNews] = useState(news.listsnews);
  const [listsProduct, setListsProduct] = useState(product.listsProduct);

  const showLists = listsNews.map((e, index) => {
    return (
      <div className="col-3">
        <NewComponents image={e.image} date={e.date} title={e.title} />
      </div>
    );
  });

  const showListsProduct = listsProduct.map((e, index) => {
    return (
      <div className="col-3">
        <ProductComponent image={e.image} title={e.title} content={e.content} />
      </div>
    );
  });
  return (
    <div className="wrap-body">
      <div className="home-screens">
        <BannerHomeComponent />
        <IntroduceHomeComponent />
        <div className="xxxxxxxxxx">
          <div className="news">
            <div className="news-title-top">
              <span>Tin tức</span>
            </div>
            <div className="row">{showLists}</div>
          </div>
        </div>
        <BannerHome1 />
        <div className="">
          <div className="proccess">
            <div className="proccess-title-top">
              <span>Quy trình nuôi tôm Trúc Anh</span>
            </div>
            <ProccessComponents />
          </div>
        </div>
        <div className="">
          <div className="product">
            <div className="product-title-top">
              <span>Sản phẩm nuôi tôm trúc anh</span>
            </div>
            <div className="row">{showListsProduct}</div>
          </div>
        </div>
        <BannerHome2 />
      </div>
    </div>
  );
}
