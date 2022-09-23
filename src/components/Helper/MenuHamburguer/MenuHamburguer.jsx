import React from "react";

// Styles
import {
  Wrapper,
  FirstColumn,
  SecondColumn,
  ThirdColumn,
} from "./MenuHamburguer.styled";

export const MenuHamburguer = ({ extendNavBar, SetExtendNavBar }) => {
  return (
    <Wrapper
      onClick={() => {
        SetExtendNavBar((curr) => !curr);
      }}
    >
      <FirstColumn className={extendNavBar ? "active" : ""}></FirstColumn>
      <SecondColumn className={extendNavBar ? "active" : ""}></SecondColumn>
      <ThirdColumn className={extendNavBar ? "active" : ""}></ThirdColumn>
    </Wrapper>
  );
};

export default MenuHamburguer;
