import styled from "styled-components";

export const Wrapper = styled.h1`
  &.size-4 {
    font-size: 3rem;
  }

  &.size-3 {
    font-size: 2rem;
  }

  &.size-2 {
    font-size: 1.5rem;
  }

  &.size-1 {
    font-size: 1.2rem;
  }

  &.hover::after {
    background: none repeat scroll 0 0 ${(props) => props.theme.colors.text};
    content: "";
    display: block;
    height: 2px;
    width: 0;
    transition: all ease-in-out 0.3s;
    width: 100%;
  }
`;
