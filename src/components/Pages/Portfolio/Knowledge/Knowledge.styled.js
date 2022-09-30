import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: calc(100vh - 7em - 20vh);
  width: 100%;
  padding-bottom: 3em;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  & > h1 {
    padding: 3em 0 2em 0;
  }

  & > svg {
    & > g {
      transform: translate(10, 309);
      scale: 0.2;
    }

    height: 20vh;
    width: 30vw;

    position: absolute;
    bottom: 125px;
    left: 0;

    z-index: -1;

    transition: color 0.3s ease-in-out;

    @media (max-width: 1100px) {
      height: 15vh;

      bottom: 90px;
    }

    @media (max-width: 690px) {
      width: 50vw;
      height: 10vh;

      bottom: 50px;

      & > g {
        scale: 0.15;
      }
    }

    @media (max-width: 450px) {
      height: 8vh;

      & > g {
        scale: 0.12;
      }
    }

    @media (max-width: 305px) {
      width: 70vw;
    }
  }
`;

export const Container = styled.div`
  width: 80%;
  height: 80vh;
  min-height: 80vh;

  display: flex;
  justify-content: space-between;

  @media (max-width: 1100px) {
    width: 100%;
  }

  @media (max-width: 690px) {
    height: auto;

    flex-direction: column;
  }
`;

export const TextContainer = styled.div`
  border-right: 3px solid ${(props) => props.theme.colors.secondary};

  width: 50%;
  padding: 0 4em;

  text-align: end;

  & > h3 {
    margin: 2em 0;

    font-size: 1.4em;
  }

  & > p {
    max-width: 80%;
    margin: 1em 0;

    display: inline-block;

    font-size: 1.2em;

    @media (max-width: 762px) {
      max-width: 100%;
    }
  }

  @media (max-width: 690px) {
    width: 100%;

    border-right: none;
    text-align: center;

    & > h3 {
      margin: 0;
    }
  }

  @media (max-width: 310px) {
    padding: 0 1em;
  }
`;

export const IconsContainer = styled.div`
  height: 80%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  align-self: center;

  gap: 2em;

  @media (max-width: 690px) {
    padding-bottom: 6em;
  }

  @media (max-width: 305px) {
    grid-template-columns: repeat(1, 1fr);
  }

  & > svg {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};

    width: 120px;
    height: 120px;
    padding: 1em;

    cursor: pointer;

    transition: all 0.2s ease;

    &:hover,
    &:focus,
    &:active {
      box-shadow: inset 0px 0px 0px 3px
          ${(props) => props.theme.colors.secondary},
        inset 0px 0px 0px 6px ${(props) => props.theme.colors.primary};
    }

    transition: all 0.3s ease-in-out;
  }
`;
