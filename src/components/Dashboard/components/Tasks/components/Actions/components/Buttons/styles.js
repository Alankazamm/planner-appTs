"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledActionButton = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledActionButton = styled_components_1.default.div `
    width: 200px;
    color: #FFFFFF;
    font-weight: 700;
    height:44px;
    display:flex;
    align-items:center;
    justify-content: center;
    gap: 4px;
    cursor: pointer;
    -webkit-user-select: none; 
    -ms-user-select: none; 
    user-select: none; 
    margin-left: 20px;
    font-size: 20px;
    .tasksButton{
        height: 100%;
        padding: 10px 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        border-radius: 10px;  
        width:100%;
        background-color: ${props => props.icon === 'plusIcon' ? '#00BA88' : '#FF3D1F'};
    }
    .tasksButton:active{
        background-color: ${props => props.icon === 'plusIcon' ? '#0C9671' : '#B62E19'};
    }
    img{
        padding-right: 5px;
        width: 24px;
        height: 24px;
    }
    span{
        font-size: 20px;
        display: inline-block;
        white-space: nowrap;
    }
`;
//# sourceMappingURL=styles.js.map