import { BgSection } from "../components/aside/BgSection";
import { FormButton } from "../components/form/button/FormButton";
import { FormInputs } from "../components/form/inputs/FormInputs";
import { HeaderText, pageIdentifier } from "../components/header/Header";
import { FormContainer } from "../components/form/FormContainer.styles";
import { MainWrapper } from "../components/common/MainWrapper.styles";

type formButtonProps = {
    page: pageIdentifier['page'];
    title: pageIdentifier['title'];
    description: pageIdentifier['description'];
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export const SignUp = () => {
	const signUpHandler = () => {
		console.log("sign up");
	};
	return (
		<MainWrapper >
			<FormContainer>
				<div id="wrapper">
					<HeaderText page="signup" title="" description=""/>
					<FormInputs />
					<FormButton text="Register Now" onClick={signUpHandler } />
				</div>
            </FormContainer>
            <BgSection />
		</MainWrapper>
	);
};
