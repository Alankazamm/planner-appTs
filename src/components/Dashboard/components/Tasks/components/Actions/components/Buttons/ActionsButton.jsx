"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionsButton = void 0;
const btn_plus_svg_1 = __importDefault(require("/src/assets/svg/btn-plus.svg"));
const btn_minus_svg_1 = __importDefault(require("/src/assets/svg/btn-minus.svg"));
const StyledActionButton_styles_1 = require("./StyledActionButton.styles");
const react_1 = __importDefault(require("react"));
const ActionsButton = ({ onClick, icon, text, }) => {
    return (<StyledActionButton_styles_1.StyledActionButton icon={icon}>
			<div className="tasksButton" onClick={onClick}>
				<img src={icon === "plusIcon" ? btn_plus_svg_1.default : btn_minus_svg_1.default} alt=""></img>
				<span>{text}</span>{" "}
			</div>
		</StyledActionButton_styles_1.StyledActionButton>);
};
exports.ActionsButton = ActionsButton;
