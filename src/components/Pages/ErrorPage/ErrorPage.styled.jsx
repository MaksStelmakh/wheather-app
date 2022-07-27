import styled from "styled-components";
import "../../../helpers/variables.css";

export const ErrorText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 100px;

  h1,
  p,
  a {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 200px;
    line-height: 250px;
    color: var(--text-color);
  }

  p,
  a {
    font-size: 50px;
    line-height: 60px;
  }

  a {
    margin: 30px auto 0 auto;
    color: var(--color-link);
    width: 200px;

    &:hover {
      border-bottom: 2px solid var(--color-link);
    }
  }

  @media screen and (max-width: 700px) {
    h1 {
      font-size: 100px;
      line-height: 120px;
    }

    p,
    a {
      font-size: 30px;
    }
  }
`;
