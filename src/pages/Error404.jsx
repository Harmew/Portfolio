import React from "react";

// Components
import Head from "../components/Helper/Head";
import ErrorPage from "../components/Pages/Error/ErrorPage";

// Variables Text-Helmet
const title = "Página de ERRO";
const description = "Página de Erro 404";
const keywords =
  "Error, Página de Erro, 404, Harmew, React, Daniel de Oliveira, Javascript, Frontend, Web";

export const Error404 = () => {
  return (
    <main>
      <Head title={title} description={description} keywords={keywords} />
      <ErrorPage />
    </main>
  );
};

export default Error404;
