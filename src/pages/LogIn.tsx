// description: login page
//hooks
import { useContext } from "react";

//styles
import { MainWrapper } from "../components/common/MainWrapper.styles";
import { FormContainer } from "../components/form/containers/FormContainer.styles";
//components
import { HeaderText } from "../components/header/Header";
import { ContentContainer } from "../components/form/containers/ContentContainer";
import { BgSection } from "../components/aside/BgSection";
import { LoginForm } from "../components/form/LoginForm";
import { FormButton } from "../components/button/form/FormButton";

import { UserContext } from "../contexts/userContext";
//types
import { ActionType } from "../reducers/formReducer";
import { useEffect } from "react";
import { Redirect } from "../components/redirects/form/Redirect";

export const LogIn = () => {
	const { formState, dispatch, isLogged } = useContext(UserContext);
	const loginHandler = () => {
		dispatch({ type: ActionType.SEND_LOGIN });
		console.log(formState.user);
	};
	useEffect(() => {
		if (isLogged === true) {
			console.log("Logged in");
		} else {
			console.log("Not logged in");
		}
    }, [isLogged]);
    
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
                        <FormButton text="Log in" onClick={loginHandler} />
                       
					</FormContainer>
				</div>
			</ContentContainer>
			<BgSection />
		</MainWrapper>
	);
};
