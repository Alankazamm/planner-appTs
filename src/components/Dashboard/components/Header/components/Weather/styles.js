"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.WeatherContainer = styled_components_1.default.div `
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    color: #222222;
    order: 3;
    img{
        width: 34px;
        height: 34px;
        
    }

    span{
        font-size: 14px;
    }
    div{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 137px;
        font-size: 48px;
        font-weight: 700;
    }

    
`;
//# sourceMappingURL=styles.js.map