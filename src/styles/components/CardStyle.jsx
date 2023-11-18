import styled from "styled-components";

export const CardStyle = styled.div`
  border-radius: 15px;
  border: 2px solid #3f48cc;
  padding: 40px;
  height: 380px;
  .img-card {
    border-radius: 10px;
    background: #edeeff;
    width: 100%;
    height: 221px;
    border: none;
    margin-bottom: 15px;
  }
  p {
    color: #3f48cc;
    font-family: "Gilroy-SemiBold";
    font-size: 27px;
    font-weight: 400;
    margin-bottom: 4px;
  }
  .price {
    display: flex;
    justify-content: space-between;
    .price-number {
      color: #fff;
      font-family: "Gilroy-SemiBold";
      font-size: 20px;
      font-weight: 400;
      border-radius: 4px;
      background: #3f48cc;
      height: 30px;
      padding: 0px 8px;
    }
    .buy {
      display: flex;
      cursor: pointer;
      img {
        margin-right: 7px;
      }
      span {
        color: #3f48cc;
        font-family: "Gilroy-Medium";
        font-size: 20px;
        font-weight: 400;
      }
    }
  }
`;
