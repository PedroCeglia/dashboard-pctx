import styled from "styled-components";

export const TableBodyStyle = styled.tbody`
`;

export const ButtonSelectStyle = styled.button`
  width: 15px;
  height: 15px;

  border: 2px solid black;
  border-radius: 5px;
  background-color: ${({ isActive }) =>
    isActive ? "rgba(0,0,0,.5)" : "transparent"};
  transition: all 0.4s;
  position: relative;
`;

export const ItemRowStyle = styled.tr`
  min-height: 60px;
  border-bottom: 1px solid black;
  background-color: ${({ isActive }) =>
    isActive ? "rgba(0,100,200,.3)" : "rgba(0,0,0,.3)"};

  td {
    padding: 10px;
    text-align: center;
  }

  &:nth-of-type(2n -1) {
    background-color: ${({ isActive }) =>
      isActive ? "rgba(0,100,200,.3)" : "rgba(0,0,0,.1)"};
  }
`;
