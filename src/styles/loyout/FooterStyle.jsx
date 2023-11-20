import styled from "styled-components";

export const FooterStyle = styled.div`
  border-top: 3px solid #3f48cc;
  padding-top: 43px;
  padding-bottom: 36px;
  .footer-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .protection {
      color: #3f48cc;
      font-family: "Gilroy-Medium";
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .socials {
      color: #3f48cc;
      font-family: "Gilroy-SemiBold";
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      display: flex;
      ul {
        display: flex;
        li {
          margin: 0 14px;
          list-style-type: none;
          border-radius: 50%;
          opacity: 0.2;
          transition: all 0.1s ease;
        }
        li:hover {
          opacity: 1;
        }
      }
      @media (max-width: 500px) {
        display: block;
        ul {
          margin-top: 20px;
          padding: 0;
          li:first-child {
            margin-left: 0;
          }
        }
      }
    }
    @media (max-width: 992px) {
      display: block;
      .protection {
        margin-bottom: 20px;
      }
    }
  }
`;
