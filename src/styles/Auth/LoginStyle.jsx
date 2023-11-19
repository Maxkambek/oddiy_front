import styled from "styled-components";

export const LoginStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 188px 0 216px 0;
  @media (max-width: 1550px) {
    margin: 100px 0 200px 0;
  }
  @media (max-width: 300px) {
    margin: 130px 0 200px 0;
  }
  .login-items {
    .title {
      color: #3f48cc;
      font-family: "Gilroy-SemiBold";
      font-size: 50px;
      font-weight: 400;
      line-height: normal;
      text-align: center;
      margin-bottom: 40px;
      @media (max-width: 992px) {
        font-size: 35px;
        margin-bottom: 20px;
      }
    }
    @media (max-width: 450px) {
      width: 100%;
    }
    form {
      display: grid;
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
        margin-bottom: 30px;
        outline: none;
        ::placeholder {
          color: #b0b5ff;
          font-family: "Gilroy-Regular";
        }
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
      .form-text {
        margin: 10px 0;
        text-align: center;
        color: black;
        font-family: "Gilroy-Regular";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        a {
          color: #3f48cc;
        }
        @media (max-width: 992px) {
          font-size: 15px;
        }
      }
      .login_button {
        display: flex;
        justify-content: center;
        margin-top: 30px;
        button {
          padding: 0px 49px;
          color: #fff;
          font-family: "Gilroy-SemiBold";
          font-size: 25px;
          font-weight: 400;
          line-height: normal;
          border-radius: 10px;
          background: #3f48cc;
          width: 160px;
          height: 60px;
        }
        @media (max-width: 992px) {
          button {
            padding: 15px;
            font-size: 15px;
            height: 50px;
          }
          margin-top: 10px;
        }
      }
    }
  }
`;
