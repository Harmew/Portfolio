import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 4rem;
  background: ${(props) => props.theme.colors.navBar};
  color: ${(props) => props.theme.colors.secundary};
  position: fixed;
  width: 100%;
  z-index: 999;
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;

  & > * {
    font-weight: bold;
  }

  & > * + * {
    margin-left: 1rem;
  }

  @media (max-width: 450px) {
    & > * {
      display: none;
    }
  }
`;

export const NavExtend = styled.ul`
  background: ${(props) => props.theme.colors.navBar};
  display: flex;
  flex-direction: column;
  list-style: none;
  position: absolute;
  top: 4rem;
  left: 0;
  padding: 0.5rem 1rem 1rem 2rem;

  & > * + * {
    margin-top: 1rem;
  }

  @media (min-width: 450px) {
    display: none;
  }
`;

export const ContainerToggle = styled.div`
  @media (max-width: 450px) {
    display: none;
  }
`;
