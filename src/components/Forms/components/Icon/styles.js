System.register(["styled-components"], function (exports_1, context_1) {
    "use strict";
    var styled_components_1, IconWrapper;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styled_components_1_1) {
                styled_components_1 = styled_components_1_1;
            }
        ],
        execute: function () {
            exports_1("IconWrapper", IconWrapper = styled_components_1.default.span `
  position: absolute;
  right: ${props => props.iconIsInside === true ? '6.5vw' : '3.4vw'};
  display: flex;
  align-items: center;
  transition: all 0.2s ease-out;
`);
        }
    };
});
//# sourceMappingURL=styles.js.map