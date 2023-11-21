import { TransitionGroup } from "react-transition-group";
import Advantages from "../components/advantages";
import Card from "../components/card";
import Category from "../components/category";
import Loyout from "../components/loyout/Loyout";
import { categories } from "../const/const";

import { HomeStyles } from "../styles/HomeStyle";

export default function Home() {
  const popular = [
    { id: 1, name: "Mahsulot", img: "", price: "30000" },
    { id: 2, name: "Mahsulot", img: "", price: "30000" },
    { id: 3, name: "Mahsulot", img: "", price: "30000" },
    { id: 4, name: "Mahsulot", img: "", price: "30000" },
  ];
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
              {popular.map((item, i) => {
                return <Card key={i + "popular"} data={item} index={i} />;
              })}
            </div>
          </div>
          <div className="popular-categories">
            <div className="title">Yangi maxsulotlar</div>
            <div className="popular-categories-items">
              {popular.map((item, i) => {
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
