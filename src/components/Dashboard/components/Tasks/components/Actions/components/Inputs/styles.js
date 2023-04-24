"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionsInputsContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const styles_1 = require("../../styles");
exports.ActionsInputsContainer = (0, styled_components_1.default)(styles_1.ActionsContainerCommons) `
gap:3px;
    &*:placeholder{
        font-size: 14px;
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.7);
    }
    option, select{
        color: rgba(0, 0, 0, 0.7);
    }
    select, input{
        border: 1px solid #FECE00;
        border-radius: 10px;
    }
    select:focus-visible, input:focus-visible{
        outline:none;
    }
    .taskText{
        width: 374px;
        padding-left:15px;
        padding-right: 15px;
        height: 45px;
       
    }
    .taskWeekDay{
        width: 232px;
        padding-left: 8px;
        height: 45px;
       
    }
    .taskTime{
        width: 112px;
        padding-left: 8px;
        height: 45px;
       
    }
    
`;
//# sourceMappingURL=styles.js.map