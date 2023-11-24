import styled from "styled-components";

export const HomeStyles = styled.div`
  padding: 45px 0;
  .title {
    color: #3f48cc;
    font-family: "Gilroy-SemiBold";
    font-size: 40px;
    font-weight: 400;
    margin: 0;
    @media (max-width: 992px) {
      font-size: 28px;
    }
  }
  .categories {
    margin-top: 12px;
    margin-bottom: 80px;
  }
  .popular-categories {
    margin-bottom: 80px;
    .title {
      margin-bottom: 33px;
    }
    .popular-categories-items {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
      gap: 70px;
    }
  }
`;
