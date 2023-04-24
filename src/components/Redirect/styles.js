System.register(["styled-components"], function (exports_1, context_1) {
    "use strict";
    var styled_components_1, RedirectWrapper;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styled_components_1_1) {
                styled_components_1 = styled_components_1_1;
            }
        ],
        execute: function () {
            exports_1("RedirectWrapper", RedirectWrapper = styled_components_1.default.div `
    color: #FFFFFF;
    margin-top: 10px;
    margin-left: 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    a{
        color: #FF2D04;
        font-weight: 700;
    }
`);
        }
    };
});
//# sourceMappingURL=styles.js.map