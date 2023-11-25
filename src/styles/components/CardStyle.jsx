import styled from "styled-components";

export const CardStyle = styled.div`
  border-radius: 15px;
  border: 2px solid #3f48cc;
  padding: 40px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .img-card {
    border-radius: 10px;
    background: #edeeff;
    width: 100%;
    height: 221px;
    border: none;
    margin-bottom: 15px;
    position: relative;
    img {
      padding: 28px;
      transition: 1s ease;
      -o-object-fit: cover;
      object-fit: cover;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      border-radius: 10px;
      background: #edeeff;
    }
  }
  .card_name {
    color: #3f48cc;
    font-family: "Gilroy-SemiBold";
    font-size: 26px;
    font-weight: 400;
    margin-bottom: 4px;
    line-height: normal;
    .card_name_link {
      min-height: 24px;
    }
    @media (max-width: 1555px) {
      font-size: 20px;
    }
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
      min-height: 30px;
      padding: 0px 8px;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 1555px) {
        font-size: 18px;
      }
    }
    .buy {
      display: flex;
      align-items: center;
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
