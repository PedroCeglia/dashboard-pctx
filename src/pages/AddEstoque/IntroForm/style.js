import styled from "styled-components";

export const IntroFormStyle = styled.div`

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    padding: 20px;
    background-color: rgba(255,255,255,.9);
    border-radius: 5px;

    h2{
        margin: 5px 0 20px; 
    }

    input{
        display: none;
    }

    span{
        margin: 0 10px;
    }

    form{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    form > div{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    form button, label span{
        padding: 10px 20px ;
        margin: 0;
        border-radius: 5px;
        background-color: rgba(0,0,0,.1);
        border: 1px solid rgba(0,0,0,.5);
        cursor: pointer;
    }

    form img{
        width: 100px;
    }
`