import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Axios from "../utils/httpClinet";

const NavigationLayout = () => {
  const location = useLocation();
  const [burger, setBurger] = useState(false);
  const [info, setInfo] = useState();

  const getUser = () => {
    Axios()
      .get("/user/user-rud/")
      .then((res) => {
        setInfo(res.data);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="NavigationLayout">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-6 header_box">
            <div
              onClick={() => setBurger(!burger)}
              className={`burger pr-4 ml-auto d-flex d-lg-none ${
                burger ? "burgered" : ""
              }`}
            >
              <img src="img/bar.png" alt="" />
            </div>
            <div className="logo_img">
              <img src="img/logo.svg" alt="" />
            </div>
          </div>
          <div className="col-lg-7 col-4 for_invise"></div>
          <div className="col-lg-3 col-6 for_mobile_flex  d-flex justify-content-end align-items-center">
            <div className="olmos_box">
              <img src="img/olmos.svg" alt="" />
              <div>Olmos: 0</div>
            </div>
            <div className="user_img">
              <img src="img/user.svg" alt="" />
              <div className="username">{info?.name}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="for_line"></div>
      <div className="container">
        <div className="row">
          <div className={`col-lg-3 right ${burger ? "active" : ""}`}>
            <div className="sidebar_box">
              <Link to="/admin" className="sidebar_link_box">
                <img src="img/yulduz.svg" alt="" />
                <div
                  className={`sideabar_a ${
                    location.pathname === "/admin" ? "active" : ""
                  }`}
                >
                  Konkurs
                </div>
              </Link>
              <Link to="/product" className="sidebar_link_box ">
                <img src="img/savat.svg" alt="" />
                <div
                  className={`sideabar_a ${
                    location.pathname === "/product" ? "active" : ""
                  }`}
                >
                  Tovarlar
                </div>
              </Link>
              <Link to="/flow" className="sidebar_link_box">
                <img src="img/oqim.svg" alt="" />
                <div
                  className={`sideabar_a ${
                    location.pathname === "/flow" ? "active" : ""
                  }`}
                >
                  Oqimlar
                </div>
              </Link>
              <Link to="/flow-statistics" className="sidebar_link_box">
                <img src="img/stat.svg" alt="" />
                <div
                  className={`sideabar_a ${
                    location.pathname === "/flow-statistics" ? "active" : ""
                  }`}
                >
                  Statistika
                </div>
              </Link>
              <Link to="/payment" className="sidebar_link_box">
                <img src="img/tolov.svg" alt="" />
                <div
                  className={`sideabar_a ${
                    location.pathname === "/payment" ? "active" : ""
                  }`}
                >
                  To‘lovlar
                </div>
              </Link>
              <Link to="/requests" className="sidebar_link_box">
                <img src="img/sorov.svg" alt="" />
                <div
                  className={`sideabar_a ${
                    location.pathname === "/requests" ? "active" : ""
                  }`}
                >
                  So‘rovlar
                </div>
              </Link>
              <Link to="/diamond" className="sidebar_link_box">
                <img src="img/olmoss.svg" alt="" />
                <div
                  className={`sideabar_a ${
                    location.pathname === "/diamond" ? "active" : ""
                  }`}
                >
                  Olmoslar
                </div>
              </Link>
              <Link to="/settings" className="sidebar_link_box">
                <img src="img/kluch.svg" alt="" />
                <div
                  className={`sideabar_a ${
                    location.pathname === "/settings" ? "active" : ""
                  }`}
                >
                  Sozlamalar
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-9 left">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationLayout;
