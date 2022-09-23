import styled from "styled-components";

export const Wrapper = styled.button`
  cursor: pointer;
  position: relative;
  display: block;
  height: 22px;
  width: 30px;
  background-color: transparent;
  border: none;
  outline: none;

  @media (min-width: 450px) {
    display: none;
  }

  & > * {
    position: absolute;
    display: block;
    height: 3px;
    width: 100%;
    background: ${(props) => props.theme.colors.secundary};
  }
`;

export const FirstColumn = styled.span`
  top: 0px;
  transition: 0.25s ease-in-out;

  &.active {
    transform: rotate(-45deg);
    top: 8px;
  }
`;

export const SecondColumn = styled.span`
  top: 8px;
  transition: 0.25s ease-in-out;

  &.active {
    opacity: 0;
  }
`;

export const ThirdColumn = styled.span`
  top: 16px;
  transition: 0.25s ease-in-out;

  &.active {
    transform: rotate(45deg);
    top: 8px;
  }
`;
