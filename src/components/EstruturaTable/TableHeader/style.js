import styled from "styled-components"


export const TableHeaderStyle = styled.thead`
  width: 100%;
  position: sticky;
  top: 70px;
  z-index: 1;

  background-color: white;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  
  tr{ 
    width: 100%;
    background-color: rgb(159 159 159);
    padding: 20px;
    border-bottom: 1px solid black;
  }
  tr:nth-of-type(1) th{
    padding: 20px;
    column-width: 20vw;
  }
  tr:nth-of-type(1) th:nth-of-type(1){
    width:30px;
  }
`;