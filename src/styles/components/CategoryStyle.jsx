import styled from "styled-components";

export const CategoryStyle = styled.div`
  background-color: ${({ bg }) => bg};
  display: flex;
  justify-content: center;
  overflow-x: scroll;
  height: 260px;
  border-radius: 12px;
  align-items: center;
  min-width: 175px;
  margin-right: ${({ marginR }) => marginR};
  p {
    color: #3f48cc;
    text-align: center;
    font-family: "Gilroy-SemiBold";
    font-size: 25px;
    font-weight: 400;
    padding: 25px;
  }
`;
