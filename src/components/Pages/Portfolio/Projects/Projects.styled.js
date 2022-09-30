import styled from "styled-components";

export const Wrapper = styled.section`
  border-bottom: 3px solid ${(props) => props.theme.colors.secundary};

  min-height: calc(100vh + 7em);
  width: 100%;
  padding-bottom: 3em;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    padding: 3em 0 2em 0;
  }

  & > div {
    min-height: calc(100vh - 10em);
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
