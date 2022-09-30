import styled from "styled-components";

export const Wrapper = styled.label`
  background: ${(props) => props.theme.colors.neutral};

  height: 1.5rem;
  width: 3rem;
  min-width: 3rem;

  display: flex;
  align-items: center;

  position: relative;

  border-radius: 1.5rem;

  cursor: pointer;

  input {
    height: 100%;
    width: 100%;

    opacity: 0;

    cursor: pointer;
  }

  span {
    background: ${(props) => props.theme.colors.primary};

    height: 1.4rem;
    width: 1.4rem;

    position: absolute;
    left: 1px;

    border-radius: 50%;

    transition: 0.5s ease-in-out;
  }

  input:checked + span {
    left: calc(100% - 1px);

    transform: translateX(-100%);
  }
`;
