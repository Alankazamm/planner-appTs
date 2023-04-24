"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.LogoutContainer = styled_components_1.default.div `
order: 4;
display: flex;
flex-direction: column;
justify-content: flex-end;
margin-right: 12px;

&>img{
    margin-bottom: 12px;
    cursor: pointer;
}
div{
    
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    cursor: pointer;
   
}

div> img{
    margin-right: 12px;
}
span{
    font-size: 17px;
line-height: 20px;
}
`;
//# sourceMappingURL=styles.js.map