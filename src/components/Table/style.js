import styled from "styled-components";

export const TableStyled = styled.table`
  background-color: rgba(255, 255, 255, 0.8);

  display: inline-block;
  height: ${({ height }) => height};
  width: 100%;
  max-width: 100vw;
  max-height: 100vh;

  overflow: auto;

  border-collapse: collapse;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb:vertical {
    height: 50px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 5px;
  }
`;
