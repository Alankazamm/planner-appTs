"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginForm = void 0;
// description: this is a form component that will be used to log in to dashboard
//hooks
const react_1 = require("react");
const ErrorTooltip_styles_1 = __importDefault(require("../common/error-handling/tooltip/ErrorTooltip.styles"));
const Form_styles_1 = require("./Form.styles");
const Icon_1 = require("./icon/Icon");
const react_2 = __importDefault(require("react"));
//styles
const Input_styles_1 = require("./inputs/styles/Input.styles");
const InputWrapper_styles_1 = require("./inputs/styles/InputWrapper.styles");
const userContext_1 = require("./../../contexts/userContext");
const LoginForm = () => {
    //hooks
    const [errorUser, setErrorUser] = (0, react_1.useState)(false);
    const [errorPassword, setErrorPassword] = (0, react_1.useState)(false);
    const [iconIsInside, setIconIsInside] = (0, react_1.useState)({ user: false, password: false });
    const { formState, dispatch } = (0, react_1.useContext)(userContext_1.UserContext);
    //set the error for the states that manages icons colors and error tooltips
    (0, react_1.useEffect)(() => {
        setErrorUser(formState.user.hasError);
    }, [formState.user.hasError]);
    (0, react_1.useEffect)(() => {
        setErrorPassword(formState.loginPassword.hasError);
    }, [formState.loginPassword.hasError]);
    //manages the icons inside or not, and remove the error state from the formstate(to remove error markups)
    const inputHandler = (e) => {
        dispatch({ type: "UPDATE_FORM", payload: { name: e.target.name, value: e.target.value } });
        if (e.target.value !== "") {
            e.target.name === "user" ? setIconIsInside({ ...iconIsInside, user: true })
                : setIconIsInside({ ...iconIsInside, password: true });
        }
        else {
            e.target.name === "user" ? setIconIsInside({ ...iconIsInside, user: false })
                : setIconIsInside({ ...iconIsInside, password: false });
        }
    };
    return (<Form_styles_1.Form page="login" hasError={formState.user.hasError || formState.loginPassword.hasError}>
			
			<h2>Login</h2>
            <InputWrapper_styles_1.LoginInputWrapper>
                <div>
                    <Input_styles_1.Input type="text" name="user" onChange={inputHandler} onFocus={() => setIconIsInside({ ...iconIsInside, user: true })} onBlur={(e) => e.target.value === "" ? setIconIsInside({ ...iconIsInside, user: false }) : null} value={formState.user.value} placeholder="user name" hasError={formState.user.hasError}/>
                 {errorUser && <ErrorTooltip_styles_1.default page="login">{formState.user.error}</ErrorTooltip_styles_1.default>}
                </div>
				
				<Icon_1.Icon icon="userIcon" hasError={errorUser} iconIsInside={iconIsInside.user}/>
			</InputWrapper_styles_1.LoginInputWrapper>
            <InputWrapper_styles_1.LoginInputWrapper>
                <div>
                    <Input_styles_1.Input type="password" name="loginPassword" onChange={inputHandler} onFocus={() => setIconIsInside({ ...iconIsInside, password: true })} onBlur={(e) => e.target.value === "" ? setIconIsInside({ ...iconIsInside, password: false }) : null} value={formState.loginPassword.value} placeholder="password" hasError={formState.loginPassword.hasError}/>
                    {errorPassword && <ErrorTooltip_styles_1.default page="login">{formState.loginPassword.error}</ErrorTooltip_styles_1.default>}
                </div>
				
				<Icon_1.Icon icon="passwordIcon" hasError={errorPassword} iconIsInside={iconIsInside.password}/>
            </InputWrapper_styles_1.LoginInputWrapper>
            <div className="errorDiv"><span className="error">Wow, invalid username or password. Please, try again!</span></div>
		</Form_styles_1.Form>);
};
exports.LoginForm = LoginForm;
