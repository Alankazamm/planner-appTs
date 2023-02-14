import styled from 'styled-components'

export const RedirectWrapper = styled.div<{ page: string }>`
    color: #FFFFFF;
    margin-top: 10px;
    margin-left: ${props => props.page === 'signup' ? '0px' : '50px'};
    width: ${props => props.page === 'signup' ? '100%' : 'initial'};
    display: ${props => props.page === 'signup' ? 'flex' : 'initial'};
    justify-content: ${props => props.page === 'signup' ? 'center' : 'initial'};
    a{
        color: #FF2D04;
        font-weight: 700;
    }
`