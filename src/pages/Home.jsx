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
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Grid, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Zoom } from "react-reveal";
import { CategoryStyle } from "../styles/components/CategoryStyle";
import { Link } from "react-router-dom";

// import './styles.css';

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
          <div className="d-flex flex-wrap align-items-center">
            <h2 className="title" style={{ marginRight: "85px" }}>
              Turkumlar
            </h2>
            <span
              style={{
                color: "#ABB0FF",
                fontFamily: "Gilroy-Medium",
                fontSize: "20px",
                lineHeight: "normal",
                fontWeight: "400",
              }}
            >
              Turkumlardan birini tanlang!
            </span>
          </div>
          <div className="categories">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              freeMode={true}
              autoplay={true}
              // loop={true}
              // modules={[FreeMode]}
              className="mySwiper"
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 8,
                  spaceBetween: 26,
                },
                1600: {
                  slidesPerView: 8,
                  spaceBetween: 26,
                },
              }}
            >
              {category.map((item, i) => {
                return (
                  <>
                    <SwiperSlide>
                      <Zoom cascade delay={i * 200}>
                        <CategoryStyle
                          bg={item?.background}
                          marginr={item?.marginr}
                        >
                          <Link to={`category/${item?.name}`}>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <img src={item?.icon} alt="" />
                            </div>
                            <p>{item?.name}</p>
                          </Link>
                        </CategoryStyle>
                      </Zoom>
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>
          {/* <TransitionGroup cascade>
            <div className="categories"></div>
          </TransitionGroup> */}

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
