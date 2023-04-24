System.register(["styled-components"], function (exports_1, context_1) {
    "use strict";
    var styled_components_1, InputWrapper, LoginInputWrapper;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styled_components_1_1) {
                styled_components_1 = styled_components_1_1;
            }
        ],
        execute: function () {
            exports_1("InputWrapper", InputWrapper = styled_components_1.default.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:  24.5vw;
    position: relative;
`);
            exports_1("LoginInputWrapper", LoginInputWrapper = styled_components_1.default(InputWrapper) `
position: relative;

`);
        }
    };
});
//# sourceMappingURL=InputWrapper.styles.js.map