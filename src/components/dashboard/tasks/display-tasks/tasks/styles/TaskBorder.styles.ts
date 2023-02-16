import styled from 'styled-components'

export const TaskBorder = styled.div<{ actualDay: string }>`
    border-radius: 15px 0px 0px 15px;
    background-color: ${props => {
    
        if (props.id === 'Monday') return 'rgba(255, 0, 36, 1)';

        else if (props.id === 'Tuesday') return 'rgba(255, 128, 0, 1)';

        else if (props.id === 'Wednesday') return 'rgba(255, 206, 0, 1)';

        else if (props.id === 'Thursday') return 'rgba(255, 0, 36, 0.7)';

        else if (props.id === 'Friday') return 'rgba(255, 128, 0, 0.7)';

        else if (props.id === 'Saturday') return 'rgba(255, 206, 0, 0.7)';

        else if (props.id === 'Sunday') return 'rgba(255, 0, 36, 0.5)';
    }
    };
    width: 14px;
    height: 85px;
    position:absolute;
`