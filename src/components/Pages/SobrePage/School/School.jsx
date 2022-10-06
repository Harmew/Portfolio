import React from "react";

// Styles
import {
  Wrapper,
  Image,
  TextContainer,
  SvgContainer,
  ImagesContainer,
} from "./School.styled";

// Components
import TitleComponent from "../../../Helper/TitleComponent/TitleComponent";

// Hook
import useAnimatedObservable from "../../../../hooks/useAnimatedObservable";

// Img - SVGs
import Picture from "../../../../assets/images/profile.jpg";
import { ReactComponent as Linkedin } from "../../../../assets/svgs/Linkedin.svg";
import { ReactComponent as Github } from "../../../../assets/svgs/Github.svg";

const School = () => {
  const { myRef: TextRef, unObserveOnEnter: TextObservable } =
    useAnimatedObservable();
  const { myRef: ImageRef, unObserveOnEnter: ImageObservable } =
    useAnimatedObservable();

  return (
    <Wrapper>
      <ImagesContainer
        ref={ImageRef}
        className={ImageObservable ? "animatedImage" : ""}
      >
        <Image src={Picture} alt="Foto de Perfil" />
        <SvgContainer>
          <a
            title="Linkedin"
            href="https://www.linkedin.com/in/daniel-de-oliveira-8b0368173/"
            target={"_blank"}
            rel="noreferrer"
          >
            <Linkedin />
          </a>
          <a
            title="Github"
            href="https://github.com/Harmew"
            target={"_blank"}
            rel="noreferrer"
          >
            <Github />
          </a>
        </SvgContainer>
      </ImagesContainer>
      <TextContainer ref={TextRef} className={TextObservable ? "animated" : ""}>
        <TitleComponent text="Escolaridade" hover size={2} />
        <p>
          Estou cursando Ciência da Computação desde 2021, e optei pelo curso,
          pois espero que seja uma porta de entrada para a área da computação, e
          um lugar onde posso experienciar as mais diversas áreas da tecnologia
          e diante a isso planejo seguir adiante fazendo o que eu gosto.
        </p>
      </TextContainer>
    </Wrapper>
  );
};

export default School;
