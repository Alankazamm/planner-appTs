"use strict";
//description: logout component
//when clicked, its removes the user token from the local storage and redirects the user to the login page
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logout = void 0;
//hooks
const react_1 = require("react");
//contexts
const userContext_1 = require("../../../../../../contexts/userContext");
//styles
const styles_1 = require("./styles");
//assets
const icon_logo_svg_1 = __importDefault(require("/src/assets/svg/icon-logo.svg"));
const btn_logout_svg_1 = __importDefault(require("/src/assets/svg/btn-logout.svg"));
const react_2 = __importDefault(require("react"));
const Logout = () => {
    const { signout } = (0, react_1.useContext)(userContext_1.UserContext);
    const logoutHandler = () => {
        signout();
    };
    return (<styles_1.LogoutContainer>
			<a href="https://compass.uol/en/home/">
				<img src={icon_logo_svg_1.default} alt=""></img>
			</a>
			<div>
				<img src={btn_logout_svg_1.default} alt=""></img>
				<span onClick={logoutHandler}>Logout</span>
			</div>
		</styles_1.LogoutContainer>);
};
exports.Logout = Logout;
