import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

//Styles
import { Wrapper } from "./NavLinkComponent.styled";

export const NavLinkComponent = ({ href, text, target }) => {
  return (
    <Wrapper>
      <NavLink to={href} target={target}>
        {text}
      </NavLink>
    </Wrapper>
  );
};

export default NavLinkComponent;

NavLinkComponent.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  target: PropTypes.string,
};
