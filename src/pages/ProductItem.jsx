import { useParams } from "react-router";
import Advantages from "../components/advantages";
import Loyout from "../components/loyout/Loyout";
import { ProductItemStyle } from "../styles/ProductItemStyle";
import Axios from "../utils/httpClinet";
import { useEffect, useState } from "react";

export default function ProductItem() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductItem();
  }, []);

  const getProductItem = () => {
    Axios()
      .get(`/main/product/${id}`)
      .then((res) => {
        setProduct(res?.data);
      })
      .catch((err) => console.log(err, "productItem"))
      .finally();
  };
  return (
    <Loyout>
      <div className="container">
        <ProductItemStyle>
          <div className="buy">
            <div className="buy-inputs">
              <input type="text" placeholder="Ismingiz" />
              <input type="text" placeholder="Telefon raqamingiz" />
            </div>
            <div className="buy-price">
              O‘zbekiston bo‘ylab yetkazib berish narxi:{" "}
              {product?.price?.toLocaleString().replace(/,/g, " ")} so‘m
            </div>
            <div className="buy-button ">
              <button>
                <img src="/img/buy_white.svg" alt="" />
                Buyurtma qilish
              </button>
            </div>
            <div className="product-item row">
              <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-5 mb-sm-5">
                <div className="columns">
                  <img src={product?.image} onError="/5203299.jpg" alt="" />
                </div>
              </div>
              <div className="product-item_text col-md-6 col-sm-12 col-xs-12">
                <div className="product-item_text__name">{product?.name}</div>
                <div className="product-item_text__name">
                  {product?.price?.toLocaleString().replace(/,/g, ",")} so‘m
                </div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: product?.description,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="title">Bizning afzalliklarimiz</div>
          <Advantages />
        </ProductItemStyle>
      </div>
    </Loyout>
  );
}
