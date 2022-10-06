import React from "react";

// Styles
import { Wrapper, TextContainer } from "./AboutMe.styled";

// Components
import TitleComponent from "../../../Helper/TitleComponent/TitleComponent";

// Svgs
import { ReactComponent as BackgroundImage } from "../../../../assets/svgs/Background-Home.svg";

// Hook
import useAnimatedObservable from "../../../../hooks/useAnimatedObservable";

const AboutMe = () => {
  const { myRef, unObserveOnEnter } = useAnimatedObservable();

  return (
    <Wrapper>
      <BackgroundImage />
      <TextContainer ref={myRef} className={unObserveOnEnter ? "animated" : ""}>
        <TitleComponent text="Quem sou eu" hover size={2} />
        <p>
          Olá, meu nome é Daniel de Oliveira, ou “Harmew”. Atualmente sou um
          estudante de programação e universitário.
        </p>
        <p>
          Estudo e desenvolvo aplicativos na área web, com a utilização das
          tecnologias ReactJs e Angular como Front-End e NodeJs como Back-End.
        </p>
      </TextContainer>
    </Wrapper>
  );
};

export default AboutMe;
