import styled from "styled-components";
import "../../helpers/variables.css";

export const InputContainer = styled.div`
  position: relative;
  padding: 15px 0 0;
  width: 50%;
  margin: 15px auto 50px auto;

  input {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid var(--color-white);
    outline: 0;
    font-size: 20px;
    font-family: var(--font-family);
    color: var(--color-white);
    padding: 7px 0;
    background: transparent;
    transition: var(--transition);

    &::placeholder {
      color: transparent;
    }
    &:placeholder-shown ~ label {
      font-size: 20px;
      cursor: text;
      top: 20px;

      @media screen and (max-width: 500px) {
        font-size: 16px;
      }
    }

    &:focus {
      ~ label {
        position: absolute;
        top: 0;
        display: block;
        transition: var(--transition);
        font-size: 16px;
        color: var(--color-white);
        font-weight: 700;
      }
      padding-bottom: 6px;
      font-weight: 700;
      border-width: 3px;
    }
  }

  label {
    position: absolute;
    top: 0;
    display: block;
    transition: var(--transition);
    font-size: 1rem;
    font-family: var(--font-family);
    color: var(--color-white);
  }
  div {
    position: absolute;
    bottom: -20px;
    p {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 15px;
      line-height: 15px;
      color: var(--text-color);
    }
  }

  button {
    position: absolute;
    top: 20px;
    right: 5px;
    background-color: inherit;
    border: none;
    cursor: pointer;

    svg {
      fill: var(--color-white);
    }
  }
`;
