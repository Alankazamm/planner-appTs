// description: this is the sign up page
//hooks
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
//styles
import { BgSection } from "../components/aside/BgSection";
import { FormButton } from "../components/form/buttons/FormButton";
import { RegisterForm } from "../components/form/RegisterForm";
import { HeaderText } from "../components/common/header/Header";
import { ContentContainer } from "../components/form/containers/ContentContainer";
import { MainWrapper } from "../components/common/MainWrapper.styles";
//external funcs
import { register } from "../actions/register";
// initial values
let firstRender = true;
//types
import { ActionType } from "../reducers/formReducer";
import { useNavigate } from "react-router-dom";
import { FormContainer } from "../components/form/containers/FormContainer.styles";


export const SignUp = () => {
	//hook's calls
	const { formState, dispatch } = useContext(UserContext);
	const navigate = useNavigate();

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
	
	useEffect(() => {
		dispatch({ type: ActionType.VALIDATE_FORM });
	}, [formState.auth.errors]);

	return (
		<MainWrapper>
			<ContentContainer>
				<div id="wrapper">
					<FormContainer page="signup">
						<HeaderText page="signup" title="Welcome," description="Please, register to continue" />
					<RegisterForm />
					<FormButton text="Register Now" page="login" redirectText="Already have an account?" onClick={signUpHandler} />
					</FormContainer>
					
				</div>
			</ContentContainer>
			<BgSection />
		</MainWrapper>
	);
};

// Promise.resolve(register({
// 	firstName: firstName.value,
// 	lastName: lastName.value,
// 	birthDate: newDate,
// 	country: country.value,
// 	city: city.value,
// 	email: email.value,
// 	password: password.value,
// 	confirmPassword: confirmPassword.value,
// }))
// 	.then((res) => {
// 		console.log(res);
// 		navigate("/login");
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});
