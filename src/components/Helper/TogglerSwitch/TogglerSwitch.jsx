import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

// Styles
import { ThemeContext } from "styled-components";
import { Wrapper } from "./TogglerSwitch.styled";

export const ToggleSwitch = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);
  const [isChecked, SetisChecked] = useState(() =>
    title === "dark" ? true : false
  );

  const handleChange = () => {
    SetisChecked(!isChecked);
    toggleTheme();
  };

  return (
    <Wrapper>
      <input type="checkbox" onClick={handleChange} />
      <span />
    </Wrapper>
  );
};

export default ToggleSwitch;

ToggleSwitch.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
