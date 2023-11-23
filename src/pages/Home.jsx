/* eslint-disable no-unused-vars */
import { TransitionGroup } from "react-transition-group";
import Advantages from "../components/advantages";
import Card from "../components/card";
import Category from "../components/category";
import Loyout from "../components/loyout/Loyout";
import { categories } from "../const/const";

import { HomeStyles } from "../styles/HomeStyle";
import Axios from "../utils/httpClinet";
import { useEffect, useState } from "react";

export default function Home() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategory();
    getProduct();
  }, []);

  const getCategory = () => {
    Axios()
      .get("/main/category/")
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        console.log(res, "res");
        setCategory(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {});
  };

  const getProduct = () => {
    Axios()
      .get("/main/product/")
      .then((res) => {
        setProduct(res?.data);
      })
      .catch((err) => console.log(err, "err product"))
      .finally(() => {});
  };
  return (
    <Loyout>
      <HomeStyles>
        <div className="container">
          <h2 className="title">Turkumlar</h2>
          <TransitionGroup cascade>
            <div className="categories">
              {categories.map((item, i) => {
                return <Category data={item} key={i + "gfds"} index={i} />;
              })}
            </div>
          </TransitionGroup>

          <div className="popular-categories">
            <div className="title">Mashhur maxsulotlar</div>

            <div className="popular-categories-items">
              {product.map((item, i) => {
                return <Card key={i + "popular"} data={item} index={i} />;
              })}
            </div>
          </div>
          <div className="popular-categories">
            <div className="title">Yangi maxsulotlar</div>
            <div className="popular-categories-items">
              {product.map((item, i) => {
                return <Card key={i + "popular"} data={item} index={i} />;
              })}
            </div>
          </div>
          <div className="title">Bizning afzalliklarimiz</div>
          <Advantages />
        </div>
      </HomeStyles>
    </Loyout>
  );
}
