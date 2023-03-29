import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//description: logout component
//when clicked, its removes the user token from the local storage and redirects the user to the login page
//hooks
import { useContext } from "react";
//contexts
import { LogoutContainer } from "./LogoutContainer";
//styles
//assets
import logoIcon from "/src/assets/svg/icon-logo.svg";
import logoutIcon from "/src/assets/svg/btn-logout.svg";
import { UserContext } from "./../../../../contexts/userContext";
const Logout = () => {
    const { signout } = useContext(UserContext);
    const logoutHandler = () => {
        signout();
    };
    return (_jsxs(LogoutContainer, { children: [_jsx("a", { href: "https://compass.uol/en/home/", children: _jsx("img", { src: logoIcon, alt: "" }) }), _jsxs("div", { children: [_jsx("img", { src: logoutIcon, alt: "" }), _jsx("span", { onClick: logoutHandler, children: "Logout" })] })] }));
};
export default Logout;
