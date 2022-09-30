import styled from "styled-components";

export const Wrapper = styled.a`
  color: ${(props) => props.theme.colors.text};

  font-size: 1em;

  position: relative;

  &::after {
    background: none repeat scroll 0 0 ${(props) => props.theme.colors.text};

    height: 2px;
    width: 0;

    content: "";
    display: block;

    position: absolute;

    transition: all ease-in-out 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;
