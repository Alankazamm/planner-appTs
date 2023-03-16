import styled from 'styled-components';
import { rotate } from './../../common/animations/rotate.styles';
export const StyledFormBtn = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    button{
        width: 100%;
        height: 6.2vh;
        border: 1px solid #C13216;
        background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
        box-shadow: 5px 5px 15px 0px #00000026 inset;
        border-radius: 50px;
        font-family: Mulish;
        font-size: 32px;
        font-weight: 700;
        line-height: 40px;
        color: #FFFFFF;
        cursor: pointer;
    }
    button:hover{
        background:linear-gradient(78deg, #FF8000 0%, #C13216 100%);
         
    }
    button:active{
        background:linear-gradient(360deg, #FF8000 0%, #C13216 100%);  
    }
    @media (max-height: 920px) {
        button{
            width: 100%;
            height: 6.2vh;
            font-size: 22px;
        }
    }

    img{
        animation: ${rotate} 1s linear infinite;
        height: 67px;
        width: 67px;
        pointer-events: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
    }
    

`;
