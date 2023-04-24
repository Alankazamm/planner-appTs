"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginInputWrapper = exports.InputWrapper = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.InputWrapper = styled_components_1.default.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:  24.5vw;
    position: relative;
`;
exports.LoginInputWrapper = (0, styled_components_1.default)(exports.InputWrapper) `
position: relative;

`;
//# sourceMappingURL=InputWrapper.styles.js.map