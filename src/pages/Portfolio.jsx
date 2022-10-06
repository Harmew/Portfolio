import React from "react";

// Componets
import Head from "../components/Helper/Head";
import Home from "../components/Pages/Portfolio/Home/Home";
import Projects from "../components/Pages/Portfolio/Projects/Projects";
import Knowledge from "../components/Pages/Portfolio/Knowledge/Knowledge";

// Variables Text-Helmet
const title = "Portfólio - Harmew";
const description = "Descrição";
const keywords =
  "Portifólio, Home, Harmew, React, Página Inicial, Daniel de Oliveira, Javascript, Frontend, Web, Portfólio";

export const Portfolio = () => {
  return (
    <main style={{ "overflow-x": "hidden" }}>
      <Head title={title} description={description} keywords={keywords} />
      <Home />
      <Projects />
      <Knowledge />
    </main>
  );
};

export default Portfolio;
