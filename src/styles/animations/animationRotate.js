System.register(["styled-components"], function (exports_1, context_1) {
    "use strict";
    var styled_components_1, rotate;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styled_components_1_1) {
                styled_components_1 = styled_components_1_1;
            }
        ],
        execute: function () {
            exports_1("rotate", rotate = styled_components_1.keyframes `
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`);
        }
    };
});
//# sourceMappingURL=animationRotate.js.map