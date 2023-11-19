import Advantages from "../components/advantages";
import Loyout from "../components/loyout/Loyout";
import { ProductItemStyle } from "../styles/ProductItemStyle";

export default function ProductItem() {
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
              O‘zbekiston bo‘ylab yetkazib berish narxi: 30.000 so‘m
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
                  <img src="/5203299.jpg" alt="" />
                </div>
              </div>
              <div className="product-item_text col-md-6 col-sm-12 col-xs-12">
                <div className="product-item_text__name">
                  Slim Body ozdiruvchi
                </div>
                <div className="product-item_text__name">139,000 so‘m</div>
                <p>
                  Slim Body оздирувчи аёллар учун
                  <br />
                  <br />
                  Ўрамимиз ҳаво ўтказадиган ва эластик полиестер ва латексдан
                  тайёрланган. Ажойиб мослашувчанлик қоринни қаттиқ текислаши ва
                  орқа ўриндиқларни текислаши мумкин.
                  <br />
                  <br />
                  Бизнинг Slim Body 10 000 та синовдан ўтди ва эластиклиги,
                  мустаҳкамлиги ва бардошлилиги бўйича жуда ажойиб натижа қайт
                  этди.
                  <br />
                  <br />
                  ✅ Қорин бўшлиғини текислаш <br />
                  <br /> ✅ Белни қисқартиради, <br />
                  <br />✅ ҳолатни яхшилайди
                  <br /> <br />✅ туғруқдан кейинги тикланиш. <br />
                  <br /> У спорт залларида, офисларда ва ёга студияларида
                  ишлатилиши мумкин. У бизнинг кийимимиз ичида билиниб қолмайди
                </p>
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
