import React from "react";

// Styles
import { Wrapper } from "./Items.styled";

// Components
import LinkComponent from "../../../../Helper/Link/Link";

const Items = ({ data }) => {
  if (data === null) return null;

  return (
    <Wrapper>
      {data.map((item) => (
        <li key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <div>
            <LinkComponent
              href={item.homepage}
              target="_blank"
              text="Ir para..."
            />
          </div>
        </li>
      ))}
    </Wrapper>
  );
};

export default Items;
