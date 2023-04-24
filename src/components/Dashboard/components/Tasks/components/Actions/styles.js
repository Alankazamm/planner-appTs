System.register(["styled-components"], function (exports_1, context_1) {
    "use strict";
    var styled_components_1, ActionsContainerCommons, ActionsContainer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styled_components_1_1) {
                styled_components_1 = styled_components_1_1;
            }
        ],
        execute: function () {
            exports_1("ActionsContainerCommons", ActionsContainerCommons = styled_components_1.default.div `
    max-width: 100%;
    display: flex;
    justify-content: space-between;    
`);
            exports_1("ActionsContainer", ActionsContainer = styled_components_1.default(ActionsContainerCommons) `
    padding-top: 35px;
    padding-left: 24px;
    padding-right: 23px;
`);
        }
    };
});
//# sourceMappingURL=styles.js.map