import styled from 'styled-components';
import { rotate } from '../../../styles/animations/animationRotate';
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
export const ConfirmEmailModal = styled(Modal) `
    .confirmEmailModalContent{
        background-color: white;
        width: 46vw;
        height: 30vh;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .confirmEmailModalTitle{
        background-color: #FF8000;
        color: white;
        padding: 1rem;
        text-align: center;
        border-radius: 25px 25px 0 0;
        width: 100%;
        font-size: 1.5rem;
    }
    .confirmEmailModalText{
        padding: 1rem;
        text-align: center;
        line-height: 1.5rem;
        font-size: 1.3rem;
        width: 80%;
    }
    .confirmEmailModalInput{
        width: 80%;
        height: 5vh;
        border-radius: 5px;
        border: 1px solid #FF8000;
        padding: 0.5rem;
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }
    .confirmEmailModalInput:focus{
        outline: none;
        border: 1px solid #FF8000;
    }
    .confirmEmailModalButtons{
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
    .confirmEmailButton{
        background-color: #FF3D1F;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
    }
    .confirmEmailButton:hover{
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
export const ForgotPasswordModal = styled(Modal) `
    .forgotPasswordModalContent{
        background-color: white;
        width: 46vw;
        height: 36vh;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .forgotPasswordModalTitle{ 
        background-color: #FF8000;
        color: white;
        padding: 1rem;
        text-align: center;
        border-radius: 25px 25px 0 0;
        width: 100%;
        font-size: 1.5rem;
    }
    .forgotPasswordModalText{
        padding: 1rem;
        text-align: center;
        line-height: 1.5rem;
        font-size: 1.3rem;
        width: 80%;
    }
    .forgotPasswordModalInput{
        width: 80%;
        height: 5vh;
        border-radius: 5px;
        border: 1px solid #FF8000;
        padding: 0.5rem;
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }
    .forgotPasswordModalInput:focus{
        outline: none;
        border: 1px solid #FF8000;
    }
    .forgotPasswordModalButtons{
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
    img{
        animation: ${rotate} 1s linear infinite;
    }
    .forgotPasswordButton{
        //greeny color
        background-color: #43f738;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
    }
    .forgotPasswordButton:hover{
        background-color: white;
        border: 1px solid #43f738;
        color: #43f738;
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
    .forgotPasswordModalError{
        color: red;
        font-size: 1.3rem;
        text-align: center;
        margin-bottom: 1rem;
    }
    .forgotPasswordModalSuccess{
        color: green;
        font-size: 1.3rem;
        text-align: center;
        margin-bottom: 1rem;
    }
    
`;
export const ResetPasswordModal = styled(Modal) `
    .resetPasswordModalContent{
        background-color: white;
        width: 46vw;
        height: 48vh;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .resetPasswordModalTitle{
        background-color: #FF8000;
        color: white;
        padding: 1rem;
        text-align: center;
        border-radius: 25px 25px 0 0;
        width: 100%;
        font-size: 1.5rem;
    }
    .resetPasswordModalText{
        padding: 1rem;
        text-align: center;
        line-height: 1.5rem;
        font-size: 1.3rem;
        width: 80%;
    }
    
    .resetPasswordModalButtons{
        display: flex;
        justify-content:flex-end;
        gap: 1rem;
        padding: 1rem;
    }
    button{
        width: 10vw;
        height: 8vh;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1.6rem;
        font-weight: 600;
    }
    button:hover{
        background-color: #00BA88;
        color: white;
    }
    img{
        animation: ${rotate} 1s linear infinite;
    }
    .resetPasswordButton{

        background-color: #43f738;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
    }
    .resetPasswordButton:hover{
        background-color: white;
        border: 1px solid #43f738;
        color: #43f738;
    }
    
    .resetPasswordModalError{
        color: red;
        font-size: 1.3rem;
        text-align: center;
        margin-bottom: 1rem;
    }
    .resetPasswordModalSuccess{
        color: green;
        font-size: 1.3rem;
        text-align: center;
        margin-bottom: 1rem;
    }
`;
export const RenewTokenModal = styled(Modal) `
    .renewTokenModalContent{
        background-color: white;
        width: 46vw;
        height: 36vh;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .renewTokenModalTitle{
        background-color: #FF8000;
        color: white;
        padding: 1rem;
        text-align: center;
        border-radius: 25px 25px 0 0;
        width: 100%;
        font-size: 1.5rem;
    }
    .renewTokenModalText{
        padding: 1rem;
        text-align: center;
        line-height: 1.5rem;
        font-size: 1.3rem;
        width: 80%;
    }
    .renewTokenModalButtons{
        display: flex;
        justify-content:flex-end;
        gap: 1rem;
        padding: 1rem;
    }
    button{
        width: 10vw;
        height: 8vh;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1.6rem;
        font-weight: 600;
    }
    button:hover{
        background-color: #00BA88;
        color: white;
    }
    img{
        animation: ${rotate} 1s linear infinite;
    }
    .renewTokenButton{
        background-color: #43f738;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
    }
    .renewTokenButton:hover{
        background-color: white;
        border: 1px solid #43f738;
        color: #43f738;
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
    
    .renewTokenModalError{
        color: red;
        font-size: 1.3rem;
        text-align: center;
        margin-bottom: 1rem;
    }
    .renewTokenModalSuccess{
        color: green;
        font-size: 1.3rem;
        text-align: center;
        margin-bottom: 1rem;
    }
`;
