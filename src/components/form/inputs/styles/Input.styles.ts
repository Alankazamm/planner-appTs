import styled, { StyledInterface } from 'styled-components';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    hasError: boolean;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
export const Input = styled.input.attrs((props: InputProps) => ({
    type: props.type || 'text',
    name: props.name,
    value: props.value,
    onChange: props.onChange,
    placeholder: props.placeholder,
    hasError: props.hasError,
}))`
    width: 19vw;
    height: 5.5vh;
    padding-left: 25px;
    border: 1px solid ${props => props.hasError ? "#E9B425" : "#FFFFFF"};
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