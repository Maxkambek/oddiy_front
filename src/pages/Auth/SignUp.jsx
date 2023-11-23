import { Link, useNavigate } from "react-router-dom";
import Loyout from "../../components/loyout/Loyout";
import { LoginStyle } from "../../styles/Auth/LoginStyle";
import Axios from "../../utils/httpClinet";
import { useState } from "react";
import InputMask from "react-input-mask";
import { Spinner } from "@chakra-ui/react";
import { Fade } from "react-reveal";

export default function SignUp() {
  const [obj, setObj] = useState({ phone: "" });
  const [err, setErr] = useState({});
  const [errR, setErrR] = useState("");
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const SignUp = async (e) => {
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
        .post("/user/register/", obj)
        .then((res) => {
          if (res?.status === 200) {
            setStep(1);
          } else {
            setStep(0);
          }
        })
        .catch((err) => {
          setErrR(err?.response?.data?.message);
          // setErr({ ...err, message: true });
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setErr(error);
    }
  };
  const Verify = (e) => {
    e?.preventDefault();

    let t = true,
      error = {};
    if (!obj?.phone) {
      error = { ...error, phone: true };
      t = false;
    }
    if (!obj?.password) {
      error = { ...error, password: true };
      t = false;
    }
    if (!obj?.code) {
      error = { ...error, code: true };
      t = false;
    }
    if (t) {
      setLoading(true);
      Axios()
        .post("/user/verify-phone/", obj)
        .then((res) => {
          if (res?.data?.message === "User verified") {
            navigate("/");
          }
        })
        .catch((err) => {
          setErrR(err?.response?.data?.message);
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
            <div className="title">Ro‘yxatdan o‘tish</div>
            <form onSubmit={step === 0 ? SignUp : Verify}>
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
                    {" "}
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
                    <span>parol kiriting</span>{" "}
                  </Fade>
                ) : null}
              </div>
              <div className="input">
                {step === 1 ? (
                  <input
                    type="text"
                    placeholder="Code:"
                    onChange={handleChange}
                    name="code"
                    value={obj?.code}
                  />
                ) : null}
              </div>

              {errR !== "" ? (
                <Fade bottom>
                  <span style={{ color: "red" }}>{errR}</span>
                </Fade>
              ) : (
                ""
              )}

              <div className="form-text">
                Allaqachon hisobingiz bormi?
                <Link to={"/login"}>Kirish</Link>
              </div>
              <div className="login_button">
                <button
                  type="submit"
                  className="d-flex justify-content-center  align-items-center"
                >
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
