System.register(["styled-components"], function (exports_1, context_1) {
    "use strict";
    var styled_components_1, TasksContainer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styled_components_1_1) {
                styled_components_1 = styled_components_1_1;
            }
        ],
        execute: function () {
            exports_1("TasksContainer", TasksContainer = styled_components_1.default.div `
    background-color:rgba(0, 0, 0, 0.01);
    max-width: 100%;
`);
        }
    };
});
//# sourceMappingURL=styles.js.map