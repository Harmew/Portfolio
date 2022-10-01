import React from "react";

// Styles
import { Wrapper, TextContainer } from "./AboutSite.styled";

// Components
import TitleComponent from "../../../Helper/TitleComponent/TitleComponent";

// SVGs
import { ReactComponent as BackgroundImage } from "../../../../assets/svgs/Background-Home.svg";

const AboutSite = () => {
  return (
    <Wrapper>
      <BackgroundImage />
      <TextContainer>
        <TitleComponent text="Sobre o Site" hover size={2} />
        <p>
          Na construção do site, tentei puxar um lado um pouco mais criativo e
          diferente, por isso acabei indo atrás de ideias monocromáticas para
          fazer ele único e com o meu toque.
        </p>
        <p>
          O site foi construído utilizando a biblioteca ReactJs, por conta da
          familiaridade com meus estudos, já na parte de estilização optei por
          usar Styled Components, por conta da sinestesia que tem com a
          biblioteca, tentei extrair o máximo do meu conhecimento e jogar para
          vocês.
        </p>
        <p>Enfim agradeço a visita. 0/</p>
      </TextContainer>
    </Wrapper>
  );
};

export default AboutSite;
