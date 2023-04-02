// description: this is the sign up page
//hooks
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//styles
import { BgSection } from "../components/Aside/BgSection";
import { FormButton } from "../components/form/buttons/FormButton";
import { RegisterForm } from "../components/form/RegisterForm";
import { HeaderText } from "../components/common/header/Header";
import { ContentContainer } from "../components/form/containers/ContentContainer";

import { FormContainer } from "../components/form/containers/FormContainer.styles";
//external funcs
import { register } from "../auth/register";
//contexts
import { UserContext } from './../contexts/userContext';
//types
import { ActionType } from "../reducers/formReducer";
//modals
import { SignErrorModal } from './../components/common/modals/SignErrorModal';
import { ConfirmEmailModal } from './../components/common/confirmation/ConfirmEmailModal';
import { MainWrapper } from './../styles/MainWrapper.styles';



export const SignUp = () => {
	//hook's calls
	const { formState, dispatch } = useContext(UserContext);
	const [confirmEmail, setConfirmEmail] = useState<boolean>(false);
	const toggleConfirmEmail = () => setConfirmEmail(!confirmEmail);
	const navigate = useNavigate();
	//avoid access to protected pages
	useEffect(() => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
	}, []);
	const toggleModalFunction = () => {
		dispatch({ type: ActionType.TOGGLE_UNKNOWN_ERROR, payload: false })
	}
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
		//format date from YYYY-MM-DD to DD/MM/YYYY
		const newDate = birthDate.value
			.split("-")
			.reverse()
			.join("/");
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
		
		console.log(formState);
	};
	
	useEffect(() => {
		dispatch({ type: ActionType.VALIDATE_FORM });
		
	}, [formState.auth.errors]);
	useEffect(() => {
		if (formState.auth.data) {
			setConfirmEmail(true);
		}
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
			{formState.unknownError && <SignErrorModal toggleModal={toggleModalFunction} />}
			{confirmEmail && <ConfirmEmailModal email={formState.email.value} toggleModal={toggleConfirmEmail} />}
			<BgSection />
		</MainWrapper>
	);
};