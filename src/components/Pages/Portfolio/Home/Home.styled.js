import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  border-bottom: 3px solid ${(props) => props.theme.colors.secondary};

  height: calc(100vh + 3px);
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  & > :nth-child(1) {
    height: 100%;
    width: 100%;

    z-index: 0;

    transition: color 0.5s ease;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    & > g {
      scale: 0.3;
    }

    @media (min-width: 1980px) {
      & > g {
        scale: 0.1;
      }
    }
  }

  & > svg[class*="1"],
  & > svg[class*="2"],
  & > svg[class*="3"] {
    background-color: ${(props) => props.theme.colors.primary};
    border: 3px solid ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.secondary};

    max-width: 250px;
    max-height: 250px;
    margin: 0 10%;

    position: absolute;

    transition: all 0.5s ease-in-out;
  }

  & > svg[class*="1"] {
    bottom: 100px;
    right: 0;
    z-index: 1;
    animation: MoveFowardsOne 20s ease infinite;
  }

  & > svg[class*="2"] {
    bottom: 120px;
    right: 20px;
    z-index: 2;
    animation: MoveFowardsTwo 20s ease infinite;
  }

  & > svg[class*="3"] {
    bottom: 140px;
    right: 40px;
    z-index: 3;
    animation: MoveFowardsThree 20s ease infinite;
  }

  // Media Queries
  @media (max-width: 768px) {
    & > svg[class*="1"],
    & > svg[class*="2"],
    & > svg[class*="3"] {
      max-width: 200px;
      max-height: 200px;
      margin: 0 10%;
    }
  }

  @media (max-width: 410px) {
    & > svg[class*="1"],
    & > svg[class*="2"],
    & > svg[class*="3"] {
      max-width: 200px;
      max-height: 200px;

      margin-left: auto;
      margin-right: auto;

      text-align: center;

      position: absolute;
      left: 0;
      right: 0 !important;
    }

    & > svg[class*="1"] {
      animation: MoveFowardsOneMobile 20s ease infinite;
    }

    & > svg[class*="2"] {
      animation: MoveFowardsTwoMobile 20s ease infinite;
    }

    & > svg[class*="3"] {
      animation: MoveFowardsThreeMobile 20s ease infinite;
    }
  }

  // KeyFrames
  @keyframes MoveFowardsOne {
    35% {
      transform: translate(-12vw, -12vh);
    }
    35% {
      transform: translate(-12vw, -12vh);
    }
    90% {
      transform: translate(0, 0);
    }
  }

  @keyframes MoveFowardsTwo {
    35% {
      transform: translate(-15vw, -15vh);
    }
    37% {
      transform: translate(-15vw, -15vh);
    }
    90% {
      transform: translate(0, 0);
    }
  }

  @keyframes MoveFowardsThree {
    35% {
      transform: translate(-18vw, -18vh);
    }
    39% {
      transform: translate(-18vw, -18vh);
    }
    90% {
      transform: translate(0, 0);
    }
  }

  // Mobile Version Keyframes
  @keyframes MoveFowardsOneMobile {
    50% {
      transform: translateY(-30vh);
    }
    50% {
      transform: translateY(-30vh);
    }
    90% {
      transform: translateY(0);
    }
  }

  @keyframes MoveFowardsTwoMobile {
    40% {
      transform: translateY(-30vh);
    }
    60% {
      transform: translateY(-30vh);
    }
    90% {
      transform: translateY(0);
    }
  }

  @keyframes MoveFowardsThreeMobile {
    30% {
      transform: translateY(-30vh);
    }
    70% {
      transform: translateY(-30vh);
    }
    90% {
      transform: translateY(0);
    }
  }
`;
