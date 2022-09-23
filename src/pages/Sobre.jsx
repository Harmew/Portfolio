import React from "react";

// Components
import Head from "../components/Helper/Head";
import SobrePage from "../components/Pages/SobrePage/SobrePage";

// Variables Text-Helmet
const title = "Sobre";
const description = "Página Sobre Mim";
const keywords =
  "Sobre Mim, Harmew, React, Página Sobre, Daniel de Oliveira, Javascript, Frontend, Web";

export const Sobre = () => {
  return (
    <main>
      <Head title={title} description={description} keywords={keywords} />
      <SobrePage />
    </main>
  );
};

export default Sobre;
