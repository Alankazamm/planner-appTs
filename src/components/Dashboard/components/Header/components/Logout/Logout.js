//description: logout component
//when clicked, its removes the user token from the local storage and redirects the user to the login page
import * as React from "react";
//hooks
import { useContext } from "react";
//contexts
import { UserContext } from "../../../../../../contexts/usersContext";
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
    return (React.createElement(LogoutContainer, null,
        React.createElement("a", { href: "https://compass.uol/en/home/" },
            React.createElement("img", { src: logoIcon, alt: "" })),
        React.createElement("div", null,
            React.createElement("img", { src: logoutIcon, alt: "" }),
            React.createElement("span", { onClick: logoutHandler }, "Logout"))));
};
//# sourceMappingURL=Logout.js.map