/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
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
import React from "react";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();
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
                <Select {...defaultOptions} placeholder="Barchasi" />
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
              <div style={{ position: "relative" }}>
                <div className="account">
                  <img src="/img/Vector.png" alt="" />
                  <p>Hisob</p>
                </div>
              </div>
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
