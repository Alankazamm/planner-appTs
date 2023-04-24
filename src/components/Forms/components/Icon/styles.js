"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconWrapper = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.IconWrapper = styled_components_1.default.span `
  position: absolute;
  right: ${props => props.iconIsInside === true ? '6.5vw' : '3.4vw'};
  display: flex;
  align-items: center;
  transition: all 0.2s ease-out;
`;
//# sourceMappingURL=styles.js.map