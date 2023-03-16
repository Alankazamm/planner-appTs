import styled from 'styled-components';
export const TaskBorder = styled.div `
    border-radius: 15px 0px 0px 15px;
    background-color: ${props => {
    if (props.actualDay === 'monday')
        return 'rgba(255, 0, 36, 1)';
    else if (props.actualDay === 'tuesday')
        return 'rgba(255, 128, 0, 1)';
    else if (props.actualDay === 'wednesday')
        return 'rgba(255, 206, 0, 1)';
    else if (props.actualDay === 'thursday')
        return 'rgba(255, 0, 36, 0.7)';
    else if (props.actualDay === 'friday')
        return 'rgba(255, 128, 0, 0.7)';
    else if (props.actualDay === 'saturday')
        return 'rgba(255, 206, 0, 0.7)';
    else if (props.actualDay === 'sunday')
        return 'rgba(255, 0, 36, 0.5)';
    else if (props.actualDay === 'conflict')
        return 'rgba(0, 0, 0, 0.7)';
}};
    width: 14px;
    height: 85px;
    position:absolute;
   
`;
