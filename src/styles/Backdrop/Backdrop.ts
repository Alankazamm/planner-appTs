import styled from 'styled-components';
import { rotate } from '../animations/animationRotate';

export const Backdrop = styled.div`
  position: absolute;
    top: 0;
    left: -110px;
    right: 10px;
    width: 200vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 110px 0 rgba(0, 0, 0, 0.1);
    z-index: 100;
    
    img{
        position: absolute;
        top: 25%;
        left: 25%;
        animation: ${rotate} 1s linear infinite;
        height: 140px;
        width: 140px;
        pointer-events: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
    
    }
`;
