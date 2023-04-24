"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.ContentContainer = styled_components_1.default.section `
    width: 50%;
    height: 100vh;
    background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    #wrapper{
        width: 24.6vw;
        height: 83.4vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 18px;

    }
`;
//# sourceMappingURL=ContentContainer.js.map