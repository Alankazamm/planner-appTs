import styled from 'styled-components';

export const StyledFormBtn = styled.button`
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

    :hover{
        background: linear-gradient(78deg, #FF8000 0%, #C13216 100%);   
    }
    :active{
        background: linear-gradient(360deg, #FF8000 0%, #C13216 100%);   
    }
    @media (max-height: 920px) {
        width: 100%;
        height: 6.2vh;
        font-size: 22px;
    }

`