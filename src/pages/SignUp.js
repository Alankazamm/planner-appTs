import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
        const { firstName, lastName, birthDate, country, city, email, password, confirmPassword, } = formState;
        const date = birthDate.value.split("/");
        const newDate = `${date[2]}-${date[0]}-${date[1]}`;
        //when clicked and treated the data, send it to sing-up api request
        register({
            firstName: firstName.value,
            lastName: lastName.value,
            birthDate: newDate,
            country: country.value,
            city: city.value,
            email: email.value,
            password: password.value,
            confirmPassword: confirmPassword.value,
        })(dispatch);
        // Auth.signUp({
        // 	username: email.value,
        // 	password: password.value,
        // 	attributes: {
        // 		email: email.value,
        // 		"custom:firstName": firstName.value,
        // 		"custom:lastName": lastName.value,
        // 		"custom:birthDate": newDate,
        // 		"custom:country": country.value,
        // 		"custom:city": city.value,
        // 	},
        // }).then((data) => {
        // 	console.log(data);
        // 	navigate("/login");
        // }
        // ).catch((err) => {
        // 	console.log(err);
        // });
    };
    //if api return errors set the errors to the inputs
    useEffect(() => {
        dispatch({ type: ActionType.VALIDATE_FORM });
    }, [formState.auth.errors]);
    //else if api return data, redirect to login page
    // useEffect(() => { 
    // 	if (formState.auth.data && !firstRender) {
    // 		// navigate("/login");
    // 		Auth.signUp({
    // 			username: formState.email.value,
    // 			password: formState.password.value,
    // 			attributes: {
    // 				email: formState.email.value,
    // 				"custom:firstName": formState.firstName.value,
    // 				"custom:lastName": formState.lastName.value,
    // 				"custom:birthDate": formState.birthDate.value,
    // 				"custom:country": formState.country.value,
    // 				"custom:city": formState.city.value,
    // 			},
    // 		}).then((data) => {
    // 			console.log(data);
    // 			navigate("/login");
    // 		}).catch((err) => {
    // 			console.log(formState.email.value);
    // 			console.log(err);
    // 		});
    // 	}
    // 	firstRender = false;
    // }, [formState.auth.data]);
    return (_jsxs(MainWrapper, { children: [_jsx(ContentContainer, { children: _jsx("div", { id: "wrapper", children: _jsxs(FormContainer, { page: "signup", children: [_jsx(HeaderText, { page: "signup", title: "Welcome,", description: "Please, register to continue" }), _jsx(RegisterForm, {}), _jsx(FormButton, { text: "Register Now", page: "login", redirectText: "Already have an account?", isLoading: formState.auth.loading, onClick: signUpHandler })] }) }) }), _jsx(BgSection, {})] }));
};
