import styled from "styled-components";

export const Wrapper = styled.button`
  height: 22px;
  width: 30px;

  display: block;
  position: relative;

  background-color: transparent;
  border: none;

  cursor: pointer;
  outline: none;

  @media (min-width: 450px) {
    display: none;
  }

  & > * {
    background: ${(props) => props.theme.colors.secundary};

    height: 3px;
    width: 100%;

    display: block;
    position: absolute;

    transition: 0.25s ease-in-out;
  }
`;

export const FirstColumn = styled.span`
  top: 0px;

  &.active {
    top: 8px;

    transform: rotate(-45deg);
  }
`;

export const SecondColumn = styled.span`
  top: 8px;

  &.active {
    opacity: 0;
  }
`;

export const ThirdColumn = styled.span`
  top: 16px;

  &.active {
    transform: rotate(45deg);
    top: 8px;
  }
`;
