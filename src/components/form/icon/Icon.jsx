"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const icon_user_svg_1 = __importDefault(require("/src/assets/svg/icon-user.svg"));
const icon_password_svg_1 = __importDefault(require("/src/assets/svg/icon-password.svg"));
const icon_user_yellow_svg_1 = __importDefault(require("/src/assets/svg/icon-user-yellow.svg"));
const icon_password_yellow_svg_1 = __importDefault(require("/src/assets/svg/icon-password-yellow.svg"));
const IconWrapper_styles_1 = require("./IconWrapper.styles");
const react_1 = __importDefault(require("react"));
const Icon = (props) => {
    return (<IconWrapper_styles_1.IconWrapper iconIsInside={props.iconIsInside}>
      <img alt="icon" src={props.icon === 'userIcon' ? (props.hasError === true ? icon_user_yellow_svg_1.default : icon_user_svg_1.default) : (props.hasError === true ? icon_password_yellow_svg_1.default : icon_password_svg_1.default)} className='icon'></img>
    </IconWrapper_styles_1.IconWrapper>);
};
exports.Icon = Icon;
