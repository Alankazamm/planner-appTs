import { UserContext } from "../../../contexts/UserContext";
import { Redirect } from "../../redirects/form/Redirect";
import { StyledFormBtn } from "./FormButton.styles";
import { useContext } from 'react';
import spinner from '/src/assets/svg/spinner-uol.svg'
type formButtonProps = {
    text: string;
    page: string;
    redirectText: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const FormButton  = (props:formButtonProps) => {
    const {formState} = useContext(UserContext);
    return (
        <div style={{width: "100%"}} >
            <StyledFormBtn onClick={props.onClick} loading={formState.auth.loading}>{!formState.auth.loading? props.text:<img src={spinner}></img>}</StyledFormBtn>
            <Redirect page={props.page} text={props.redirectText} />
        </div>
        
    )
}