import React from "react";
import PropType from "prop-types";

// Styles
import { Wrapper } from "./TitleComponent.styled";

const TitleComponent = ({ text, size = 1, hover }) => {
  return (
    <Wrapper className={`size-${size} ${hover ? "hover" : ""}`}>{text}</Wrapper>
  );
};

export default TitleComponent;

TitleComponent.propTypes = {
  text: PropType.string.isRequired,
  size: PropType.number,
  hover: PropType.bool,
};
