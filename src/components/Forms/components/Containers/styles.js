"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.FormContainer = styled_components_1.default.div `


  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-height: ${({ page }) => page === 'login' ? '63vh' : '83vh'};
  width: ${({ page }) => page === 'login' ? '19.7vw' : '24.5vw'};
  `;
/* 901px;685 */ 
//# sourceMappingURL=styles.js.map