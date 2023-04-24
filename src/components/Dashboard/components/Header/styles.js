System.register(["styled-components"], function (exports_1, context_1) {
    "use strict";
    var styled_components_1, DashHeaderContainer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styled_components_1_1) {
                styled_components_1 = styled_components_1_1;
            }
        ],
        execute: function () {
            exports_1("DashHeaderContainer", DashHeaderContainer = styled_components_1.default.div ` 
background: #FFFFFF;
max-width: 100vw;
height: 130px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`);
        }
    };
});
//# sourceMappingURL=styles.js.map