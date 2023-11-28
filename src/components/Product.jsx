import { useEffect, useState } from "react";
import Axios from "../utils/httpClinet";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const nav = useNavigate();
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState([]);
  const [discount, setDiscount] = useState([]);
  const [discountName, setDiscountName] = useState([]);
  const [item, setItem] = useState();
  const [freeDelivery, setfreeDelivery] = useState(false);

  const getProduct = () => {
    Axios()
      .get("/main/product/")
      .then((res) => {
        setProduct(res?.data);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  const flowCreate = () => {
    Axios().post("/customers/flow-create/", {
      product: item.id,
      discount_for_flow: discount,
      name: discountName,
      free_delivery: freeDelivery,
    });
  };

  return (
    <div className="Product">
      <div className="row">
        {product?.map((item, index) => (
          <>
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="product_box">
                <div className="product_img">
                  <img src={item.image} alt="" />
                </div>
                <div className="product_text_box">
                  <div className="product_name">{item.name}</div>
                  <div className="product_category">{item.category.name}</div>
                  <div className="product_price"> {item.price} som</div>
                  <div className="delivery">30 000 sum</div>
                  <div className="zaxirada">Zaxirada 900 ta</div>
                  <div className="reklama">
                    <img src="img/reklama.svg" alt="" />
                    <div onClick={() => nav(`product/${item.id}`)}>
                      Reklama po‘sti
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => setModal(true) & setItem(item)}
                  className="product_btn"
                >
                  Oqim yaratish
                </div>
              </div>
            </div>
          </>
        ))}

        {modal ? (
          <>
            <div className="modalcha">
              <div className="modal_shadow">
                <div className="modal_h">
                  <p>Elektron karset - 30 000</p>
                </div>
                <div className="input_label">Oqim nomi:</div>
                <div className="modal_input">
                  <input
                    value={discountName}
                    onChange={(e) => setDiscountName(e.target.value)}
                    type="text"
                  />
                </div>
                <div className="input_label">Oqim uchun chegirma:</div>
                <div className="modal_input">
                  <input
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    type="number"
                  />
                </div>
                <div className="checkbox">
                  <input
                    value={freeDelivery}
                    onChange={(e) => setfreeDelivery(e.target.value)}
                    type="checkbox"
                  />
                  <div>Yetkazib berish</div>
                </div>
                <div className="modal_buttons">
                  <div onClick={() => setModal(false)} className="modal_btn1">
                    Yopish
                  </div>
                  <div
                    onClick={() => setModal(false) & flowCreate()}
                    className="modal_btn2"
                  >
                    Yaratish
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Product;
