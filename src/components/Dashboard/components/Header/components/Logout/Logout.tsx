//description: logout component
//when clicked, its removes the user token from the local storage and redirects the user to the login page

//hooks
import { useContext } from "react";
//contexts
import { UserContext } from "../../../../../../contexts/userContext";
//styles
import { LogoutContainer } from "./styles";
//assets
import logoIcon from "/src/assets/svg/icon-logo.svg";
import logoutIcon from "/src/assets/svg/btn-logout.svg";

export const Logout = () => {
	const { signout } = useContext(UserContext);
	const logoutHandler = () => {
		signout();
	};
	return (
		<LogoutContainer>
			<a href="https://compass.uol/en/home/">
				<img src={logoIcon} alt=""></img>
			</a>
			<div>
				<img src={logoutIcon} alt=""></img>
				<span onClick={logoutHandler}>Logout</span>
			</div>
		</LogoutContainer>
	);
};


