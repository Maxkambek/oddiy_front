import { Link } from "react-router-dom";
import Loyout from "../../components/loyout/Loyout";
import { LoginStyle } from "../../styles/Auth/LoginStyle";

export default function SignUp() {
  return (
    <Loyout>
      <div className="container">
        <LoginStyle>
          <div className="login-items">
            <div className="title">Ro‘yxatdan o‘tish</div>
            <form action="">
              <input type="text" placeholder="Telefon raqamingiz:" />
              <input type="text" placeholder="Parolingiz:" />
              <div className="form-text">
                Allaqachon hisobingiz bormi?
                <Link to={"/login"}>Kirish</Link>
              </div>
              <div className="login_button">
                <button>Kirish</button>
              </div>
            </form>
          </div>
        </LoginStyle>
      </div>
    </Loyout>
  );
}
