"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogIn = void 0;
// description: login page
//hooks
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const react_3 = require("react");
const react_router_dom_1 = require("react-router-dom");
//styles
const FormContainer_styles_1 = require("../components/form/containers/FormContainer.styles");
//components
const Header_1 = require("../components/common/header/Header");
const ContentContainer_1 = require("../components/form/containers/ContentContainer");
const LoginForm_1 = require("../components/form/LoginForm");
const FormButton_1 = require("../components/form/buttons/FormButton");
//contexts
const userContext_1 = require("./../contexts/userContext");
//types
const formReducer_1 = require("../reducers/formReducer");
//external funcs
const login_1 = require("../auth/login");
const ConfirmEmailModal_1 = require("../components/common/confirmation/ConfirmEmailModal");
// import { updateToken } from "../helpers/axios";
const ForgotPasswordModal_1 = require("./../components/common/modals/ForgotPasswordModal");
const ResetPasswordModal_1 = require("../components/common/modals/ResetPasswordModal");
const MainWrapper_styles_1 = require("../styles/MainWrapper.styles");
const BgSection_1 = require("../components/Asides/BgSection");
let firstRender = true;
const LogIn = () => {
    //hook's calls
    const { formState, dispatch } = (0, react_2.useContext)(userContext_1.UserContext);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [showModal, setShowModal] = (0, react_2.useState)({
        confirmModal: false,
        forgotPasswordModal: {
            show: false,
            sended: false,
        },
    });
    //functions
    const loginHandler = () => {
        const email = formState.user.value;
        const password = formState.loginPassword.value;
        (0, login_1.login)({ email, password })(dispatch);
    };
    const toggleConfirmEmail = () => {
        setShowModal({ ...showModal, confirmModal: !showModal.confirmModal });
    };
    const toggleForgotPassword = (sended) => {
        setShowModal({ ...showModal, forgotPasswordModal: { show: !showModal.forgotPasswordModal.show, sended } });
    };
    const forgotLinkHandler = () => {
        toggleForgotPassword(false);
    };
    const toggleResetModal = () => {
        //it will close the reset modal with forgotPasswordModal.sended
        setShowModal({ ...showModal, forgotPasswordModal: { show: false, sended: false } });
    };
    //useEffect's
    (0, react_3.useEffect)(() => {
        if (firstRender) {
            firstRender = false;
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            dispatch({ type: formReducer_1.ActionType.LOG_USER });
        }
    }, []);
    (0, react_3.useEffect)(() => {
        if (formState.loginAuth.errors) {
            dispatch({ type: formReducer_1.ActionType.VALIDATE_LOGIN });
        }
    }, [formState.loginAuth.errors]);
    (0, react_3.useEffect)(() => {
        if (formState.loginAuth.data) {
            navigate("/planner");
        }
    }, [formState.loginAuth.data]);
    (0, react_3.useEffect)(() => {
        if (formState.user.error) {
            //check if the error is because the user is not confirmed
            console.log(formState.user.error);
            if (formState.user.error.includes("User is not confirmed")) {
                console.log("user is not confirmed");
                toggleConfirmEmail();
            }
        }
    }, [formState.user.error]);
    return (<MainWrapper_styles_1.MainWrapper>
			<ContentContainer_1.ContentContainer>
				<div className="wrapper">
					<FormContainer_styles_1.FormContainer page="login">
						<Header_1.HeaderText page="login" title="Welcome," description="To continue browsing safely, log in to the network."/>
						<LoginForm_1.LoginForm />
						<FormButton_1.FormButton text="Log in" page="signup" redirectText="Don't have an account?" isLoading={formState.loginAuth.loading} onClick={loginHandler}/>
						<span style={{
            textAlign: "center",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "rgb(255, 255, 255)",
        }}> Forgot password? <span style={{
            textDecoration: "underline",
            color: "#ff0000",
            cursor: "pointer",
            marginLeft: "5px",
        }} onClick={forgotLinkHandler}>Click here</span></span>
						{showModal.forgotPasswordModal.sended && <ResetPasswordModal_1.ResetPasswordModal toggleModal={toggleResetModal}/>}
						{showModal.forgotPasswordModal.show && <ForgotPasswordModal_1.ForgotPasswordModal toggleModal={toggleForgotPassword}></ForgotPasswordModal_1.ForgotPasswordModal>}
						{showModal.confirmModal && <ConfirmEmailModal_1.ConfirmEmailModal toggleModal={toggleConfirmEmail} email={formState.user.value}/>}
					</FormContainer_styles_1.FormContainer>
				</div>
			</ContentContainer_1.ContentContainer>
			<BgSection_1.BgSection />
		</MainWrapper_styles_1.MainWrapper>);
};
exports.LogIn = LogIn;
