"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderText = void 0;
const Header_styles_1 = require("./Header.styles");
const react_1 = __importDefault(require("react"));
const HeaderText = ({ page, title, description }) => {
    return (<Header_styles_1.HeaderTextStyle page={page} title={title} description={description}>
			<h1>{title}</h1>
			<p>{description}</p>
		</Header_styles_1.HeaderTextStyle>);
};
exports.HeaderText = HeaderText;
