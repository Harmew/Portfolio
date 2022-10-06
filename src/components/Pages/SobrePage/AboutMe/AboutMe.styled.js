import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  min-height: 40vh;

  display: grid;
  grid-template-columns: 40% 60%;
  justify-content: center;
  align-items: center;

  & > svg {
    height: 450px;
    width: 300px;

    padding-bottom: 2rem;

    transition: color 0.5s ease;

    & > g {
      scale: 0.15;
    }
  }

  @media (max-width: 840px) {
    grid-template-columns: 100%;

    & > svg {
      height: 20vh;
      width: 100%;
    }
  }
`;

export const TextContainer = styled.div`
  width: 80%;

  & > h1 {
    margin-bottom: 1.75em;

    display: inline-block;
  }

  & > p + p {
    margin-top: 1.5em;
  }

  @media (max-width: 840px) {
    margin: 0 auto;

    text-align: center;

    & :last-child {
      padding-bottom: 3rem;
    }
  }

  @media (max-width: 280px) {
    width: 100%;
  }

  &.animated {
    animation: AnimaDown 1s ease;
  }

  @keyframes AnimaDown {
    0% {
      transform: translateY(-100px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
