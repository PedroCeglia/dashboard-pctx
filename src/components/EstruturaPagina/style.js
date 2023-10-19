import styled from "styled-components";
import style from "../../styles";

export const EstruturaPaginaStyle = styled.div`
    min-height: calc(100vh);
    width: 100%;
    padding-bottom: 70px;

    position: relative;
    
    background-color: ${({theme}) => theme.backgroundColor[2] };
    color: ${({theme}) => theme.color.c1 };

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
`
export const ConteudoPaginaStyle = styled.main`
    width: calc(${({navBarIsActive}) => navBarIsActive ? "100% - 250px" : "100% - 50px"});
    min-height: calc(100vh);
    
    position: absolute;
    top: 0;
    right: 0;

    transition: width .4s;

    display: flex;
    justify-content: center;
    align-items: center;

`
