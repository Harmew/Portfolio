import styled from "styled-components";

export const Wrapper = styled.nav`
  background: ${(props) => props.theme.colors.navBar};
  color: ${(props) => props.theme.colors.secondary};

  height: 4rem;
  width: 100%;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  z-index: 999;
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

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

  padding: 0.5rem 1rem 1rem 2rem;

  display: flex;
  flex-direction: column;

  position: absolute;
  top: 4rem;
  left: 0;

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
