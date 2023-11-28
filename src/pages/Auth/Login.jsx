import { Link, useNavigate } from "react-router-dom";
import Loyout from "../../components/loyout/Loyout";
import { LoginStyle } from "../../styles/Auth/LoginStyle";
import { useState } from "react";
import Axios from "../../utils/httpClinet";
import { Fade } from "react-reveal";
import { Spinner } from "@chakra-ui/react";
import InputMask from "react-input-mask";
import { setToken } from "../../utils/tokenStorge";

export default function Login() {
  const [obj, setObj] = useState({ phone: "" });
  const [err, setErr] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate("");
  const Login = async (e) => {
    e?.preventDefault();

    let t = true,
      error = {};
    if (
      !(
        obj?.phone
          .replace(/-/g, "")
          .replace(/\(/g, "")
          .replace(/\)/g, "")
          .replace(/\+/g, "")
          .replace(/\s/g, "")
          .replace(/_/g, "")?.length >= 12
      )
    ) {
      error = { ...error, phone: true };
      t = false;
    }
    if (!obj?.password) {
      error = { ...error, password: true };
      t = false;
    }

    if (t) {
      setLoading(true);
      Axios()
        .post("/user/login/", obj)
        .then((res) => {
          if (res?.data.message === "OK") {
            navigate("/admin");
            setToken(res?.data?.token);
            console.log(res?.data, "eee");
          }
        })
        .catch((err) => {
          setErr({ ...err, errL: err?.response?.data?.message });
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
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
        <LoginStyle>
          <div className="login-items">
            <div className="title">Kirish</div>
            <form onSubmit={Login}>
              <div className="input">
                <InputMask
                  placeholder="Telefon raqamingiz:"
                  formatChars={{ b: "[0-9]" }}
                  mask="+998 (bb) bbb-bb-bb"
                  maskChar="_"
                  name="phone"
                  value={obj?.phone}
                  onChange={handleChange}
                />
                {err?.phone === true ? (
                  <Fade bottom>
                    <span>telefon raqamingizni kiriting</span>
                  </Fade>
                ) : null}
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder="Parolingiz:"
                  onChange={handleChange}
                  name="password"
                  value={obj?.password}
                />

                {err?.password === true ? (
                  <Fade bottom>
                    <span>parol kiriting</span>
                  </Fade>
                ) : null}
              </div>

              {err?.errL ? (
                <Fade bottom>
                  <span style={{ color: "red" }}>{err?.errL}</span>
                </Fade>
              ) : null}
              <div className="form-text">
                Hisobingiz yo‘qmi?
                <Link to={"/sign-up"}>Ro‘yxatdan o‘ting</Link>
              </div>
              <div className="login_button  ">
                <button className="d-flex justify-content-center  align-items-center">
                  {loading === true ? (
                    <Spinner size="sm" className="mx-2" />
                  ) : (
                    ""
                  )}{" "}
                  {`    Kirish`}
                </button>
              </div>
            </form>
          </div>
        </LoginStyle>
      </div>
    </Loyout>
  );
}
