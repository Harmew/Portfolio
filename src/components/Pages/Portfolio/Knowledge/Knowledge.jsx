import React, { useContext, useState } from "react";

// Styles
import {
  Wrapper,
  Container,
  ImageBack,
  TextContainer,
  IconsContainer,
  SvgContainer,
} from "./Knowledge.styled";
import { ThemeContext } from "styled-components";

// Components
import TitleComponent from "../../../Helper/TitleComponent/TitleComponent";

// Images / SVGs
import BackgroundImage from "../../../../assets/images/Image-Aside.png";
import { ReactComponent as NextJS } from "../../../../assets/svgs/Next.svg";
import { ReactComponent as ReactJS } from "../../../../assets/svgs/React.svg";
import { ReactComponent as Angular } from "../../../../assets/svgs/Angular.svg";
import { ReactComponent as SASS } from "../../../../assets/svgs/SASS.svg";
import { ReactComponent as NodeJS } from "../../../../assets/svgs/Node.svg";
import { ReactComponent as MongoDb } from "../../../../assets/svgs/MongoDB.svg";

// Texts
import texts from "../../../../texts.json";

const Knowledge = () => {
  const { title } = useContext(ThemeContext);
  const [text, setText] = useState(texts[0]);

  const handleMouseEnter = (e) => {
    const { id } = e.target;
    if (id) {
      setText(texts[id]);
    }
  };

  return (
    <Wrapper>
      <TitleComponent text="Conhecimentos" size={2} hover />
      <ImageBack src={BackgroundImage} className={title} alt="backgroud" />
      <Container>
        <TextContainer>
          <h3>{text.title}</h3>
          <p>{text.description}</p>
        </TextContainer>
        <IconsContainer>
          <div>
            <SvgContainer id="1">
              <NextJS onClick={handleMouseEnter} />
            </SvgContainer>
            <SvgContainer id="2">
              <ReactJS onClick={handleMouseEnter} />
            </SvgContainer>
            <SvgContainer id="3">
              <Angular onClick={handleMouseEnter} />
            </SvgContainer>
            <SvgContainer id="4">
              <SASS onClick={handleMouseEnter} />
            </SvgContainer>
            <SvgContainer id="5">
              <NodeJS onClick={handleMouseEnter} />
            </SvgContainer>
            <SvgContainer id="6">
              <MongoDb onClick={handleMouseEnter} />
            </SvgContainer>
          </div>
        </IconsContainer>
      </Container>
    </Wrapper>
  );
};

export default Knowledge;
