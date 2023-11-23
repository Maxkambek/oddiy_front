import styled from "styled-components";

export const ProductItemStyle = styled.div`
  text-align: center;
  margin-top: 63px;
  margin-bottom: 50px;
  .buy {
    .buy-inputs {
      input {
        height: 60px;
        border-radius: 10px;
        background: #edeeff;
        font-family: "Gilroy-Regular";
        font-size: 20px;
        font-weight: 400;
        line-height: normal;
        padding: 23px 16px;
        width: 418px;
        outline: none;

        @media (max-width: 450px) {
          width: 100%;
        }
        @media (max-width: 992px) {
          padding: 15px 16px;
          height: 50px;
          font-size: 15px;
          margin-bottom: 20px;
        }
      }
      input::placeholder {
        color: #b0b5ff;
      }
      input:first-child {
        margin-right: 30px;
        @media (max-width: 992px) {
          margin-right: 0;
        }
      }
    }
    .buy-price {
      margin-bottom: 27px;
      color: #3f48cc;
      font-family: "Gilroy-Regular";
      font-size: 20px;
      font-weight: 400;
      line-height: normal;
      @media (max-width: 992px) {
        font-size: 18 px;
      }
    }
    .buy-button {
      display: flex;
      justify-content: center;
      button {
        img {
          margin-right: 12px;
        }
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
        border-radius: 10px;
        background: #3f48cc;
        color: #fff;
        font-family: "Gilroy-SemiBold";
        font-size: 25px;
        font-weight: 400;
        line-height: normal;
        @media (max-width: 992px) {
          font-size: 20px;
          padding: 10px 12px;
          img {
            width: 20px;
          }
        }
      }
      margin-bottom: 72px;
    }
    .product-item {
      margin-bottom: 120px;
      display: flex;
      justify-content: center;
      /* align-items: center; */
      img {
        /* border: 1px solid red; */
        width: 650px;
        margin-right: 56px;
        border-radius: 10px;
        background: #edeeff;
      }
      .product-item_text {
        .product-item_text__name {
          color: #3f48cc;
          font-family: "Gilroy-Bold";
          font-size: 40px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          text-align: left;
          margin-bottom: 10px;
          @media (max-width: 992px) {
            font-size: 35px;
          }
          @media (max-width: 576px) {
            font-size: 30px;
          }
        }
        p {
          text-align: left;
          color: #000;
          font-family: "Gilroy-Regular";
          font-size: 17px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
      @media (max-width: 992px) {
        margin-bottom: 60px;
      }
    }
  }
  .title {
    color: #3f48cc;
    font-family: "Gilroy-SemiBold";
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left;
  }
`;
