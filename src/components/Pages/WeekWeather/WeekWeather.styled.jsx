import styled from "styled-components";
import "../../../helpers/variables.css";

export const WeekWeatherContainer = styled.div`
  background: var(--container-color);
  box-shadow: 0 8px 32px 0 var(--shadow-color);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: 10px;
  border: 1px solid var(--border-color);
  width: 800px;
  height: 300px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;

  @media screen and (max-width: 800px) {
    width: 80%;
    height: auto;
    margin: 0 auto;
  }

  h2 {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 19px;
    line-height: 20px;
    margin-bottom: 30px;
    color: var(--text-color);
  }

  ul {
    display: flex;
    justify-content: space-between;
    padding: 0;

    li {
      width: 160px;

      &:not(:last-child) {
        border-right: 2px solid var(--text-color);
      }

      p {
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 15px;
        line-height: 20px;
        color: var(--text-color);
      }
      img {
        margin: 0 auto;
      }
      @media screen and (max-width: 800px) {
        margin: 0 auto 20px auto;

        &:not(:last-child) {
          border-right: none;
          border-bottom: 2px solid var(--text-color);
          padding-bottom: 20px;
        }
      }
    }

    @media screen and (max-width: 800px) {
      display: block;
    }
  }
`;

export const ClearMessage = styled.p`
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 25px;
  line-height: 20px;
  color: var(--text-color);
  text-align: center;
  margin-top: 40px;

  @media screen and (max-width: 800px) {
    margin-top: 0;
  }
`;
