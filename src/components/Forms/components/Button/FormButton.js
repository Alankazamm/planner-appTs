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
exports.FormButton = void 0;
//description: this button is used in login and register forms
const React = __importStar(require("react"));
//components
const Redirect_1 = require("../../../Redirect/Redirect");
//styles
const styles_1 = require("./styles");
//assets
const spinner_uol_svg_1 = __importDefault(require("/src/assets/svg/spinner-uol.svg"));
const FormButton = (props) => {
    return (React.createElement(styles_1.StyledFormBtn, null,
        props.isLoading ? React.createElement("img", { alt: "loading spinner", src: spinner_uol_svg_1.default }) : React.createElement("button", { onClick: props.onClick }, props.text),
        React.createElement(Redirect_1.Redirect, { page: props.page, text: props.redirectText })));
};
exports.FormButton = FormButton;
//# sourceMappingURL=FormButton.js.map