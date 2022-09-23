import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secundary};
    font: 400 16px Roboto, sans-serif;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.primary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.transparenceBar};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.transparenceBarHover};
  }

  ul {
    list-style: none;
  }
`;
