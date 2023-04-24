System.register(["styled-components"], function (exports_1, context_1) {
    "use strict";
    var styled_components_1, GlobalStyle;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styled_components_1_1) {
                styled_components_1 = styled_components_1_1;
            }
        ],
        execute: function () {
            exports_1("GlobalStyle", GlobalStyle = styled_components_1.createGlobalStyle `
   
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
`);
        }
    };
});
//# sourceMappingURL=GlobalStyle.js.map