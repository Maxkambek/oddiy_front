import styled from "styled-components";

export const HeaderStyle = styled.div`
  & .header {
    border-bottom: 3px solid #3f48cc;
    background-color: white;
    & .header_items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 32px 28px;
    }
  }
`;
