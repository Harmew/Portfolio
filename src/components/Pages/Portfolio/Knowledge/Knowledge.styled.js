import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: calc(100vh + 7em);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3em;
  border-bottom: 2px solid ${(props) => props.theme.colors.secundary};
  position: relative;

  & > h1 {
    padding: 3em 0 2em 0;
  }
`;

export const ImageBack = styled.img`
  width: 30vw;
  height: 20vh;
  background-position: center;
  background-size: cover;
  object-fit: cover;
  position: absolute;
  bottom: 170px;
  left: 0;
  z-index: -1;

  &.dark {
    filter: invert(1);
  }

  @media (max-width: 1100px) {
    height: 15vh;
  }

  @media (max-width: 690px) {
    bottom: 50px;
    height: 10vh;
    width: 50vw;
  }

  @media (max-width: 620px) {
    display: none;
  }
`;

export const Container = styled.div`
  width: 80%;
  height: 80vh;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1100px) {
    width: 100%;
  }

  @media (max-width: 690px) {
    flex-direction: column;
    height: auto;
  }
`;

export const TextContainer = styled.div`
  width: 50%;
  border-right: 3px solid ${(props) => props.theme.colors.secundary};
  padding: 0 4em;
  text-align: end;

  & > h3 {
    font-size: 1.4em;
    margin: 2em 0;
  }

  & > p {
    font-size: 1.2em;
    margin: 1em 0;
    max-width: 80%;
    display: inline-block;

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
  padding: 0 4em;

  & > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    height: 100%;
    width: 100%;
    align-items: center;

    @media (max-width: 1100px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 1em;
    }
  }

  @media (min-width: 690px) {
    width: 50%;
  }

  @media (max-width: 690px) {
    margin-top: 2em;
    align-self: center;
  }

  @media (max-width: 310px) {
    padding: 0;
  }
`;

export const SvgContainer = styled.div`
  background-color: ${(props) => props.theme.colors.secundary};
  width: 120px;
  height: 120px;
  padding: 1em;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    box-shadow: inset 0px 0px 0px 3px ${(props) => props.theme.colors.secundary},
      inset 0px 0px 0px 6px ${(props) => props.theme.colors.primary};
  }

  @media (max-width: 762px) {
    width: 80px;
    height: 80px;
  }

  &:nth-child(odd) {
    margin-bottom: 1.3em;

    @media (max-width: 1100px) {
      margin: 0 0 2em 0;
    }
  }

  &:nth-child(even) {
    margin-top: 1.3em;

    @media (max-width: 1100px) {
      margin: 0 0 2em 0;
    }
  }

  &:nth-child(odd)::after {
    background: none repeat scroll 0 0
      ${(props) => props.theme.colors.secundary};
    content: "";
    position: absolute;
    height: 2px;
    transition: all ease-in-out 0.3s;
    width: 100%;
    bottom: -22px;

    @media (max-width: 1100px) {
      bottom: -45px;
    }

    @media (max-width: 762px) {
      bottom: -65px;
    }

    @media (max-width: 690px) {
      bottom: -25px;
    }
  }

  &:nth-child(even)::after {
    background: none repeat scroll 0 0
      ${(props) => props.theme.colors.secundary};
    content: "";
    position: absolute;
    height: 2px;
    transition: all ease-in-out 0.3s;
    width: 100%;
    top: -22px;

    @media (max-width: 1100px) {
      top: auto;
      bottom: -45px;
    }

    @media (max-width: 762px) {
      top: auto;
      bottom: -65px;
    }

    @media (max-width: 690px) {
      top: auto;
      bottom: -25px;
    }
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }

  & > svg {
    color: ${(props) => props.theme.colors.primary};
    width: 100%;
    height: 100%;
  }

  & > span {
    position: absolute;
  }
`;
