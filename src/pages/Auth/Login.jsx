import { Link } from "react-router-dom";
import Loyout from "../../components/loyout/Loyout";
import { LoginStyle } from "../../styles/Auth/LoginStyle";

export default function SignUp() {
  return (
    <Loyout>
      <div className="container">
        <LoginStyle>
          <div className="login-items">
            <div className="title">Kirish</div>
            <form action="">
              <input type="text" placeholder="Telefon raqamingiz:" />
              <input type="text" placeholder="Parolingiz:" />
              <div className="form-text">
                Hisobingiz yo‘qmi?
                <Link to={"/sign-up"}>Ro‘yxatdan o‘ting</Link>
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
