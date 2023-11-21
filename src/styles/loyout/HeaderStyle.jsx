import styled from "styled-components";

export const HeaderStyle = styled.div`
  & .header {
    border-bottom: 3px solid #3f48cc;
    background-color: white;
    position: relative;
    & .header_items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 32px 0px;
      @media (max-width: 1536px) {
        padding: 25px 0;
      }
      @media (max-width: 992px) {
        padding: 20px 0px;
      }
      .logo {
        @media (max-width: 992px) {
          img {
            width: 100px;
          }
        }
      }
      .hamburger-menu {
        display: none;
        @media (max-width: 992px) {
          display: block;
        }
      }
      .search {
        form {
          width: 636px;
          border-radius: 6px;
          border: 3px solid #3f48cc;
          padding: 24px;
          font-family: "Gilroy-Regular";
          height: 60px;
          background-color: #edeeff;
          align-items: center;
          display: flex;
          @media (max-width: 1200px) {
            width: 550px;
          }
          input {
            outline: none;
            background-color: #edeeff;
            padding-left: 35px;
            padding-right: 75px;
            width: calc(100% - 166px);
            ::placeholder {
              color: #b0b5ff;
              font-family: "Gilroy-Regular";
              font-size: 15px;
            }
            ::after {
              width: 15px;
              content: "";
              clear: both;
              display: table;
            }
          }
        }

        @media (max-width: 992px) {
          display: none;
        }
      }
      .phone {
        margin-right: 10px;
        display: none;
        @media (max-width: 992px) {
          display: block;
        }
      }
      .account {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
          margin-bottom: 0;
          color: #3f48cc;
          font-weight: 400;
          font-family: "Gilroy-SemiBold";
          font-size: 30px;
          @media (max-width: 992px) {
            display: none;
          }
        }
        img {
          margin-right: 9px;
        }
        @media (max-width: 992px) {
          img {
            width: 25px;
            height: 25px;
          }
          p {
            font-size: 22px;
          }
        }
      }
    }
    .logout-modal {
      margin-top: 10px;
      border-radius: 7px;
      padding: 10px 20px;
      z-index: 999;
      background-color: white;
      position: absolute;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      /* right: 5%; */
    }
  }
`;
