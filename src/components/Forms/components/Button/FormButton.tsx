//description: this button is used in login and register forms

//components
import { Redirect } from "../../../Redirect/Redirect";
//styles
import { StyledFormBtn } from "./styles";
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
            {props.isLoading? <img alt="loading spinner" src={spinner}></img>: <button onClick={props.onClick} >{props.text}</button>}
            <Redirect page={props.page} text={props.redirectText} />
        </StyledFormBtn>  
    )
}