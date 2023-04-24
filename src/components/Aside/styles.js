"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BgWrapper = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const bgImg_png_1 = __importDefault(require("/src/assets/images/bgImg.png"));
exports.BgWrapper = styled_components_1.default.div `
    width: 50%;
    height: 100vh;
    background-image: url(${bgImg_png_1.default}) ;
    background-repeat: no-repeat;
    background-size: cover;
    img{
        position: absolute;
        top: 36px;
        left: 61vw;
        max-width: 26vw;
        cursor: pointer;
    }
`;
//# sourceMappingURL=styles.js.map