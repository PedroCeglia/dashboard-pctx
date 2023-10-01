import styled from "styled-components";

export const EstruturaTableStyled = styled.table`
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.8);

  height: 100vh;
  width: 100%;

  overflow: auto;

  border-collapse: collapse;
  position: relative;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb:vertical {
    height: 50px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,.6);
    border-radius: 5px;
  }

`;

