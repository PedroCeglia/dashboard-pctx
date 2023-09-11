import styled from "styled-components";
import style from "../../styles";

export const EstruturaPaginaStyle = styled.div`
    min-height: calc(100vh);
    width: 100%;
    padding-top: 80px;
    padding-bottom: 70px;

    position: relative;
    
    background-color: ${({theme}) => theme.backgroundColor[1] };
    color: ${({theme}) => theme.color.c1 };

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
`
export const ConteudoPaginaStyle = styled.main`
    width: calc(${({navBarIsActive}) => navBarIsActive ? "100% - 250px" : "100% - 50px"});
    min-height: calc(100vh - 80px);
    
    position: absolute;
    top: 80px;
    right: 0;

    transition: width .3s;
    background-color: ${({theme}) => theme.backgroundColor[1] };

    display: flex;
    justify-content: center;
    align-items: center;

`
