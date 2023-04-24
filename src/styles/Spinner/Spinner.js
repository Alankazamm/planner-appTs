"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const animationRotate_1 = require("../animations/animationRotate");
exports.Spinner = styled_components_1.default.span `
  display: flex;
    justify-content: center;
    align-items: center;

    img{
        animation: ${animationRotate_1.rotate} 1s linear infinite;
        height: 40px;
        width: 40px;
        pointer-events: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
    }
`;
//# sourceMappingURL=Spinner.js.map