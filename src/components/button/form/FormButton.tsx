import { Redirect } from "../../redirects/form/Redirect";
import { StyledFormBtn } from "./FormButton.styles";

type formButtonProps = {
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}
export const FormButton  = (props:formButtonProps) => {
  
    return (
        <div style={{width: "100%"}} >
            <StyledFormBtn onClick={props.onClick}>{props.text}</StyledFormBtn>
            <Redirect page="login" text="Don't hava an account?" />
        </div>
        
    )
}