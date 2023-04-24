"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Backdrop = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const animationRotate_1 = require("../animations/animationRotate");
exports.Backdrop = styled_components_1.default.div `
  position: absolute;
    top: 0;
    left: -110px;
    right: 10px;
    width: 200vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 110px 0 rgba(0, 0, 0, 0.1);
    z-index: 100;
    
    img{
        position: absolute;
        top: 25%;
        left: 25%;
        animation: ${animationRotate_1.rotate} 1s linear infinite;
        height: 140px;
        width: 140px;
        pointer-events: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
    
    }
`;
//# sourceMappingURL=Backdrop.js.map