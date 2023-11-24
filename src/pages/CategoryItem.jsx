/* eslint-disable no-unused-vars */
import { useParams } from "react-router";
import Loyout from "../components/loyout/Loyout";
import { categories, product } from "../const/const";
import { CategoriesItemStyle } from "../styles/CategoriesItemStyle";
import { Link } from "react-router-dom";
import Card from "../components/card";
import Advantages from "../components/advantages";
import { useEffect, useState } from "react";
import Axios from "../utils/httpClinet";

export default function CategoriesItem() {
  const { name } = useParams();
  const [result, setResult] = useState({});
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategoryItem();
    getCategory();
  }, []);

  const getCategoryItem = () => {
    Axios()
      .get(`/main/product/?category_name=${name}`)
      .then((res) => {
        setResult(res?.data[0]);
      })
      .catch((err) => console.log(err, "categoryitem"))
      .finally(() => {});
  };

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
  return (
    <Loyout>
      {console.log(result, "")}
      <div className="container">
        <CategoriesItemStyle>
          <div className="title_c">
            <h1>
              {
                // c?.name
                result?.category?.name
              }
            </h1>

            <img src={"c?.title_img"} alt="" />
          </div>
          <div className="products">
            <div className="products-items">
              {category.map((item) => {
                return (
                  <Link
                    to={`/category/${item?.slug}`}
                    className="products-item"
                    key={item?.id + "asdfg"}
                  >
                    <p>{item?.name}</p>
                    {/* {item?.slug === slug ? (
                      <>
                      </>
                    ) : null} */}
                    <img
                      src="/img/arrow_right.svg"
                      alt=""
                      className="products-item_img"
                    />
                  </Link>
                );
              })}
            </div>
            <div className="cards">
              {product.map((item, i) => {
                return <Card key={i + "qmnwe"} data={item} index={i} />;
              })}
            </div>
          </div>
          <div className="title">Bizning afzalliklarimiz</div>
          <Advantages />
        </CategoriesItemStyle>
      </div>
    </Loyout>
  );
}
