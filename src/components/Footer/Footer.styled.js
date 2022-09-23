import styled from "styled-components";

export const Wrapper = styled.footer`
  background-color: transparent;
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.colors.neutral};

  & > p {
    color: ${(props) => props.theme.colors.text};
    font-size: 1em;
  }
`;
