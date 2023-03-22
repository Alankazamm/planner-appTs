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


let firstRender = true;
export const LogIn = () => {

	const toggleConfirmEmail = () => {
		setConfirmEmailModal(!confirmEmailModal);
	};
		
	const loginHandler = () => {

		const email = formState.user.value;
		const password = formState.loginPassword.value;
		login({ email, password })(dispatch);
		
	
		//return from api: data:{token:string, user:{birthDate, city, country, email, firstName, lastName, password,createdAt, _id} },
	};

	
	//hook's calls
	const { formState, dispatch } = useContext(UserContext);
	const navigate = useNavigate();
	const [confirmEmailModal, setConfirmEmailModal] = useState<boolean>(false);
	
	useEffect(() => {
		if (firstRender) {
			firstRender = false;
			dispatch({ type: ActionType.LOG_USER });
			localStorage.removeItem("token");
			localStorage.removeItem("loggedUser");
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
	// 		localStorage.setItem("loggedUser", JSON.stringify(formState.loginAuth.data.user));
	// 		updateToken(formState.loginAuth.data.token)
	// 		navigate("/planner");
	// 	}
	// }, [formState.loginAuth.data]);

	
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
					
						{confirmEmailModal && <ConfirmEmailModal toggleConfirm={toggleConfirmEmail} email={formState.user.value} />}
					</FormContainer>
				</div>
				{/* <Authenticator>
					<FormContainer page="login">
						<HeaderText page="login" title="Welcome," description="To continue browsing safely, log in to the network." />
						<LoginForm />
						<FormButton text="Log in" page="signup" redirectText="Don't have an account?" isLoading={formState.loginAuth.loading} onClick={loginHandler} />
					</FormContainer>

				</Authenticator> */}
			</ContentContainer>
			<BgSection />
		</MainWrapper>
	);
};
