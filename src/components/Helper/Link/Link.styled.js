import styled from "styled-components";

export const Wrapper = styled.a`
  text-decoration: none;
  font-size: 1em;
  color: ${(props) => props.theme.colors.text};

  &::after {
    background: none repeat scroll 0 0 ${(props) => props.theme.colors.text};
    content: "";
    display: block;
    height: 2px;
    width: 0;
    transition: all ease-in-out 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;
