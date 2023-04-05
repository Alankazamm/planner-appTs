import styled from 'styled-components';
import { rotate } from '../animations/animationRotate.styles';

export const Spinner = styled.span`
  display: flex;
    justify-content: center;
    align-items: center;

    img{
        animation: ${rotate} 1s linear infinite;
        height: 40px;
        width: 40px;
        pointer-events: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
    }
`;

