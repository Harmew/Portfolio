import React, { useState } from "react";

// Styles
import {
  Wrapper,
  Container,
  TextContainer,
  IconsContainer,
} from "./Knowledge.styled";

// Components
import TitleComponent from "../../../Helper/TitleComponent/TitleComponent";

// SVG
import { ReactComponent as BackgroundAside } from "../../../../assets/svgs/Background-Aside.svg";
import { ReactComponent as NextJS } from "../../../../assets/svgs/Next.svg";
import { ReactComponent as ReactJS } from "../../../../assets/svgs/React.svg";
import { ReactComponent as Angular } from "../../../../assets/svgs/Angular.svg";
import { ReactComponent as SASS } from "../../../../assets/svgs/SASS.svg";
import { ReactComponent as NodeJS } from "../../../../assets/svgs/Node.svg";
import { ReactComponent as MongoDb } from "../../../../assets/svgs/MongoDB.svg";

// Texts
const TEXTS_ICONS = [
  {
    title: "Dica",
    description: "*Clique nos icones para saber mais sobre cada tecnologia*",
  },
  {
    title: "NextJS",
    description:
      "Next.js é uma estrutura da web que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para web baseados em React.",
  },
  {
    title: "ReactJS",
    description:
      "ReactJS é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
  },
  {
    title: "Angular",
    description:
      "Angular é um framework JavaScript de código aberto, mantido pela Google, que facilita a criação de aplicações web de uma só página e móveis.",
  },
  {
    title: "Sass",
    description:
      "Sass (pré-processador css) é uma linguagem de folhas de estilo. É uma simples linguagem de script usada em arquivos Sass.",
  },
  {
    title: "NodeJS",
    description:
      "Node.js é um interpretador de JavaScript assíncrono com código aberto orientado a eventos, focado em migrar a programação do Javascript do lado do cliente para os servidores.",
  },
  {
    title: "MongoDB",
    description:
      "MongoDB é um banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++.",
  },
];

const Knowledge = () => {
  const [text, setText] = useState(TEXTS_ICONS[0]);

  const handleMouseEnter = (e) => {
    const { id } = e.target;

    if (id) {
      setText(TEXTS_ICONS[id]);
    }
  };

  return (
    <Wrapper>
      <TitleComponent text="Conhecimentos" size={2} hover />
      <BackgroundAside />
      <Container>
        <TextContainer>
          <h3>{text.title}</h3>
          <p>{text.description}</p>
        </TextContainer>
        <IconsContainer onClick={handleMouseEnter}>
          <NextJS />
          <ReactJS />
          <Angular />
          <SASS />
          <NodeJS />
          <MongoDb />
        </IconsContainer>
      </Container>
    </Wrapper>
  );
};

export default Knowledge;
