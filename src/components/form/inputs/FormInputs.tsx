import { Dispatch, useReducer } from "react";

//Styles
import { Input } from "./styles/Input.styles";
import { InputWrapper } from "/src/components/form/inputs/styles/InputWrapper.styles";
import { Label } from "/src/components/form/inputs/styles/Label.styles";

//Reducer
import { formsReducer, formState, action, ActionType } from "/src/reducers/formReducer.ts";

type reducerDestructure = [formState, Dispatch<action>];

const initialState:formState = {
    firstName: {value: '', hasError: false},
    lastName: {value: '', hasError: false},
    birthDate: {value: '', hasError : false},
    country: {value: '', hasError : false},
    city: {value: '', hasError : false},
    email: {value: '', hasError : false},
    password: {value: '', hasError : false},
    confirmPassword: {value: '', hasError : false},
    isFormValid: false
}

export const FormInputs = () => {
    
    const [formState, dispatch]:reducerDestructure = useReducer(formsReducer, initialState);
    const inputHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: ActionType.UPDATE_FORM, payload: { name: e.target.name, value: e.target.value } });
    }

    return (
        <>
            <InputWrapper>
                <Label htmlFor="firstName">first name</Label>
                <Input type="text" name="firstName" onChange={inputHandler} value={formState.firstName.value } placeholder="Your first name" />
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="lastName" >last name</Label>
                <Input type="text" name="lastName" onChange={inputHandler} value={formState.lastName.value } placeholder="Your last name" onChange={inputHandler } />
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="birthDate" >birth date</Label>
                <Input type="text" name="birthDate" onChange={inputHandler} value={formState.birthDate.value } placeholder="MM/DD/YYYY" />
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="country" >Country</Label>
                <Input type="text" name="country" onChange={inputHandler} value={formState.country.value } placeholder="Your Country" />
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="city" >City</Label>
                <Input type="city" name="city" onChange={inputHandler} value={formState.city.value } placeholder="Your City" />
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="email" >e-mail</Label>
                <Input type="email" name="email" onChange={inputHandler} value={formState.email.value } placeholder="A valid e-mail here" />
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="password" >password</Label>
                <Input type="password" name="password" onChange={inputHandler} value={formState.password.value } placeholder="Your password" />
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="confirmPassword" >password</Label>
                <Input type="password" name="confirmPassword" onChange={inputHandler} value={formState.confirmPassword.value } placeholder="Comfirm your password" />
            </InputWrapper>
            
        </>
        )
};
