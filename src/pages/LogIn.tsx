// description: login page
//hooks
import { useContext } from "react";

//styles
import { MainWrapper } from "../components/common/MainWrapper.styles";
import { FormContainer } from "../components/form/containers/FormContainer.styles";
//components
import { HeaderText } from "../components/common/header/Header";
import { ContentContainer } from "../components/form/containers/ContentContainer";
import { BgSection } from "../components/aside/BgSection";
import { LoginForm } from "../components/form/LoginForm";
import { FormButton } from "../components/button/form/FormButton";

import { UserContext } from "../contexts/userContext";
//types
import { ActionType } from "../reducers/formReducer";
//hooks
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LogIn = () => {
    //hook's calls
    const { formState, dispatch } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
		if (formState.isLoginValid === true) {
            
            console.log("Logged in");
            localStorage.setItem("token", "true");
            dispatch({ type: ActionType.RESET_LOGIN });
            navigate("/planner");
		} else {
			console.log("Not logged in");
		}
    }, [formState.isLoginValid]);

	const loginHandler = () => {
		dispatch({ type: ActionType.SEND_LOGIN });
		console.log(formState.user);
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
                        <FormButton text="Log in" onClick={loginHandler} />
                       
					</FormContainer>
				</div>
			</ContentContainer>
			<BgSection />
		</MainWrapper>
	);
};
