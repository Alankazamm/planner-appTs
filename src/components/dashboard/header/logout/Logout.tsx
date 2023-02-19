//description: logout component
//when clicked, its removes the user token from the local storage and redirects the user to the login page

//hooks
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
//contexts

import { LogoutContainer } from "./LogoutContainer";
//styles

//assets
import logoIcon from "/src/assets/svg/icon-logo.svg";
import logoutIcon from "/src/assets/svg/btn-logout.svg";
import { UserContext } from "./../../../../contexts/userContext";

const Logout = () => {
	const { signout } = useContext(UserContext);
	const navigate = useNavigate();
	const logoutHandler = () => {
		signout();
		navigate("/login");
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

export default Logout;
