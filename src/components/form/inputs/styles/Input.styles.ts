import styled from 'styled-components';

export const Input = styled.input.attrs(({ type }) => ({ type: type || 'text' }))`
    width: 19vw;
    height: 5.5vh;
    padding-left: 25px;
    border: 1px solid #FFFFFF;
    border-radius: 50px;
    color: #E0E0E0;
    background: #26292C;
    font-size: 16px;
    &:-webkit-autofill {
    -webkit-text-fill-color: #E0E0E0 !important;
    box-shadow: 0 0 0 30px  #26292C inset !important;
    }
    &:-webkit-autofill:hover {
        -webkit-text-fill-color: #E0E0E0 !important;
    box-shadow: 0 0 0 30px  #26292C inset !important;
    }
    &:-webkit-autofill:focus {
        -webkit-text-fill-color: #E0E0E0 !important;
    box-shadow: 0 0 0 30px  #26292C inset !important;
    }
    &:placeholder {
        font-size: 12px;
    }

`