//description: This is the form for the register page. 
//It is used to collect user data and send it to the server.
//hooks
import { useContext } from "react";

//Styles
import { Input } from "./inputs/styles/Input.styles";
import { Label } from './inputs/styles/Label.styles';
import { InputWrapper } from './inputs/styles/InputWrapper.styles';
import { Form } from "./Form.styles";

//external functions
import { ActionType } from "../../reducers/formReducer";
import ErrorTooltip from '../common/error-handling/tooltip/ErrorTooltip.styles';
//contexts
import { UserContext } from './../../contexts/userContext';



export const RegisterForm = () => {
    
    const { formState, dispatch } = useContext(UserContext);
    //send the input value to the reducer on change
    const inputHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: ActionType.UPDATE_FORM, payload: { name: e.target.name, value: e.target.value } });
    }
    

    return (
        <Form page="signup">
            <InputWrapper>
                <Label htmlFor="firstName">first name</Label>
                <Input type="text" name="firstName" onChange={inputHandler} value={formState.firstName.value}
                    placeholder="Your first name" hasError={formState.firstName.hasError}/>
                {formState.firstName.hasError && <ErrorTooltip >{formState.firstName.error}</ErrorTooltip>}
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="lastName" >last name</Label>
                <Input type="text" name="lastName" onChange={inputHandler} value={formState.lastName.value}
                    placeholder="Your last name" hasError={formState.lastName.hasError} />
                    {formState.lastName.hasError && <ErrorTooltip >{formState.lastName.error}</ErrorTooltip>}
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="birthDate" >birth date</Label>
                <Input type="text" name="birthDate" onChange={inputHandler} value={formState.birthDate.value }
                    placeholder="MM/DD/YYYY" hasError={formState.birthDate.hasError} />
                {formState.birthDate.hasError && <ErrorTooltip >{formState.birthDate.error}</ErrorTooltip>}
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="country" >Country</Label>
                <Input type="text" name="country" onChange={inputHandler} value={formState.country.value }
                    placeholder="Your Country" hasError={formState.country.hasError} />
                {formState.country.hasError && <ErrorTooltip >{formState.country.error}</ErrorTooltip>}
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="city" >City</Label>
                <Input type="city" name="city" onChange={inputHandler} value={formState.city.value }
                    placeholder="Your City" hasError={formState.city.hasError} />
                {formState.city.hasError && <ErrorTooltip >{formState.city.error}</ErrorTooltip>}
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="email" >e-mail</Label>
                <Input type="email" name="email" onChange={inputHandler} value={formState.email.value }
                    placeholder="A valid e-mail here" hasError={formState.email.hasError} />
                {formState.email.hasError && <ErrorTooltip >{formState.email.error}</ErrorTooltip>}
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="password" >password</Label>
                <Input type="password" name="password" onChange={inputHandler} value={formState.password.value }
                    placeholder="Your password" hasError={formState.password.hasError} />
                {formState.password.hasError && <ErrorTooltip >{formState.password.error}</ErrorTooltip>}
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="confirmPassword" >password</Label>
                <Input type="password" name="confirmPassword" onChange={inputHandler} value={formState.confirmPassword.value }
                    placeholder="Comfirm your password" hasError={formState.confirmPassword.hasError||formState.password.hasError} />
                {(formState.confirmPassword.hasError )&& <ErrorTooltip >{ formState.confirmPassword.error}</ErrorTooltip>}
            </InputWrapper>
            
        </Form>
        )
};
