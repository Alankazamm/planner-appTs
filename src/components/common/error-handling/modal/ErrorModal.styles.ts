import styled from 'styled-components';

const ErrorModal = styled.div`
    position: fixed;
    z-index: 500;
    background-color: rgba(0, 0, 0, 0.55);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    .errorModalContent{
        background-color: white;
        width: 46vw;
        height: 30vh;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .errorModalTitle{
        background-color: #f44336;
        color: white;
        padding: 1rem;
        text-align: center;
        border-radius: 25px 25px 0 0;
        width: 100%;
    }
    .errorModalText{
        padding: 1rem;
        text-align: center;
        line-height: 1.5rem;
        font-size: 1.2rem;
        width: 80%;	
    }
    .errorModalButtons{
        display: flex;
        justify-content:flex-end;
        gap: 1rem;
        padding: 1rem;
    }
    button{
        width: 10vw;
        height: 5vh;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 600;
    }
    .closeButton{
        background-color: #f44336;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
    }
    .loginButton{
        background-color: #00BA88;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
    }
`;

export default ErrorModal;