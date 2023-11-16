import { HeaderStyle } from "../../styles/loyout/HeaderStyle";

export default function Header() {
  return (
    <HeaderStyle>
      <div className="header">
        <div className="container">
          <div className="header_items">
            <div className="logo">
              <img src="/img/logo.svg" alt="" />
            </div>
            <div className="search">
              <input type="text" />
            </div>
            <div className="accaunt">Hisob</div>
          </div>
        </div>
      </div>
    </HeaderStyle>
  );
}
