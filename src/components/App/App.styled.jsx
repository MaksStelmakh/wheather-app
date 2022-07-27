import styled from "styled-components";
import "../../helpers/variables.css";

export const Container = styled.div`
  position: relative;
  width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const TransitionState = styled.div`
  ${(props) => {
    if (props.animation === "fadeIn") {
      return `animation: 0.5s fadeIn forwards;`;
    } else if (props.animation === "fadeOut") {
      return `animation: 0.5s fadeOut forwards;`;
    }
  }}

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate(0, -50px);
    }
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translate(0px, 0px);
    }
    to {
      transform: translate(0px, -50px);
      opacity: 0;
    }
  }
`;
