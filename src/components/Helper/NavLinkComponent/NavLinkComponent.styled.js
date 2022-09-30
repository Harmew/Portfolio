import styled from "styled-components";

export const Wrapper = styled.div`
  & > a {
    color: ${(props) => props.theme.colors.text};

    font-size: 1em;
  }

  & > a::after {
    background: none repeat scroll 0 0 ${(props) => props.theme.colors.text};

    height: 2px;
    width: 0;

    content: "";
    display: block;

    transition: all ease-in-out 0.3s;
  }

  & > a:hover::after {
    width: 100%;
  }
`;
