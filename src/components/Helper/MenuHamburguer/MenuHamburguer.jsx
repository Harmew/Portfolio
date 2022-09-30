import React from "react";
import PropTypes from "prop-types";

// Styles
import {
  Wrapper,
  FirstColumn,
  SecondColumn,
  ThirdColumn,
} from "./MenuHamburguer.styled";

export const MenuHamburguer = ({ extendNavBar, SetExtendNavBar }) => {
  const ACTIVE = "active";

  return (
    <Wrapper
      onClick={() => {
        SetExtendNavBar((curr) => !curr);
      }}
    >
      <FirstColumn className={extendNavBar ? ACTIVE : ""}></FirstColumn>
      <SecondColumn className={extendNavBar ? ACTIVE : ""}></SecondColumn>
      <ThirdColumn className={extendNavBar ? ACTIVE : ""}></ThirdColumn>
    </Wrapper>
  );
};

export default MenuHamburguer;

MenuHamburguer.propTypes = {
  extendNavBar: PropTypes.bool.isRequired,
  SetExtendNavBar: PropTypes.func.isRequired,
};
