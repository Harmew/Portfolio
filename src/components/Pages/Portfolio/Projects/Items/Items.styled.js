import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  list-style: none;
  width: 100%;
  padding: 0 6em 0.5em 6em;
  gap: 1.75em;
  margin: 2em 0;

  & > li {
    height: 12em;
    width: 15em;
    border: 2px solid ${(props) => props.theme.colors.secundary};
    box-shadow: 5px 5px 0px ${(props) => props.theme.colors.secundary};
    transition: 0.4s ease-in-out;
    padding: 0.5em;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
