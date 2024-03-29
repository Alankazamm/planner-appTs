//description: this burron is used in login and register forms

//components
import { Redirect } from "../../redirects/form/Redirect";
//styles
import { StyledFormBtn } from "./FormButton.styles";
//assets
import spinner from '/src/assets/svg/spinner-uol.svg'
//types
type formButtonProps = {
    text: string;
    page: string;
    redirectText: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    isLoading: boolean;
}

export const FormButton  = (props:formButtonProps) => {

    return (
        <StyledFormBtn>
            {props.isLoading? <img src={spinner}></img>: <button onClick={props.onClick} >{props.text}</button>}
            <Redirect page={props.page} text={props.redirectText} />
        </StyledFormBtn>
        
    )
}