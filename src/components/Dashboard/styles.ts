import styled from 'styled-components';
import globe from '/src/assets/svg/globo.svg';

export const DashBoardContainer = styled.div`
    position: relative;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 4px 4px 70px 0px #00000040;
    min-height: 100vh;
    max-width: 100vw;
    background-image: url(${globe});
    background-repeat: no-repeat;
    background-position: right bottom;
    
`