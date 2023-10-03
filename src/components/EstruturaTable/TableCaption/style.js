import styled from "styled-components";

export const TableCaptionStyle = styled.caption`
  z-index: 10;
  width: 100%;
  display: block;
  position: sticky;
  top: 0;
  left: 0;
  background-color: white;

  & > div {
    height: 100px;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color:rgba(0, 0, 0, 0.3);
    padding: 10px 20px;
  }
  div h2 {
    margin: 0 20px;
  }

  div button {
    padding: 5px 10px;
    margin: 5px 20px;
    cursor: pointer;
    background-color: rgba(0, 0, 200, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
`;
