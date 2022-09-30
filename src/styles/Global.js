import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};

    font: 400 16px Roboto, sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.primary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.secondary};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.transparenceBarHover};
  }

  ::-moz-selection {
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.secondary};
  }

  ::selection {
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.secondary};
  }
`;
