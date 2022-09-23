import React from "react";

// Styles
import { Wrapper } from "./Erro.styled";

const Erro = ({ erro }) => {
  if (!erro) return null;
  return <Wrapper>{erro}</Wrapper>;
};

export default Erro;
