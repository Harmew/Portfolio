import styled from "styled-components";

export const Wrapper = styled.label`
  width: 3rem;
  min-width: 3rem;
  height: 1.5rem;
  background: ${(props) => props.theme.colors.neutral};
  display: flex;
  border-radius: 1.5rem;
  align-items: center;
  position: relative;

  input {
    height: 100%;
    width: 100%;
    opacity: 0;
  }

  span {
    position: absolute;
    width: 1.4rem;
    height: 1.4rem;
    left: 1px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.primary};
    transition: 0.3s ease-in-out;
  }

  input:checked + span {
    left: calc(100% - 1px);
    transform: translateX(-100%);
  }
`;
