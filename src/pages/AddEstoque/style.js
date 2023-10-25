import styled from "styled-components";

export const AddEstoqueContainerStyle = styled.div`
  position: absolute;
  top: 0;
  z-index: 100;

  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0,0,0,.8);
`;

export const AddEstoqueContentStyle = styled.div`
  width: ${({isLoad}) => isLoad ? "100%" : "50%" };
  height: ${({isLoad}) => isLoad ? "100%" : "50%" };
  transition: all .5s;

  overflow: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.8);
`;
