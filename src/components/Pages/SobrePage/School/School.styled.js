import styled from "styled-components";

export const Wrapper = styled.section`
  border-top: 3px solid ${(props) => props.theme.colors.secondary};
  border-bottom: 3px solid ${(props) => props.theme.colors.secondary};

  width: 100%;
  min-height: 40vh;

  display: grid;
  grid-template-columns: 40% 60%;
  justify-content: center;
  align-items: center;

  @media (max-width: 840px) {
    grid-template-columns: 100%;

    padding: 2rem 0;

    gap: 2rem;
  }
`;

export const Image = styled.img`
  box-shadow: 0px 0px 0px 3px ${(props) => props.theme.colors.primary},
    0px 0px 0px 6px ${(props) => props.theme.colors.secondary};

  width: 100%;
  max-height: 280px;
  max-width: 200px;

  margin: 2em;

  transition: box-shadow 0.3s ease;

  @media (max-width: 840px) {
    margin: 0 auto;
  }

  @media (max-width: 280px) {
    width: 80%;
  }
`;

export const TextContainer = styled.div`
  width: 80%;

  & > h1 {
    margin-bottom: 1.75em;

    display: inline-block;
  }

  @media (max-width: 840px) {
    margin: 0 auto;

    text-align: center;
  }

  @media (max-width: 280px) {
    width: 100%;
  }

  &.animated {
    animation: AnimaDown 2s ease;
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

export const SvgContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 3rem;

  & > a {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};

    height: 2em;
    width: 2em;

    & > svg {
      border-radius: 50%;
      box-shadow: 0px 0px 0px 3px ${(props) => props.theme.colors.primary},
        0px 0px 0px 6px ${(props) => props.theme.colors.secondary};

      transition: box-shadow 0.3s ease;
    }

    & > svg:hover,
    & > svg:active,
    & > svg:focus {
      box-shadow: 0px 0px 0px 3px ${(props) => props.theme.colors.secondary},
        0px 0px 0px 6px ${(props) => props.theme.colors.secondary};
    }
  }

  @media (max-width: 840px) {
    padding-top: 2rem;

    flex-direction: row;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;

  align-items: center;

  &.animatedImage {
    animation: AnimaLeftImage 2s ease;
  }

  @media (max-width: 840px) {
    flex-direction: column;

    &.animatedImage {
      animation: AnimaDown 2s ease;
    }
  }

  @keyframes AnimaLeftImage {
    0% {
      transform: translateX(-100px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
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
