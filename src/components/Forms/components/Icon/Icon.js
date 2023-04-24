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
exports.Icon = void 0;
const icon_user_svg_1 = __importDefault(require("/src/assets/svg/icon-user.svg"));
const icon_password_svg_1 = __importDefault(require("/src/assets/svg/icon-password.svg"));
const icon_user_yellow_svg_1 = __importDefault(require("/src/assets/svg/icon-user-yellow.svg"));
const icon_password_yellow_svg_1 = __importDefault(require("/src/assets/svg/icon-password-yellow.svg"));
const styles_1 = require("./styles");
const React = __importStar(require("react"));
const Icon = (props) => {
    return (React.createElement(styles_1.IconWrapper, { iconIsInside: props.iconIsInside },
        React.createElement("img", { alt: "icon", src: props.icon === 'userIcon' ? (props.hasError === true ? icon_user_yellow_svg_1.default : icon_user_svg_1.default) : (props.hasError === true ? icon_password_yellow_svg_1.default : icon_password_svg_1.default), className: 'icon' })));
};
exports.Icon = Icon;
//# sourceMappingURL=Icon.js.map