import styled from "styled-components";
import style from "../../../styles";


export const HeaderStyle = styled.header`
    height: 80px;
    transition: width .3s;
    width: calc(${({navBarIsActive}) => navBarIsActive ? "100% - 250px" : "100% - 50px"});
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color:${({theme})=> theme.backgroundColor[1]};
    color:${({theme})=> theme.color[0]};

    font-size: ${style.fonts.fontsSize.biggest};
    font-family:${style.fonts.fontsFamily.ysabey};
`