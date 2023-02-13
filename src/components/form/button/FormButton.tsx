import { StyledFormBtn } from "./FormButton.styles";

type formButtonProps = {
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}
export const FormButton  = (props:formButtonProps) => {
  
    return (
        <StyledFormBtn onClick={props.onClick}>{props.text }</StyledFormBtn>
    )
}