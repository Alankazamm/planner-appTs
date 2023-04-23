"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormButton = void 0;
//description: this burron is used in login and register forms
const react_1 = __importDefault(require("react"));
//components
const Redirect_1 = require("../../redirects/form/Redirect");
//styles
const FormButton_styles_1 = require("./FormButton.styles");
//assets
const spinner_uol_svg_1 = __importDefault(require("/src/assets/svg/spinner-uol.svg"));
const FormButton = (props) => {
    return (<FormButton_styles_1.StyledFormBtn>
            {props.isLoading ? <img alt="loading spinner" src={spinner_uol_svg_1.default}></img> : <button onClick={props.onClick}>{props.text}</button>}
            <Redirect_1.Redirect page={props.page} text={props.redirectText}/>
        </FormButton_styles_1.StyledFormBtn>);
};
exports.FormButton = FormButton;
