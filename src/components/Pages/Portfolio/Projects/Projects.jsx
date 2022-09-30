import React from "react";

// Styles
import { Wrapper } from "./Projects.styled";

// Components
import TitleComponent from "../../../Helper/TitleComponent/TitleComponent";
import Erro from "../../../Helper/Erro/Erro";
import Loading from "../../../Helper/Loading/Loading";
import Items from "./Items/Items";
import Link from "../../../Helper/Link/Link";

// Hook
import useFetch from "../../../../hooks/useFetch";

// Global Variaveis
const API = "https://api.github.com/users/Harmew/repos";

export const Projects = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const url = API;
    request(url);
  }, [request]);

  return (
    <Wrapper>
      <TitleComponent text="Portfólio" size={2} hover />
      {data && <Items data={data} />}

      {loading && <Loading />}
      {error && <Erro erro={error} />}
      <Link
        href="https://github.com/Harmew?tab=repositories"
        target="_blank"
        text="Ver mais no GitHub"
      />
    </Wrapper>
  );
};

export default Projects;
