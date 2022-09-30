import React from "react";
import PropTypes from "prop-types";

// Styles
import { Wrapper } from "./Erro.styled";

const Erro = ({ erro }) => {
  if (!erro) return null;
  return <Wrapper>{erro}</Wrapper>;
};

export default Erro;

Erro.prototype = {
  erro: PropTypes.string.isRequired,
};
