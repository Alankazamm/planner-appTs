import styled from 'styled-components';
import background from '/src/assets/images/bgImg.png';
export const BgWrapper = styled.div `
    width: 50%;
    height: 100vh;
    background-image: url(${background}) ;
    background-repeat: no-repeat;
    background-size: cover;
    img{
        position: absolute;
        top: 36px;
        left: 61vw;
        max-width: 26vw;
        cursor: pointer;
    }
`;
