"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooltipError = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const tooltipFade = (0, styled_components_1.keyframes) `
 0% {display: none; opacity: 0;}
 
 100% { display: block; opacity: 1; }
`;
exports.TooltipError = styled_components_1.default.span `

    width: max-content;
    padding: 6px 10px;
    background-color: rgba(255,45,4,0.2);
    color: #fff;
    text-align: center;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    left:${props => props.page === 'login' ? '90%' : '105%'};
    top:${props => props.page === 'login' ? '20%' : ''};
    font-weight: 700;
    animation: ${tooltipFade} 0.8s;
    
    ::after {
      content: " ";
      position: absolute;
      top: 50%;
      right: 100%; /* To the left of the tooltip */
      margin-top: -11px;
      border-width: 11px;
      border-style: solid;
      border-color: transparent rgba(255,45,4,0.2) transparent transparent;
      animation: ${tooltipFade} 0.8s;
    }
   
`;
//# sourceMappingURL=TooltipError.js.map