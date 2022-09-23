import React, { useContext } from "react";

// Styles
import { ThemeContext } from "styled-components";
import { Wrapper, BackGround } from "./Home.styled";

// Image - Background
import BackgroundImage from "../../../../assets/images/BackGround-Home.jpg";

// Svg - Cat
import { ReactComponent as Cat } from "../../../../assets/svgs/Cat.svg";

const Home = () => {
  const { title } = useContext(ThemeContext);
  return (
    <Wrapper>
      <BackGround src={BackgroundImage} className={title} alt="backgroud" />
      <Cat
        fill={title === "light" ? "#000000" : "#ffffff"}
        className={`1 ${title}`}
      />
      <Cat
        fill={title === "light" ? "#000000" : "#ffffff"}
        className={`2 ${title}`}
      />
      <Cat
        fill={title === "light" ? "#000000" : "#ffffff"}
        className={`3 ${title}`}
      />
    </Wrapper>
  );
};

export default Home;
