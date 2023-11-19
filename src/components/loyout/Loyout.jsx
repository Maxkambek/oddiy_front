/* eslint-disable react/prop-types */
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const StyleComponents = styled.div`
  transition: all 0.25s linear;
  min-height: 200px;
  @media (max-width: 500px) {
    /* padding: 50px 20px; */
  }
`;
export default function Loyout(props) {
  return (
    <>
      <Header />
      <StyleComponents className="mainSection">
        {props?.children}
      </StyleComponents>
      <Footer />
    </>
  );
}
