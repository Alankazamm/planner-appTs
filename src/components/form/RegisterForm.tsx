//description: This is the form for the register page. 
//It is used to collect user data and send it to the server.
//hooks
import { UserContext } from '../../contexts/UserContext';
import { useContext } from "react";

//Styles
import { Input } from "./inputs/styles/Input.styles";
import { Label } from './inputs/styles/Label.styles';
import { InputWrapper } from './inputs/styles/InputWrapper.styles';
import { Form } from "./Form.styles";

//external functions
import { ActionType } from "../../reducers/formReducer";



export const RegisterForm = () => {
    
    const { formState, dispatch } = useContext(UserContext);
    const inputHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: ActionType.UPDATE_FORM, payload: { name: e.target.name, value: e.target.value } });
    }
    

    return (
        <Form page="signup">
            <InputWrapper>
                <Label htmlFor="firstName">first name</Label>
                <Input type="text" name="firstName" onChange={inputHandler} value={formState.firstName.value } placeholder="Your first name"  hasError={formState.firstName.hasError}/>
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="lastName" >last name</Label>
                <Input type="text" name="lastName" onChange={inputHandler} value={formState.lastName.value } placeholder="Your last name" hasError={formState.lastName.hasError}/>
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="birthDate" >birth date</Label>
                <Input type="text" name="birthDate" onChange={inputHandler} value={formState.birthDate.value } placeholder="MM/DD/YYYY" hasError={formState.birthDate.hasError}/>
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="country" >Country</Label>
                <Input type="text" name="country" onChange={inputHandler} value={formState.country.value } placeholder="Your Country" hasError={formState.country.hasError}/>
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="city" >City</Label>
                <Input type="city" name="city" onChange={inputHandler} value={formState.city.value } placeholder="Your City" hasError={formState.city.hasError}/>
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="email" >e-mail</Label>
                <Input type="email" name="email" onChange={inputHandler} value={formState.email.value } placeholder="A valid e-mail here" hasError={formState.email.hasError}/>
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="password" >password</Label>
                <Input type="password" name="password" onChange={inputHandler} value={formState.password.value } placeholder="Your password" hasError={formState.password.hasError}/>
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="confirmPassword" >password</Label>
                <Input type="password" name="confirmPassword" onChange={inputHandler} value={formState.confirmPassword.value } placeholder="Comfirm your password" hasError={formState.confirmPassword.hasError}/>
            </InputWrapper>
            
        </Form>
        )
};
