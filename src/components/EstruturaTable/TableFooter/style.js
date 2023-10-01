import styled from "styled-components"

export const TableFooterStyle = styled.tfoot`
  background-color: rgb(159 159 159);
  position: sticky;
  bottom: 0;
  left: 0;

  z-index: 10;
  padding: 20px ;

  display: block;
  width: 100%;
  tr, td{
    display: block;
    width: 100%;
  }
`

export const TablePaginationContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    div, button{
        width:40px;
        height: 40px;
        border: 1px solid rgba(0,0,0,.3);
        background-color: rgba(255,255,255,.5);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2em;

        cursor: pointer;
    }
    div:hover, button:hover{
        border: 1px solid rgba(255,255,255,.3);
        background-color: rgba(0,0,0,.5);
    }
    img{
        width: 30px;
        height: 30px;
        object-fit: cover;
    }
`