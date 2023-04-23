import styled from 'styled-components';
export const TimerContainer = styled.div `


display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;


.hour{
    font-size: 40px;
    color: #3B3E45;
    font-weight: 700;
}
.date{
    font-size: 20px;
    color: #3B3E45;
}
@media (max-width: 920px) {
    .hour{
        font-size: 30px;
    }
    .date{
        font-size: 15px;
    }
}

`;
//# sourceMappingURL=styles.js.map