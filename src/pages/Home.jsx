import Advantages from "../components/advantages";
import Card from "../components/card";
import Category from "../components/category";
import Loyout from "../components/loyout/Loyout";

import { HomeStyles } from "../styles/HomeStyle";

export default function Home() {
  const categories = [
    {
      id: 1,
      name: "Elektronika",
      img: "",
      bg: "#FFF9ED",
      margiR: "26px",
      link: "/elektronika",
    },
    {
      id: 2,
      name: "Go‘zallik",
      img: "",
      bg: "#FAEDFF",
      margiR: "26px",
      link: "/gozallik",
    },
    {
      id: 3,
      name: "Sovg‘alar",
      img: "",
      bg: "#EDFDFF",
      margiR: "26px",
      link: "/sovgalar",
    },
    {
      id: 4,
      name: "Ayollar uchun",
      img: "",
      bg: "#FFF2ED",
      margiR: "26px",
      link: "/ayollar-uchun",
    },
    {
      id: 5,
      name: "Erkaklar uchun",
      img: "",
      bg: "#EDFFF1",
      margiR: "26px",
      link: "/erkaklar-uchun",
    },
    {
      id: 6,
      name: "Bolalar uchun",
      img: "",
      bg: "#FFEDFE",
      margiR: "26px",
      link: "/bolalar-uchun",
    },
    {
      id: 7,
      name: "Avtomobil uchun",
      img: "",
      bg: "#F5FFED",
      margiR: "26px",
      link: "/avtomobil-uchun",
    },
    {
      id: 8,
      name: "Salomatlik uchun",
      img: "",
      bg: "#EDF3FF",
      margiR: "0px",
      link: "/salomatlik-uchun",
    },
  ];
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
          <div className="categories">
            {categories.map((item, i) => {
              return <Category data={item} key={i + "gfds"} />;
            })}
          </div>

          <div className="popular-categories">
            <div className="title">Mashhur maxsulotlar</div>
            <div className="popular-categories-items">
              {popular.map((item, i) => {
                return <Card key={i + "popular"} data={item} />;
              })}
            </div>
          </div>
          <div className="popular-categories">
            <div className="title">Yangi maxsulotlar</div>
            <div className="popular-categories-items">
              {popular.map((item, i) => {
                return <Card key={i + "popular"} data={item} />;
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
