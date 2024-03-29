// description: this is the sign up page
//hooks
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//styles
import { BgSection } from "../components/aside/BgSection";
import { FormButton } from "../components/form/buttons/FormButton";
import { RegisterForm } from "../components/form/RegisterForm";
import { HeaderText } from "../components/common/header/Header";
import { ContentContainer } from "../components/form/containers/ContentContainer";
import { MainWrapper } from "../components/common/MainWrapper.styles";
import { FormContainer } from "../components/form/containers/FormContainer.styles";
//external funcs
import { register } from "../actions/auth/register";
//contexts
import { UserContext } from './../contexts/userContext';

// initial values
let firstRender = true;
//types
import { ActionType } from "../reducers/formReducer";

export const SignUp = () => {
	//hook's calls
	const { formState, dispatch } = useContext(UserContext);
	const navigate = useNavigate();
	//avoid access to protected pages
	useEffect(() => {
		localStorage.removeItem("token");
		localStorage.removeItem("loggedUser");
	}, []);
	const signUpHandler = () => {
		const {
			firstName,
			lastName,
			birthDate,
			country,
			city,
			email,
			password,
			confirmPassword,
		} = formState;
		const date = birthDate.value.split("/");
		const newDate = `${date[2]}-${date[0]}-${date[1]}`;
		//when clicked and treated the data, send it to sing-up api request
		register({
			firstName: firstName.value,
			lastName: lastName.value,
			birthDate:newDate,
			country: country.value,
			city: city.value,
			email: email.value,
			password: password.value,
			confirmPassword: confirmPassword.value,
		}
		)(dispatch);
	};
	
	//if api return errors set the errors to the inputs
	useEffect(() => {
		dispatch({ type: ActionType.VALIDATE_FORM });
	}, [formState.auth.errors]);

	//else if api return data, redirect to login page
	useEffect(() => { 
		if (formState.auth.data && !firstRender) {
			navigate("/login");
		}
		firstRender = false;
	}, [formState.auth.data]);

	return (
		<MainWrapper>
			<ContentContainer>
				<div id="wrapper">
					<FormContainer page="signup">
						<HeaderText page="signup" title="Welcome," description="Please, register to continue" />
					<RegisterForm />
					<FormButton text="Register Now" page="login" redirectText="Already have an account?" isLoading={formState.auth.loading} onClick={signUpHandler} />
					</FormContainer>
					
				</div>
			</ContentContainer>
			<BgSection />
		</MainWrapper>
	);
};
