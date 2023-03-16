import styled from 'styled-components';
export const Modal = styled.div `
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
   
`;
export const ErrorModal = styled(Modal) `
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
 
    .loginButton{
        background-color: #00BA88;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
    }
`;
export const WarningModal = styled(Modal) `
    .warningModalContent{
        background-color: white;
        width: 46vw;
        height: 30vh;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .warningModalTitle{
        background-color: #ff9800;
        color: white;
        padding: 1rem;
        text-align: center;
        border-radius: 25px 25px 0 0;
        width: 100%;
        font-size: 1.5rem;
    }
    .warningModalText{
        padding: 1rem;
        text-align: center;
        line-height: 1.5rem;
        font-size: 1.3rem;
        width: 80%;	
    }
    .warningModalButtons{
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
        font-size: 1.6rem;
        font-weight: 600;
    }
    button:hover{
        background-color: #ff9899;
        color: white;
    }

    .closeButton{
        background-color: #ff9800;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
    }
  
`;
export const ConfirmModal = styled(Modal) `
    .confirmModalContent{
        background-color: white;
        width: 46vw;
        height: 30vh;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .confirmModalTitle{
        background-color: #FF8000;
        color: white;
        padding: 1rem;
        text-align: center;
        border-radius: 25px 25px 0 0;
        width: 100%;
        font-size: 1.5rem;
    }
    .confirmModalText{
        padding: 1rem;
        text-align: center;
        line-height: 1.5rem;
        font-size: 1.3rem;
        width: 80%;	
    }
    .confirmModalButtons{
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
        font-size: 1.6rem;
        font-weight: 600;
    }
    button:hover{
        background-color: #00BA88;
        color: white;
    }
    .confirmDeleteButton{
        background-color: #FF3D1F;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
    }
   
    .confirmDeleteButton:hover{
        background-color: rgba(255, 0, 36, 0.7);
        color: black;
    }

    .closeButton{
        background-color: #FFCE00;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
    }
    
    .closeButton:hover{
        background-color: #FF8000;
        color: white;
    }

`;
