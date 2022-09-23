import styled from "styled-components";

export const BackGround = styled.img`
  width: 100%;
  height: calc(100vh + 2px);
  transition: 0.5s ease;
  object-fit: cover;
  z-index: -1;
  position: absolute;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &.light {
    filter: invert(1);
  }
`;

export const Wrapper = styled.section`
  border-bottom: 2px solid ${({ theme }) => theme.colors.secundary};
  width: 100%;
  height: calc(100vh + 2px);
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    max-width: 250px;
    max-height: 250px;
    background-color: red;
    position: absolute;
    margin: 0 10%;
    transition: all 0.5s ease-in-out;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 6px solid ${({ theme }) => theme.colors.secundary};
  }

  & > svg[class="1 light"] {
    bottom: 100px;
    right: 0;
    z-index: 1;
    animation: MoveFowardsOne 20s ease infinite;
  }

  & > svg[class="1 dark"] {
    bottom: 100px;
    right: 0;
    z-index: 1;
    animation: MoveFowardsOne 20s ease infinite;
  }

  & > svg[class="2 light"] {
    bottom: 120px;
    right: 20px;
    z-index: 2;
    animation: MoveFowardsTwo 20s ease infinite;
  }

  & > svg[class="2 dark"] {
    bottom: 120px;
    right: 20px;
    z-index: 2;
    animation: MoveFowardsTwo 20s ease infinite;
  }

  & > svg[class="3 light"] {
    bottom: 140px;
    right: 40px;
    z-index: 3;
    animation: MoveFowardsThree 20s ease infinite;
  }

  & > svg[class="3 dark"] {
    bottom: 140px;
    right: 40px;
    z-index: 3;
    animation: MoveFowardsThree 20s ease infinite;
  }

  // KeyFrames
  @keyframes MoveFowardsOne {
    0% {
    }
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
    0% {
    }
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
    0% {
    }
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
    0% {
    }
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
    0% {
    }
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
    0% {
    }
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

  // Media Queries
  @media (max-width: 768px) {
    & > svg {
      max-width: 200px;
      max-height: 200px;
      margin: 0 10%;
    }
  }

  @media (max-width: 410px) {
    & > svg {
      max-width: 200px;
      max-height: 200px;
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      text-align: center;
    }

    & > svg[class="1 light"] {
      animation: MoveFowardsOneMobile 20s ease infinite;
      right: 0;
    }

    & > svg[class="1 dark"] {
      animation: MoveFowardsOneMobile 20s ease infinite;
      right: 0;
    }

    & > svg[class="2 light"] {
      animation: MoveFowardsTwoMobile 20s ease infinite;
      right: 0;
    }

    & > svg[class="2 dark"] {
      animation: MoveFowardsTwoMobile 20s ease infinite;
      right: 0;
    }

    & > svg[class="3 light"] {
      animation: MoveFowardsThreeMobile 20s ease infinite;
      right: 0;
    }

    & > svg[class="3 dark"] {
      animation: MoveFowardsThreeMobile 20s ease infinite;
      right: 0;
    }
  }
`;
