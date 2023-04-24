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
exports.ActionsButton = void 0;
//assets
const btn_plus_svg_1 = __importDefault(require("/src/assets/svg/btn-plus.svg"));
const btn_minus_svg_1 = __importDefault(require("/src/assets/svg/btn-minus.svg"));
//styles
const styles_1 = require("../styles");
const React = __importStar(require("react"));
const ActionsButton = ({ onClick, icon, text, }) => {
    return (React.createElement(styles_1.StyledActionButton, { icon: icon },
        React.createElement("div", { className: "tasksButton", onClick: onClick },
            React.createElement("img", { src: icon === "plusIcon" ? btn_plus_svg_1.default : btn_minus_svg_1.default, alt: "" }),
            React.createElement("span", null, text),
            " ")));
};
exports.ActionsButton = ActionsButton;
//# sourceMappingURL=ActionsButton.js.map