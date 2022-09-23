import React, { useState } from "react";

//Styles
import { Wrapper, Nav, NavExtend, ContainerToggle } from "./NavBar.styled";

//Components
import NavLinkComponent from "../Helper/NavLinkComponent/NavLinkComponent";
import ToggleSwitch from "../Helper/TogglerSwitch/TogglerSwitch";
import MenuHamburguer from "../Helper/MenuHamburguer/MenuHamburguer";

export const NavBar = ({ toggleTheme }) => {
  const [extendNavBar, SetExtendNavBar] = useState(false);

  return (
    <Wrapper>
      <MenuHamburguer
        extendNavBar={extendNavBar}
        SetExtendNavBar={SetExtendNavBar}
      />
      <Nav>
        <NavLinkComponent href="/" text="Portfólio" />
        <NavLinkComponent href="/sobre" text="Sobre" />
      </Nav>
      <ContainerToggle>
        <ToggleSwitch toggleTheme={toggleTheme} />
      </ContainerToggle>

      {extendNavBar && (
        <NavExtend>
          <NavLinkComponent href="/" text="Portfólio" />
          <NavLinkComponent href="/sobre" text="Sobre" />
          <ToggleSwitch toggleTheme={toggleTheme} />
        </NavExtend>
      )}
    </Wrapper>
  );
};

export default NavBar;
