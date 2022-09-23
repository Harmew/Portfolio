import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;

  color: ${({ theme }) => theme.colors.secundary};
`;
