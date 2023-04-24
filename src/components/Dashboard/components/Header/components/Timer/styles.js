"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimerContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.TimerContainer = styled_components_1.default.div `


display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;


.hour{
    font-size: 40px;
    color: #3B3E45;
    font-weight: 700;
}
.date{
    font-size: 20px;
    color: #3B3E45;
}
@media (max-width: 920px) {
    .hour{
        font-size: 30px;
    }
    .date{
        font-size: 15px;
    }
}

`;
//# sourceMappingURL=styles.js.map