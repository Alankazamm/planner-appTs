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
import { FormButton } from "../components/form/button/FormButton";

import { UserContext } from "../contexts/userContext";
//types
import { ActionType } from "../reducers/formReducer";

export const LogIn = () => {
    const { formState, dispatch } = useContext(UserContext);
    const loginHandler = () => {
        dispatch({ type: ActionType.VALIDATE_FORM });
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
