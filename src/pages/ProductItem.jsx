import { useNavigate, useParams } from "react-router";
import Advantages from "../components/advantages";
import Loyout from "../components/loyout/Loyout";
import { ProductItemStyle } from "../styles/ProductItemStyle";
import Axios from "../utils/httpClinet";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Fade } from "react-reveal";
import InputMask from "react-input-mask";

export default function ProductItem() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [obj, setObj] = useState({ order_phone: "", product: +id });
  const [err, setErr] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    getProductItem();
    window?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const getProductItem = () => {
    setLoading(true);
    Axios()
      .get(`/main/product/${id}`)
      .then((res) => {
        setProduct(res?.data);
      })
      .catch((err) => console.log(err, "productItem"))
      .finally(() => setLoading(false));
  };

  const Buy = (e) => {
    e.preventDefault();

    let t = true,
      error = {};
    if (
      !(
        obj?.order_phone
          .replace(/-/g, "")
          .replace(/\(/g, "")
          .replace(/\)/g, "")
          .replace(/\+/g, "")
          .replace(/\s/g, "")
          .replace(/_/g, "")?.length >= 12
      )
    ) {
      error = { ...error, order_phone: true };
      t = false;
    }
    if (!obj?.order_name) {
      error = { ...error, order_name: true };
      t = false;
    }
    if (t) {
      Axios()
        .post("/customers/requests-create/", obj)
        .then((res) => {
          console.log(res?.statusText, "ana");
          if (res?.statusText === "Created") {
            navigate(`/success/${id}`);
          }
        })
        .catch()
        .finally(() => {});
    } else {
      setErr(error);
    }
  };
  const handleChange = (e) => {
    setObj({ ...obj, [e.target.name]: e.target.value });
    setErr({ ...err, [e.target.name]: false });
  };
  return (
    <Loyout>
      <div className="container">
        <ProductItemStyle>
          <div className="buy">
            <form onSubmit={Buy}>
              <div className="buy-inputs ">
                <div
                  className="d-flex flex-column"
                  style={{ textAlign: "left", marginBottom: "27px" }}
                >
                  <input
                    type="text"
                    placeholder="Ismingiz:"
                    onChange={handleChange}
                    name="order_name"
                    value={obj?.order_name}
                  />
                  {err?.order_name === true ? (
                    <Fade bottom>
                      <span style={{ color: "red" }}>ismingizni kiriting</span>{" "}
                    </Fade>
                  ) : null}
                </div>
                <div
                  className="d-flex flex-column"
                  style={{ textAlign: "left", marginBottom: "27px" }}
                >
                  <InputMask
                    placeholder="Telefon raqamingiz:"
                    formatChars={{ b: "[0-9]" }}
                    mask="+998 (bb) bbb-bb-bb"
                    maskChar="_"
                    name="order_phone"
                    value={obj?.order_phone}
                    onChange={handleChange}
                  />
                  {err?.order_phone === true ? (
                    <Fade bottom>
                      <span style={{ color: "red" }}>
                        telefon raqamingizni kiriting
                      </span>
                    </Fade>
                  ) : null}
                </div>
              </div>
              <div className="buy-price">
                O‘zbekiston bo‘ylab yetkazib berish narxi:{" "}
                {loading === true ? (
                  <Skeleton count={1} />
                ) : (
                  product?.price?.toLocaleString().replace(/,/g, " ")
                )}{" "}
                so‘m
              </div>
              <div className="buy-button ">
                <button type="submit">
                  <img src="/img/buy_white.svg" alt="" />
                  Buyurtma qilish
                </button>
              </div>
            </form>
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
