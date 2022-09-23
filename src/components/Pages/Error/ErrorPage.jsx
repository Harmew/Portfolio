import React from "react";

// Styles
import { Wrapper } from "./ErrorPage.styled";

// Components
import NavLinkComponent from "../../Helper/NavLinkComponent/NavLinkComponent";
import TitleComponent from "../../Helper/TitleComponent/TitleComponent";

const ErrorPage = () => {
  return (
    <Wrapper>
      <TitleComponent text="Página de Erro" size={3} />
      <NavLinkComponent href="/" text="Voltar" />
    </Wrapper>
  );
};

export default ErrorPage;
