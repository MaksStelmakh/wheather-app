import styled from "styled-components";
import "../../helpers/variables.css";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 20px 15px 20px 15px;
  background: var(--container-color);
  box-shadow: 0 8px 32px 0 var(--shadow-color);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: 0 0 10px 10px;
  border: 1px solid var(--border-color);

  @media screen and (max-width: 500px) {
    text-align: center;
    height: 90px;
    padding: 5px 15px 5px 15px;
    display: block;
  }
`;

export const Logo = styled.div`
  display: flex;

  svg {
    fill: orange;
    animation: 6s linear infinite rot;
  }

  p {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 19px;
    line-height: 40px;
    text-transform: uppercase;
    color: var(--text-color);
  }

  @keyframes rot {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;

export const Navigation = styled.div`
  padding-top: 10px;
  a {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 18px;
    line-height: 5px;
    color: var(--text-color);
    padding: 5px;

    &:nth-of-type(1) {
      margin-right: 10px;
    }

    &:hover {
      color: var(--color-white);
    }
  }

  @media screen and (max-width: 500px) {
  }
`;
