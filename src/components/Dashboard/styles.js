"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashBoardContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const globo_svg_1 = __importDefault(require("/src/assets/svg/globo.svg"));
exports.DashBoardContainer = styled_components_1.default.div `
    position: relative;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 4px 4px 70px 0px #00000040;
    min-height: 100vh;
    max-width: 100vw;
    background-image: url(${globo_svg_1.default});
    background-repeat: no-repeat;
    background-position: right bottom;
    
`;
//# sourceMappingURL=styles.js.map