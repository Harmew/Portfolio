import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  & > svg {
    color: ${({ theme }) => theme.colors.secondary};

    width: 80px;
    height: 80px;

    margin: 0 auto;
    padding-left: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    top: -60px;
    left: 0%;
  }
`;
