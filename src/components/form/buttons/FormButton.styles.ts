import styled, {keyframes} from 'styled-components';
const rotate = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`
export const StyledFormBtn = styled.button<{loading:boolean}>`
    width: 100%;
    height: 6.2vh;
    border: 1px solid #C13216;
    background: ${({ loading }) => loading?'linear-gradient(90deg, #FF2D04 0%, #0000 80%)':'linear-gradient(90deg, #FF2D04 0%, #C13216 100%)' };
    box-shadow: 5px 5px 15px 0px #00000026 inset;
    border-radius: 50px;
    font-family: Mulish;
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    color: #FFFFFF;
    cursor: pointer;

    :hover{
        background:${({ loading }) => loading ? 'linear-gradient(90deg, #FF2D04 0%, #0000 80%)':'linear-gradient(78deg, #FF8000 0%, #C13216 100%)'};
         
    }
    :active{
        background:${({ loading }) => loading ? 'linear-gradient(90deg, #FF2D04 0%, #0000 80%)':'linear-gradient(360deg, #FF8000 0%, #C13216 100%)'}; 
          
    }
    img{
        animation: ${rotate} 1s linear infinite;
        height: 80%;
    }
    @media (max-height: 920px) {
        width: 100%;
        height: 6.2vh;
        font-size: 22px;
    }

`