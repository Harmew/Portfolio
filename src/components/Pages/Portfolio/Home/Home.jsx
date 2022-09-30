import React from "react";

// Styles
import { Wrapper } from "./Home.styled";

// SVGs
import { ReactComponent as BackgroundImage } from "../../../../assets/svgs/Background-Home.svg";
import { ReactComponent as Cat } from "../../../../assets/svgs/Cat.svg";

// Cats
const CATS_LIST = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

const Home = () => {
  return (
    <Wrapper>
      <BackgroundImage />
      {CATS_LIST.map((cat) => (
        <Cat key={cat.id} className={cat.id} />
      ))}
    </Wrapper>
  );
};

export default Home;
