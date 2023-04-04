// description: login page
//hooks
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//styles
import { FormContainer } from "../components/form/containers/FormContainer.styles";
//components
import { HeaderText } from "../components/common/Header/Header";
import { ContentContainer } from "../components/form/containers/ContentContainer";
import { LoginForm } from "../components/form/LoginForm";
import { FormButton } from "../components/form/buttons/FormButton";
//contexts
import { UserContext } from './../contexts/userContext';

//types
import { ActionType } from "../reducers/formReducer";
//external funcs
import { login } from "../auth/login";
import { ConfirmEmailModal } from "../components/Modals/components/ConfirmEmailModal";
// import { updateToken } from "../helpers/axios";
import { ForgotPasswordModal } from './../components/Modals/components/ForgotPasswordModal';
import { ResetPasswordModal } from "../components/Modals/components/ResetPasswordModal";
import { MainWrapper } from "../styles/MainWrapper.styles";
import { BgSection } from '../components/Aside/BgSection';



let firstRender = true;
export const LogIn = () => {
	
	//hook's calls
	const { formState, dispatch } = useContext(UserContext);
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState<{
		confirmModal: boolean;
		forgotPasswordModal: {
			show: boolean;
			sended: boolean;
		};
	}>({
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
		login({ email, password })(dispatch);
	};

	const toggleConfirmEmail = () => {
		setShowModal({ ...showModal, confirmModal: !showModal.confirmModal });
	};

	const toggleForgotPassword = (sended:boolean) => {
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
	useEffect(() => {
		if (firstRender) {
			firstRender = false;
			localStorage.removeItem("token");
			localStorage.removeItem("user");
			dispatch({ type: ActionType.LOG_USER });
		}
	}, []);

	useEffect(() => {
		if (formState.loginAuth.errors) {
			dispatch({ type: ActionType.VALIDATE_LOGIN });
		}
	}, [formState.loginAuth.errors]);

	useEffect(() => {
		if (formState.loginAuth.data) {
			navigate("/planner");
		}
	}, [formState.loginAuth.data]);

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

	return (
		<MainWrapper>
			<ContentContainer>
				<div className="wrapper">
					<FormContainer page="login">
						<HeaderText
							page="login"
							title="Welcome,"
							description="To continue browsing safely, log in to the network."
						/>
						<LoginForm />
						<FormButton
							text="Log in"
							page="signup"
							redirectText="Don't have an account?"
							isLoading={formState.loginAuth.loading}
							onClick={loginHandler}
						/>
						<span
							style={{
								textAlign: "center",
								width: "100%",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								color:"rgb(255, 255, 255)",
								
							}}
						> Forgot password? <span
							style={{
								textDecoration: "underline",
									color: "#ff0000",
									cursor: "pointer",
									marginLeft: "5px",
							}}
								onClick={forgotLinkHandler}>Click here</span></span>
						{showModal.forgotPasswordModal.sended && <ResetPasswordModal toggleModal={toggleResetModal} />}
						{showModal.forgotPasswordModal.show && <ForgotPasswordModal toggleModal={toggleForgotPassword} ></ForgotPasswordModal>}
						{showModal.confirmModal && <ConfirmEmailModal toggleModal={toggleConfirmEmail} email={formState.user.value} />}
					</FormContainer>
				</div>
			</ContentContainer>
			<BgSection />
		</MainWrapper>
	);
};
