import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// description: login page
//hooks
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//styles
import { MainWrapper } from "../components/common/MainWrapper.styles";
import { FormContainer } from "../components/form/containers/FormContainer.styles";
//components
import { HeaderText } from "../components/common/header/Header";
import { ContentContainer } from "../components/form/containers/ContentContainer";
import { BgSection } from "../components/aside/BgSection";
import { LoginForm } from "../components/form/LoginForm";
import { FormButton } from "../components/form/buttons/FormButton";
//contexts
import { UserContext } from './../contexts/userContext';
//types
import { ActionType } from "../reducers/formReducer";
//external funcs
import { login } from "../actions/auth/login";
import { ConfirmEmailModal } from "../components/common/confirmation/ConfirmEmailModal";
// import { updateToken } from "../helpers/axios";
import { ForgotPasswordModal } from './../components/common/modals/ForgotPasswordModal';
import { ResetPasswordModal } from "../components/common/modals/ResetPasswordModal";
let firstRender = true;
export const LogIn = () => {
    const loginHandler = () => {
        const email = formState.user.value;
        const password = formState.loginPassword.value;
        login({ email, password })(dispatch);
        //return from api: data:{token:string, user:{birthDate, city, country, email, firstName, lastName, password,createdAt, _id} },
    };
    //hook's calls
    const { formState, dispatch } = useContext(UserContext);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState({
        confirmModal: false,
        forgotPasswordModal: {
            show: false,
            sended: false,
        },
    });
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
    useEffect(() => {
        if (firstRender) {
            firstRender = false;
            dispatch({ type: ActionType.LOG_USER });
        }
    }, []);
    useEffect(() => {
        if (formState.loginAuth.errors) {
            dispatch({ type: ActionType.VALIDATE_LOGIN });
        }
    }, [formState.loginAuth.errors]);
    useEffect(() => {
        if (formState.user.error) {
            //check if the error is because the user is not confirmed
            console.log(formState.user.error);
            if (formState.user.error.includes("User is not confirmed")) {
                console.log("user is not confirmed");
                toggleConfirmEmail();
            }
        }
    }, [formState.user.error]);
    // useEffect(() => {
    // 	if (formState.loginAuth.data) {
    // 		localStorage.setItem("token", formState.loginAuth.data.token);
    // 		localStorage.setItem("loggedUser", formState.loginAuth.data);
    // 		console.log(formState.loginAuth.data);
    // 	}
    // }, [formState.loginAuth.data]);
    return (_jsxs(MainWrapper, { children: [_jsx(ContentContainer, { children: _jsx("div", { className: "wrapper", children: _jsxs(FormContainer, { page: "login", children: [_jsx(HeaderText, { page: "login", title: "Welcome,", description: "To continue browsing safely, log in to the network." }), _jsx(LoginForm, {}), _jsx(FormButton, { text: "Log in", page: "signup", redirectText: "Don't have an account?", isLoading: formState.loginAuth.loading, onClick: loginHandler }), _jsxs("span", { style: {
                                    textAlign: "center",
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "rgb(255, 255, 255)",
                                }, children: [" Forgot password? ", _jsx("span", { style: {
                                            textDecoration: "underline",
                                            color: "#ff0000",
                                            cursor: "pointer",
                                            marginLeft: "5px",
                                        }, onClick: forgotLinkHandler, children: "Click here" })] }), showModal.forgotPasswordModal.sended && _jsx(ResetPasswordModal, { toggleModal: toggleResetModal }), showModal.forgotPasswordModal.show && _jsx(ForgotPasswordModal, { toggleModal: toggleForgotPassword }), showModal.confirmModal && _jsx(ConfirmEmailModal, { toggleModal: toggleConfirmEmail, email: formState.user.value })] }) }) }), _jsx(BgSection, {})] }));
};
