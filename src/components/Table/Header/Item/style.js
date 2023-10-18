import styled from "styled-components";

export const ItemStyle = styled.th`
    padding: 20px;
    width: 100%;
    
    span {
        display: block;
        min-width:15vw;
    }
    div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;        
    }

    img{
        width: 20px;
        object-fit: cover;
    }
    button{
        display: ${({filterIsOpen}) => filterIsOpen ? "none" : "flex"};
        justify-content: center;
        align-items: center;  

        border:  none;
        background-color: transparent;
        padding: 10px;
        border-radius: 5px;
        margin-left: 10px;
        cursor: pointer;

    }
    button:hover{
        background-color: rgba(0,0,0,.3);
    }

    .input{
        display: ${({filterIsOpen}) => filterIsOpen ? "flex" : "none"};
        margin: 10px 0;
        width: 100%;
        border: 1px solid rgba(0,0,0,.5);
        border-radius:10px;
        background-color: rgba(255,255,255,1);

        input{
            min-width: 60px;
            width: 100%;
            background-color: transparent;
            border: none;
            outline: none;
            padding: 5px 10px;
        }
    }
    .input button{
        display: flex;
    }
    .input button:hover{
        background-color: rgba(0,0,0,.1);
    }

`