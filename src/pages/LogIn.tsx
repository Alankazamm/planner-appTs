import { HeaderText } from "../components/header/Header";
import { ContentContainer } from "../components/form/containers/ContentContainer.styles";
import { MainWrapper } from "../components/common/MainWrapper.styles";
import { BgSection } from "../components/aside/BgSection";
import { LoginForm } from "../components/form/LoginForm";
import { FormContainer } from "../components/form/containers/FormContainer.styles";
import { FormButton } from "../components/form/button/FormButton";

export const LogIn = () => {
    const loginHandler = () => {
        console.log("login");
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
