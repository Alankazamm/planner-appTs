"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionsContainer = exports.ActionsContainerCommons = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.ActionsContainerCommons = styled_components_1.default.div `
    max-width: 100%;
    display: flex;
    justify-content: space-between;    
`;
exports.ActionsContainer = (0, styled_components_1.default)(exports.ActionsContainerCommons) `
    padding-top: 35px;
    padding-left: 24px;
    padding-right: 23px;
`;
//# sourceMappingURL=styles.js.map