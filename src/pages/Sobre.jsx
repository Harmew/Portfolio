import React from "react";

// Components
import Head from "../components/Helper/Head";
import AboutMe from "../components/Pages/SobrePage/AboutMe/AboutMe";
import School from "../components/Pages/SobrePage/School/School";
import AboutSite from "../components/Pages/SobrePage/AboutSite/AboutSite";

// Variables Text-Helmet
const title = "Sobre - Harmew";
const description = "Página Sobre Mim";
const keywords =
  "Sobre Mim, Harmew, React, Página Sobre, Daniel de Oliveira, Javascript, Frontend, Web";

export const Sobre = () => {
  return (
    <main>
      <Head title={title} description={description} keywords={keywords} />
      <AboutMe />
      <School />
      <AboutSite />
    </main>
  );
};

export default Sobre;
