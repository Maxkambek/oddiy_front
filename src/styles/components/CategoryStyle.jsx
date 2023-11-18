import styled from "styled-components";

export const CategoryStyle = styled.div`
  background-color: ${({ bg }) => bg};
  display: flex;
  justify-content: center;
  overflow-x: scroll;
  height: 260px;
  border-radius: 12px;
  /* align-items: center; */
  min-width: 175px;
  padding: 71px 33px 33px;
  margin-right: ${({ marginr }) => marginr};
  p {
    color: #3f48cc;
    text-align: center;
    font-family: "Gilroy-SemiBold";
    font-size: 25px;
    font-weight: 400;
    line-height: normal;
    margin-top: 33px;
  }
  @media (max-width: 992px) {
    padding: 40px 33px 33px;
    height: 200px;
    p {
      margin-top: 20px;
    }
  }
`;
