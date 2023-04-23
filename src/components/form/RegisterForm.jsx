"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterForm = void 0;
//description: This is the form for the register page. 
//It is used to collect user data and send it to the server.
//hooks
const react_1 = require("react");
const react_2 = __importDefault(require("react"));
//Styles
const Input_styles_1 = require("./inputs/styles/Input.styles");
const Label_styles_1 = require("./inputs/styles/Label.styles");
const InputWrapper_styles_1 = require("./inputs/styles/InputWrapper.styles");
const Form_styles_1 = require("./Form.styles");
//external functions
const formReducer_1 = require("../../reducers/formReducer");
const ErrorTooltip_styles_1 = __importDefault(require("../common/error-handling/tooltip/ErrorTooltip.styles"));
//contexts
const userContext_1 = require("./../../contexts/userContext");
const RegisterForm = () => {
    const { formState, dispatch } = (0, react_1.useContext)(userContext_1.UserContext);
    //send the input value to the reducer on change
    const inputHandler = (e) => {
        dispatch({ type: formReducer_1.ActionType.UPDATE_FORM, payload: { name: e.target.name, value: e.target.value } });
    };
    return (<Form_styles_1.Form page="signup">
            <InputWrapper_styles_1.InputWrapper>
                <Label_styles_1.Label htmlFor="firstName">first name</Label_styles_1.Label>
                <Input_styles_1.Input type="text" name="firstName" onChange={inputHandler} value={formState.firstName.value} placeholder="Your first name" hasError={formState.firstName.hasError}/>
                {formState.firstName.hasError && <ErrorTooltip_styles_1.default>{formState.firstName.error}</ErrorTooltip_styles_1.default>}
            </InputWrapper_styles_1.InputWrapper>
            <InputWrapper_styles_1.InputWrapper>
                <Label_styles_1.Label htmlFor="lastName">last name</Label_styles_1.Label>
                <Input_styles_1.Input type="text" name="lastName" onChange={inputHandler} value={formState.lastName.value} placeholder="Your last name" hasError={formState.lastName.hasError}/>
                    {formState.lastName.hasError && <ErrorTooltip_styles_1.default>{formState.lastName.error}</ErrorTooltip_styles_1.default>}
            </InputWrapper_styles_1.InputWrapper>
            <InputWrapper_styles_1.InputWrapper>
                <Label_styles_1.Label htmlFor="birthDate">birth date</Label_styles_1.Label>
                <Input_styles_1.Input type="date" name="birthDate" onChange={inputHandler} value={formState.birthDate.value} placeholder="MM/DD/YYYY" hasError={formState.birthDate.hasError}/>
                {formState.birthDate.hasError && <ErrorTooltip_styles_1.default>{formState.birthDate.error}</ErrorTooltip_styles_1.default>}
            </InputWrapper_styles_1.InputWrapper>
            <InputWrapper_styles_1.InputWrapper>
                <Label_styles_1.Label htmlFor="country">Country</Label_styles_1.Label>
                <Input_styles_1.Input type="text" name="country" onChange={inputHandler} value={formState.country.value} placeholder="Your Country" hasError={formState.country.hasError}/>
                {formState.country.hasError && <ErrorTooltip_styles_1.default>{formState.country.error}</ErrorTooltip_styles_1.default>}
            </InputWrapper_styles_1.InputWrapper>
            <InputWrapper_styles_1.InputWrapper>
                <Label_styles_1.Label htmlFor="city">City</Label_styles_1.Label>
                <Input_styles_1.Input type="city" name="city" onChange={inputHandler} value={formState.city.value} placeholder="Your City" hasError={formState.city.hasError}/>
                {formState.city.hasError && <ErrorTooltip_styles_1.default>{formState.city.error}</ErrorTooltip_styles_1.default>}
            </InputWrapper_styles_1.InputWrapper>
            <InputWrapper_styles_1.InputWrapper>
                <Label_styles_1.Label htmlFor="email">e-mail</Label_styles_1.Label>
                <Input_styles_1.Input type="email" name="email" onChange={inputHandler} value={formState.email.value} placeholder="A valid e-mail here" hasError={formState.email.hasError}/>
                {formState.email.hasError && <ErrorTooltip_styles_1.default>{formState.email.error}</ErrorTooltip_styles_1.default>}
            </InputWrapper_styles_1.InputWrapper>
            <InputWrapper_styles_1.InputWrapper>
                <Label_styles_1.Label htmlFor="password">password</Label_styles_1.Label>
                <Input_styles_1.Input type="password" name="password" onChange={inputHandler} value={formState.password.value} placeholder="Your password" hasError={formState.password.hasError}/>
                {formState.password.hasError && <ErrorTooltip_styles_1.default>{formState.password.error}</ErrorTooltip_styles_1.default>}
            </InputWrapper_styles_1.InputWrapper>
            <InputWrapper_styles_1.InputWrapper>
                <Label_styles_1.Label htmlFor="confirmPassword">password</Label_styles_1.Label>
                <Input_styles_1.Input type="password" name="confirmPassword" onChange={inputHandler} value={formState.confirmPassword.value} placeholder="Comfirm your password" hasError={formState.confirmPassword.hasError || formState.password.hasError}/>
                {(formState.confirmPassword.hasError) && <ErrorTooltip_styles_1.default>{formState.confirmPassword.error}</ErrorTooltip_styles_1.default>}
            </InputWrapper_styles_1.InputWrapper>
            
        </Form_styles_1.Form>);
};
exports.RegisterForm = RegisterForm;
