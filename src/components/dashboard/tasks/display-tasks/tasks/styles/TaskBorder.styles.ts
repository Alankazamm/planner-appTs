import styled from 'styled-components'

export const TaskBorder = styled.div<{ actualDay: string }>`
    border-radius: 15px 0px 0px 15px;
    background-color: ${props => {
    
        if (props.actualDay === 'Monday') return 'rgba(255, 0, 36, 1)';

        else if (props.actualDay === 'Tuesday') return 'rgba(255, 128, 0, 1)';

        else if (props.actualDay === 'Wednesday') return 'rgba(255, 206, 0, 1)';

        else if (props.actualDay === 'Thursday') return 'rgba(255, 0, 36, 0.7)';

        else if (props.actualDay === 'Friday') return 'rgba(255, 128, 0, 0.7)';

        else if (props.actualDay === 'Saturday') return 'rgba(255, 206, 0, 0.7)';

        else if (props.actualDay === 'Sunday') return 'rgba(255, 0, 36, 0.5)';
    }
    };
    width: 14px;
    height: 85px;
    position:absolute;
`