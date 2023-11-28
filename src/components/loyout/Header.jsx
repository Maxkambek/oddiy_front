/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import { defaultOptions } from "../../const/const";
import { HeaderStyle } from "../../styles/loyout/HeaderStyle";
import Select from "react-select";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { StyledElement } from "../../pages/components/AccountModalStyle";
import { removeToken } from "../../utils/tokenStorge";
import Axios from "../../utils/httpClinet";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [active, setActive] = useState(false);
  const btnRef = React.useRef();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [category, setCategory] = useState([]);
  // const ref = useRef(null);

  // useEffect(() => {
  //   const onClick = () => setActive(!active);
  //   if (active) {
  //     window.addEventListener("click", onClick);
  //   }
  //   return () => {
  //     window.removeEventListener("click", onClick);
  //   };
  // }, [active]);
  const nav = useNavigate();

  const getCategory = () => {
    Axios()
      .get("/main/category/")
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        console.log(res, "res");
        setCategory(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {});
  };

  useEffect(() => {
    getCategory();
  }, []);

  console.log(category);

  const options = [];
  category.map((item) => {
    options.push({ value: item.name, label: item.name });
  });

  return (
    <HeaderStyle>
      <div className="header">
        <div className="container">
          <div className="header_items">
            <div
              className="hamburger-menu"
              style={{ cursor: "pointer" }}
              onClick={onOpen}
            >
              <span
                className="fa-solid fa-bars fa-xl"
                style={{ color: "#3f48cc" }}
              ></span>
            </div>
            <Link to={"/"} className="logo">
              <img src="/img/logo.svg" alt="" />
            </Link>
            <div className="search">
              <form action="">
                <Select
                  {...defaultOptions}
                  options={options}
                  onChange={(choice) => nav(`/category/${choice.value}`)}
                  placeholder="Barchasi"
                />
                <input type="text" placeholder="qidirish.." />
                <button>
                  <img src="/img/search.png" alt="" />
                </button>
              </form>
            </div>
            <div style={{ display: "flex" }}>
              <Link
                to={"https://t.me/umirov_portfolio"}
                target="blank"
                className="phone"
              >
                <span
                  className="fa fa-phone fa-xl"
                  style={{ color: "#3f48cc" }}
                ></span>
              </Link>
              <StyledElement style={{ position: "relative" }} active={active}>
                <div
                  className="account"
                  onClick={() => {
                    setActive(!active);
                  }}
                >
                  <img src="/img/Vector.png" alt="" />
                  <p>Hisob</p>
                </div>
                <ul>
                  {token ? (
                    <>
                      {[
                        {
                          name: "Mening profilim",
                          link: "/admin",
                          id: 1,
                          icon: "fa-regular fa-user",
                        },
                        {
                          name: "Sozlamalar",
                          link: "/admin/settings",
                          id: 2,
                          icon: "fa-solid fa-gear",
                        },
                      ].map((item, i) => {
                        return (
                          <div key={i}>
                            <Link to={item?.link}>
                              <span
                                style={{
                                  display: "flex",
                                  justifyContent: "left",
                                  alignItems: "center",
                                }}
                              >
                                <span
                                  style={{ width: "19px", marginRight: "5px" }}
                                  className={item?.icon}
                                ></span>
                                {item?.name}
                              </span>
                            </Link>
                          </div>
                        );
                      })}
                      <div>
                        <span
                          style={{
                            display: "flex",
                            justifyContent: "left",
                            alignItems: "center",
                          }}
                          onClick={() => {
                            removeToken();
                            navigate("login");
                          }}
                        >
                          <span
                            style={{ width: "19px", marginRight: "5px" }}
                            className={"fa-solid fa-right-from-bracket"}
                          ></span>
                          Chiqish
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <Link to={"/login"}>
                          <span
                            style={{
                              display: "flex",
                              justifyContent: "left",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src="/img/Vector.png"
                              alt=""
                              style={{ width: "19px", marginRight: "5px" }}
                            />
                            Kirish
                          </span>
                        </Link>
                      </div>
                      <div>
                        <Link to={"/sign-up"}>
                          <span
                            style={{
                              display: "flex",
                              justifyContent: "left",
                              alignItems: "center",
                            }}
                          >
                            <span
                              style={{
                                width: "19px",
                                height: "19px",
                                marginRight: "5px",
                                color: "#3f48cc",
                              }}
                              className="fa-solid fa-right-to-bracket fa-md"
                            ></span>
                            Ro'yxatdan o'tish
                          </span>
                        </Link>
                      </div>
                    </>
                  )}
                </ul>
              </StyledElement>
            </div>
          </div>
        </div>
      </div>
      {/* humburger menu */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"xs"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton style={{ marginTop: "15px" }} />
          <DrawerHeader
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "7px",
            }}
          >
            <img src="/img/logo.svg" alt="" style={{ height: "25px" }} />
          </DrawerHeader>

          <DrawerBody></DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </HeaderStyle>
  );
}
