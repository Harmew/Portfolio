import React from "react";

// Styles
import { Wrapper } from "./Footer.styled";

export const Footer = () => {
  // Get Year Date
  const date = new Date().getFullYear();

  return (
    <Wrapper>
      <p>Daniel de Oliveira &copy; {date}</p>
    </Wrapper>
  );
};

export default Footer;
