
import styled from 'styled-components';

export const TasksButton = styled.div<{actualDay:string}>`
background-color: ${props => {

        if (props.id === 'monday') return 'rgba(255, 0, 36, 1)';

        else if (props.id === 'tuesday') return 'rgba(255, 128, 0, 1)';

        else if (props.id === 'wednesday') return 'rgba(255, 206, 0, 1)';

        else if (props.id === 'thursday') return 'rgba(255, 0, 36, 0.7)';

        else if (props.id === 'friday') return 'rgba(255, 128, 0, 0.7)';

        else if (props.id === 'saturday') return 'rgba(255, 206, 0, 0.7)';

        else if (props.id === 'sunday') return 'rgba(255, 0, 36, 0.5)';
    }
    };

/* opacity:${props => {

        if (props.id === 'Monday') return '100%';

        else if (props.id === 'Tuesday') return '100%';

        else if (props.id === 'Wednesday') return '100%';

        else if (props.id === 'Thursday') return '70%';

        else if (props.id === 'Friday') return '70%';

        else if (props.id === 'Saturday') return '70%';

        else if (props.id === 'Sunday') return '50%';
    }
    }; */

box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
border-radius: 9px 9px 0px 0px;
width:${props => {
        if (props.id === props.actualDay) return '290px';
        else return '240px';
    }
    };

height: 33px;
display: flex;
align-items: center;
justify-content: flex-start;
padding-left: 8px;
font-size: 20px;
line-height: 20px;
font-weight: 600;
color: #000000;
cursor: pointer;
transition: 0.5s;
`;
