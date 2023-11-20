import { Link } from "react-router-dom";
import { FooterStyle } from "../../styles/loyout/FooterStyle";

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer-items">
          <div className="protection">
            2023 oddiy.uz{" "}
            <div style={{ color: "black" }}>Barcha huquqlar himoyalangan</div>
          </div>
          <div className="socials">
            Ijtimoiy tarmoqlarimiz
            <ul>
              <li>
                <Link to="">
                  <span className="fa fa-facebook fa-brands fa-xl"></span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <span className="fa-youtube fa-brands fa-xl"></span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <span className="fa fa-instagram fa-brands fa-xl"></span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <span className="fa fa-telegram fa-brands fa-xl"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
}
