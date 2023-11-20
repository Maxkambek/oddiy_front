import styled from "styled-components";

export const CategoriesItemStyle = styled.div`
  margin-top: 106px;
  margin-bottom: 154px;
  @media (max-width: 992px) {
    margin-top: 50px;
    margin-bottom: 154px;
  }
  .title_c {
    margin-bottom: 163px;
    border-radius: 12px;
    background: #fff9ed;
    position: relative;

    h1 {
      color: #3f48cc;
      font-family: "Gilroy-SemiBold";
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      padding: 110px;
    }
    img {
      position: absolute;
      top: 0;
      right: 10%;
    }
    @media (max-width: 992px) {
      margin-bottom: 50px;
      h1 {
        font-size: 40px;
        padding: 70px 80px;
      }
      img {
        display: none;
      }
    }
    @media (max-width: 480px) {
      h1 {
        padding: 40px 30px;
      }
    }
  }
  .title {
    color: #3f48cc;
    font-family: "Gilroy-SemiBold";
    font-size: 50px;
    font-weight: 400;
    line-height: normal;
    /* text-align: center; */
    margin-bottom: 40px;
    @media (max-width: 992px) {
      font-size: 35px;
      margin-bottom: 20px;
    }
  }
  .products {
    display: flex;
    margin-bottom: 157px;
    .products-items {
      border-radius: 20px;
      background: #edeeff;
      padding: 36px;
      margin-right: 104px;
      height: 100%;

      .products-item {
        width: 328px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 17px 19px;
        border-radius: 10px;
        background: #3f48cc;
        box-shadow: 0px 5px 20px 0px rgba(63, 72, 204, 0.5);
        margin-bottom: 47px;
        p {
          margin: 0;
          color: #fff;
          font-family: "Gilroy-SemiBold";
          font-size: 30px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
      .products-item:last-child {
        margin-bottom: 0;
      }
    }
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
      gap: 50px;
      width: calc(100% - 328px - 104px);
    }
    @media (max-width: 1536px) {
      .products-items {
        padding: 25px;
        margin-right: 50px;
        .products-item {
          padding: 15px 15px;
          width: 300px;
        }
      }
    }
    @media (max-width: 768px) {
      margin-bottom: 80px;
      .products-items {
        padding: 20px;
        margin-right: 30px;
        .products-item {
          padding: 15px 15px;
          width: 250px;
          p {
            font-size: 25px;
          }
        }
      }
    }
    @media (max-width: 640px) {
      flex-direction: column-reverse;
      .products-items {
        margin-right: 0;
        .products-item {
          width: 100%;
        }
      }
      .cards {
        margin-bottom: 50px;
        width: 100%;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      }
    }
  }
`;
