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

//contexts
<<<<<<< HEAD:src/components/form/RegisterForm.tsx
import { UserContext } from './../../contexts/userContext';
import { TooltipError } from '../../styles';
=======
import { UserContext } from '../../contexts/userContext';
>>>>>>> cde7b0606d25549f8e9ed705a94cee9b1e3f36aa:src/components/Forms/RegisterForm.tsx



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
                {formState.firstName.hasError && <TooltipError >{formState.firstName.error}</TooltipError>}
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="lastName" >last name</Label>
                <Input type="text" name="lastName" onChange={inputHandler} value={formState.lastName.value}
                    placeholder="Your last name" hasError={formState.lastName.hasError} />
                    {formState.lastName.hasError && <TooltipError >{formState.lastName.error}</TooltipError>}
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="birthDate" >birth date</Label>
                <Input type="date" name="birthDate" onChange={inputHandler} value={formState.birthDate.value }
                    placeholder="MM/DD/YYYY" hasError={formState.birthDate.hasError} />
                {formState.birthDate.hasError && <TooltipError >{formState.birthDate.error}</TooltipError>}
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="country" >Country</Label>
                <Input type="text" name="country" onChange={inputHandler} value={formState.country.value }
                    placeholder="Your Country" hasError={formState.country.hasError} />
                {formState.country.hasError && <TooltipError >{formState.country.error}</TooltipError>}
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="city" >City</Label>
                <Input type="city" name="city" onChange={inputHandler} value={formState.city.value }
                    placeholder="Your City" hasError={formState.city.hasError} />
                {formState.city.hasError && <TooltipError >{formState.city.error}</TooltipError>}
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="email" >e-mail</Label>
                <Input type="email" name="email" onChange={inputHandler} value={formState.email.value }
                    placeholder="A valid e-mail here" hasError={formState.email.hasError} />
                {formState.email.hasError && <TooltipError >{formState.email.error}</TooltipError>}
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="password" >password</Label>
                <Input type="password" name="password" onChange={inputHandler} value={formState.password.value }
                    placeholder="Your password" hasError={formState.password.hasError} />
                {formState.password.hasError && <TooltipError >{formState.password.error}</TooltipError>}
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="confirmPassword" >password</Label>
                <Input type="password" name="confirmPassword" onChange={inputHandler} value={formState.confirmPassword.value }
                    placeholder="Comfirm your password" hasError={formState.confirmPassword.hasError||formState.password.hasError} />
                {(formState.confirmPassword.hasError )&& <TooltipError >{ formState.confirmPassword.error}</TooltipError>}
            </InputWrapper>
            
        </Form>
        )
};
