import styled from "styled-components";

export const StyledElement = styled.div`
  position: relative;
  & ul {
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(13, 46, 105, 0.2);
    list-style: none;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    right: 0px;
    top: 0px;
    margin-top: 50px;
    display: flex;
    padding: 0px 25px 0 12px;
    z-index: 2;
    flex-direction: column;
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    transform: translateY(${({ active }) => (active ? 0 : "-12px")});
    opacity: ${({ active }) => (active ? 1 : 0)};
    visibility: ${({ active }) => (active ? "visible" : "hidden")};

    @media (max-width: 992px) {
      margin-top: 40px;
    }

    & div {
      cursor: pointer;
      font-weight: 400;
      font-size: 15px;
      padding: 12px 0px;
      white-space: nowrap;
      margin: 0;
      font-family: "Gilroy-Regular";
      @media (max-width: 768px) {
        padding: 5px 0px;
      }
      &[data-active="active"] {
        background: #3f48cc;
        color: #ffffff;
      }
      &[data-active="inactive"] {
        background: transparent;
      }
      &:last-child {
        border-bottom: none;
      }
      &:hover {
        color: #3f48cc;
      }
      & p {
        height: 100%;
        margin: 0;
        width: 100%;
      }
    }
  }
`;
