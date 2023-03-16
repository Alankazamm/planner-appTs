import styled from 'styled-components';
export const WeatherContainer = styled.div `
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    color: #222222;
    order: 3;
    img{
        width: 34px;
        height: 34px;
        
    }

    span{
        font-size: 14px;
    }
    div{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 137px;
        font-size: 48px;
        font-weight: 700;
    }

    
`;
