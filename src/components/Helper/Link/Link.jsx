import React from "react";
import PropTypes from "prop-types";

//Styles
import { Wrapper } from "./Link.styled";

export const LinkComponent = ({ href, text, target }) => {
  return (
    <Wrapper href={href} target={target}>
      {text}
    </Wrapper>
  );
};

export default LinkComponent;

LinkComponent.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  target: PropTypes.string,
};
