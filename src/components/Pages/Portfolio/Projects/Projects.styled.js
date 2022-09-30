import styled from "styled-components";

export const Wrapper = styled.section`
  border-bottom: 3px solid ${(props) => props.theme.colors.secondary};
  min-height: calc(100vh + 7em);
  width: 100%;

  padding-bottom: 3em;
`;

export const Container = styled.div`
  width: 80%;
  height: 100%;

  margin: 0 auto;

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

  @media (max-width: 900px) {
    width: 100%;
  }
`;
