import { defaultOptions } from "../../const/const";
import { HeaderStyle } from "../../styles/loyout/HeaderStyle";
import Select from "react-select";

export default function Header() {
  return (
    <HeaderStyle>
      <div className="header">
        <div className="container">
          <div className="header_items">
            <div className="hamburger-menu">
              <span
                className="fa-solid fa-bars fa-xl"
                style={{ color: "#3f48cc" }}
              ></span>
            </div>
            <div className="logo">
              <img src="/img/logo.svg" alt="" />
            </div>
            <div className="search">
              <form action="">
                <Select {...defaultOptions} placeholder="Barchasi" />
                <input type="text" placeholder="qidirish.." />
                <button>
                  <img src="/img/search.png" alt="" />
                </button>
              </form>
            </div>
            <div style={{ display: "flex" }}>
              <div className="phone">
                <span
                  className="fa fa-phone fa-lg"
                  style={{ color: "#3f48cc" }}
                ></span>
              </div>
              <div className="account">
                <img src="/img/Vector.png" alt="" />
                <p>Hisob</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeaderStyle>
  );
}
