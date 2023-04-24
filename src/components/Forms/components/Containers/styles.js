System.register(["styled-components"], function (exports_1, context_1) {
    "use strict";
    var styled_components_1, FormContainer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styled_components_1_1) {
                styled_components_1 = styled_components_1_1;
            }
        ],
        execute: function () {
            exports_1("FormContainer", FormContainer = styled_components_1.default.div `


  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-height: ${({ page }) => page === 'login' ? '63vh' : '83vh'};
  width: ${({ page }) => page === 'login' ? '19.7vw' : '24.5vw'};
  `);
        }
    };
});
//# sourceMappingURL=styles.js.map