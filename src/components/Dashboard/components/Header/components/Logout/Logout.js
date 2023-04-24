"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logout = void 0;
//description: logout component
//when clicked, its removes the user token from the local storage and redirects the user to the login page
const React = __importStar(require("react"));
//hooks
const react_1 = require("react");
//contexts
const usersContext_1 = require("../../../../../../contexts/usersContext");
//styles
const styles_1 = require("./styles");
//assets
const icon_logo_svg_1 = __importDefault(require("/src/assets/svg/icon-logo.svg"));
const btn_logout_svg_1 = __importDefault(require("/src/assets/svg/btn-logout.svg"));
const Logout = () => {
    const { signout } = (0, react_1.useContext)(usersContext_1.UserContext);
    const logoutHandler = () => {
        signout();
    };
    return (React.createElement(styles_1.LogoutContainer, null,
        React.createElement("a", { href: "https://compass.uol/en/home/" },
            React.createElement("img", { src: icon_logo_svg_1.default, alt: "" })),
        React.createElement("div", null,
            React.createElement("img", { src: btn_logout_svg_1.default, alt: "" }),
            React.createElement("span", { onClick: logoutHandler }, "Logout"))));
};
exports.Logout = Logout;
//# sourceMappingURL=Logout.js.map