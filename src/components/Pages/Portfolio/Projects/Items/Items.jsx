import React from "react";

// Styles
import { Container } from "./Items.styled";

// Components
import Link from "../../../../Helper/Link/Link";

const Items = ({ data }) => {
  if (data === null) return null;

  return (
    <Container>
      {data.map((item) => (
        <li key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <div>
            <Link href={item.html_url} target="_blank" text="Ir para..." />
          </div>
        </li>
      ))}
    </Container>
  );
};

export default Items;
