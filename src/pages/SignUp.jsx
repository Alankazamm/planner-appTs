"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUp = void 0;
// description: this is the sign up page
const react_1 = __importDefault(require("react"));
//hooks
const react_2 = require("react");
const react_router_dom_1 = require("react-router-dom");
//styles
const BgSection_1 = require("../components/Asides/BgSection");
const FormButton_1 = require("../components/form/buttons/FormButton");
const RegisterForm_1 = require("../components/form/RegisterForm");
const Header_1 = require("../components/common/header/Header");
const ContentContainer_1 = require("../components/form/containers/ContentContainer");
const FormContainer_styles_1 = require("../components/form/containers/FormContainer.styles");
//external funcs
const register_1 = require("../auth/register");
//contexts
const userContext_1 = require("./../contexts/userContext");
//types
const formReducer_1 = require("../reducers/formReducer");
//modals
const SignErrorModal_1 = require("./../components/common/modals/SignErrorModal");
const ConfirmEmailModal_1 = require("./../components/common/confirmation/ConfirmEmailModal");
const MainWrapper_styles_1 = require("./../styles/MainWrapper.styles");
const SignUp = () => {
    //hook's calls
    const { formState, dispatch } = (0, react_2.useContext)(userContext_1.UserContext);
    const [confirmEmail, setConfirmEmail] = (0, react_2.useState)(false);
    const toggleConfirmEmail = () => setConfirmEmail(!confirmEmail);
    const navigate = (0, react_router_dom_1.useNavigate)();
    //avoid access to protected pages
    (0, react_2.useEffect)(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }, []);
    const toggleModalFunction = () => {
        dispatch({ type: formReducer_1.ActionType.TOGGLE_UNKNOWN_ERROR, payload: false });
    };
    const signUpHandler = () => {
        const { firstName, lastName, birthDate, country, city, email, password, confirmPassword, } = formState;
        //format date from YYYY-MM-DD to DD/MM/YYYY
        const newDate = birthDate.value
            .split("-")
            .reverse()
            .join("/");
        //when clicked and treated the data, send it to sing-up api request
        (0, register_1.register)({
            firstName: firstName.value,
            lastName: lastName.value,
            birthDate: newDate,
            country: country.value,
            city: city.value,
            email: email.value,
            password: password.value,
            confirmPassword: confirmPassword.value,
        })(dispatch);
        console.log(formState);
    };
    (0, react_2.useEffect)(() => {
        dispatch({ type: formReducer_1.ActionType.VALIDATE_FORM });
    }, [formState.auth.errors]);
    (0, react_2.useEffect)(() => {
        if (formState.auth.data) {
            setConfirmEmail(true);
        }
    }, [formState.auth.data]);
    return (<MainWrapper_styles_1.MainWrapper>
			<ContentContainer_1.ContentContainer>
				<div id="wrapper">
					<FormContainer_styles_1.FormContainer page="signup">
						<Header_1.HeaderText page="signup" title="Welcome," description="Please, register to continue"/>
					<RegisterForm_1.RegisterForm />
					<FormButton_1.FormButton text="Register Now" page="login" redirectText="Already have an account?" isLoading={formState.auth.loading} onClick={signUpHandler}/>
					</FormContainer_styles_1.FormContainer>
					
				</div>
			</ContentContainer_1.ContentContainer>
			{formState.unknownError && <SignErrorModal_1.SignErrorModal toggleModal={toggleModalFunction}/>}
			{confirmEmail && <ConfirmEmailModal_1.ConfirmEmailModal email={formState.email.value} toggleModal={toggleConfirmEmail}/>}
			<BgSection_1.BgSection />
		</MainWrapper_styles_1.MainWrapper>);
};
exports.SignUp = SignUp;
