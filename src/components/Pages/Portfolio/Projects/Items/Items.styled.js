import styled from "styled-components";

export const Container = styled.ul`
  width: 100%;
  margin: 2em 0;
  padding: 0 6em 0.5em 6em;

  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  gap: 1.75em;

  & > li {
    border: 2px solid ${(props) => props.theme.colors.secundary};
    box-shadow: 5px 5px 0px ${(props) => props.theme.colors.secundary};

    height: 12em;
    width: 15em;
    padding: 0.5em;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    transition: 0.4s ease-in-out;
  }

  & > li:hover {
    scale: 1.1;
  }

  & > li div a {
    padding: 0.5em;
  }

  @media (max-width: 450px) {
    padding: 0 1em;
  }
`;
