import styled from "styled-components";
import "../../../helpers/variables.css";

export const WeatherContainer = styled.div`
  background: var(--container-color);
  box-shadow: 0 8px 32px 0 var(--shadow-color);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: 10px;
  border: 1px solid var(--border-color);
  width: 400px;
  height: 300px;
  margin: 0 auto;
  padding: 20px;

  @media screen and (max-width: 500px) {
    width: 100%;
  }

  div {
    text-align: center;
  }
`;

export const MainInfo = styled.div`
  h2 {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 19px;
    line-height: 20px;
    color: var(--text-color);
    margin-bottom: 20px;
  }
  p {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    color: var(--text-color);
  }

  p:nth-of-type(1) {
    margin: 0;
  }

  img {
    width: 150px;
    height: 150px;
  }

  span {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 19px;
    line-height: 20px;
    color: var(--text-color);
  }

  div {
    display: flex;
    justify-content: center;

    div {
      margin-top: 27px;
      display: block;
      p {
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 40px;
        line-height: 50px;
        color: var(--text-color);

        &:nth-of-type(2) {
          font-size: 15px;
          line-height: 20px;
        }
        &:nth-of-type(3) {
          font-size: 15px;
          line-height: 20px;
        }
      }
    }
  }
`;

export const ClearMessage = styled.p`
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: var(--text-color);
  text-align: center;
  margin-top: 40px;
`;
