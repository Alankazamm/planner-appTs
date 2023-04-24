"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalStyle = void 0;
const styled_components_1 = require("styled-components");
exports.GlobalStyle = (0, styled_components_1.createGlobalStyle) `
   
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Mulish', sans-serif;
    };

    body{
        height: 100%;
        width: 100%;
    }

    :placeholder{
        font-family: 'Mulish', sans-serif;
    }
    button{
        cursor: pointer;
        //resset button style
        background: none;
        border: none;
        outline: none;
        
    }
`;
//# sourceMappingURL=GlobalStyle.js.map