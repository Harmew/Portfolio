import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: calc(100vh + 7em);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3em;
  border-bottom: 2px solid ${(props) => props.theme.colors.secundary};

  & > h1 {
    padding: 3em 0 2em 0;
  }

  & > div {
    width: 100%;
    min-height: calc(100vh - 10em);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Container = styled.div``;
