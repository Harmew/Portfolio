import styled from "styled-components";

export const Wrapper = styled.footer`
  border-top: 3px solid ${(props) => props.theme.colors.secundary};

  height: 15vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;

  & > p {
    color: ${(props) => props.theme.colors.text};

    font-size: 1em;
  }
`;
