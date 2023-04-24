"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Input = styled_components_1.default.input.attrs((props) => ({
    type: props.type || 'text',
    name: props.name,
    value: props.value,
    onChange: props.onChange,
    placeholder: props.placeholder,
    hasError: props.hasError,
})) `
    width: 19vw;
    height: 5.5vh;
    padding-left: 25px;
    border: 1px solid ${props => props.hasError ? "#E9B425" : "#FFFFFF"};
    border-radius: 50px;
    color: #E0E0E0;
    background: #26292C;
    font-size: 16px;
    &:-webkit-autofill {
    -webkit-text-fill-color: #E0E0E0 !important;
    box-shadow: 0 0 0 30px  #26292C inset !important;
    }
    &:-webkit-autofill:hover {
        -webkit-text-fill-color: #E0E0E0 !important;
    box-shadow: 0 0 0 30px  #26292C inset !important;
    }
    &:-webkit-autofill:focus {
        -webkit-text-fill-color: #E0E0E0 !important;
    box-shadow: 0 0 0 30px  #26292C inset !important;
    }
    &:placeholder {
        font-size: 12px;
    }

`;
//# sourceMappingURL=Input.styles.js.map