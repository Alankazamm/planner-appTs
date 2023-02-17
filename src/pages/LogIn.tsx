// description: login page
//hooks
import { useContext } from "react";
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
import { UserContext } from "../contexts/UserContext";
//types
import { ActionType } from "../reducers/formReducer";
//external funcs
import { login } from "../actions/auth/login";

sessionStorage.removeItem("token");

export const LogIn = () => {
	//hook's calls
	const { formState, dispatch, isLogged } = useContext(UserContext);
	const navigate = useNavigate();

	
	useEffect(() => {
		dispatch({ type: ActionType.VALIDATE_LOGIN });
	}, [formState.loginAuth.errors]);

	useEffect(() => {
		if (formState.loginAuth.data) {
			localStorage.setItem("token", formState.loginAuth.data.token);
			dispatch({type: ActionType.LOG_USER});	
		} else {
			localStorage.removeItem("token");
		}
		
	}, [formState.loginAuth.data]);

	useEffect(() => {
		if(isLogged){
				navigate("/planner");
		}
	}, [isLogged]);

	const loginHandler = () => {
		const email = formState.user.value;
		const password = formState.loginPassword.value;
		login({ email, password })(dispatch);
		//return from api: data:{token:string, user:{birthDate, city, country, email, firstName, lastName, password,createdAt, _id} },
	};

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
					</FormContainer>
				</div>
			</ContentContainer>
			<BgSection />
		</MainWrapper>
	);
};
