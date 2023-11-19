import styled from "styled-components";

export const AdvantagesStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(258px, 1fr));
  gap: 31px;
  margin-top: 33px;
  .advantages-items {
    border-radius: 10px;
    background: #edeeff;
    height: 137px;
    display: flex;
    align-items: center;
    display: flex;
    /* justify-content: space-between; */
    padding: 40px;
    img {
      margin-right: 20px;
      width: 60px;
    }
    .texts {
      .title {
        color: #3f48cc;
        font-family: "Gilroy-SemiBold";
        font-size: 15px;
        font-weight: 400;
        margin-bottom: 2px;
        line-height: normal;
      }
      .desc {
        color: #3f48cc;
        font-family: "Gilroy-Regular";
        font-size: 10px;
        font-weight: 400;
        line-height: normal;
        text-align: left;
      }
    }
  }
`;
