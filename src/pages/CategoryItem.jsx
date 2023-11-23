import { useParams } from "react-router";
import Loyout from "../components/loyout/Loyout";
import { categories, product } from "../const/const";
import { CategoriesItemStyle } from "../styles/CategoriesItemStyle";
import { Link } from "react-router-dom";
import Card from "../components/card";
import Advantages from "../components/advantages";

export default function CategoriesItem() {
  const { slug } = useParams();

  const c = categories.filter((item) => item?.slug === slug)[0];

  return (
    <Loyout>
      <div className="container">
        <CategoriesItemStyle>
          <div className="title_c">
            <h1>{c?.name}</h1>

            <img src={c?.title_img} alt="" />
          </div>
          <div className="products">
            <div className="products-items">
              {categories.map((item) => {
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
                      src="/public/img/arrow_right.svg"
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
