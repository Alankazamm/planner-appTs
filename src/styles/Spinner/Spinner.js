System.register(["styled-components", "../animations/animationRotate"], function (exports_1, context_1) {
    "use strict";
    var styled_components_1, animationRotate_1, Spinner;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styled_components_1_1) {
                styled_components_1 = styled_components_1_1;
            },
            function (animationRotate_1_1) {
                animationRotate_1 = animationRotate_1_1;
            }
        ],
        execute: function () {
            exports_1("Spinner", Spinner = styled_components_1.default.span `
  display: flex;
    justify-content: center;
    align-items: center;

    img{
        animation: ${animationRotate_1.rotate} 1s linear infinite;
        height: 40px;
        width: 40px;
        pointer-events: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
    }
`);
        }
    };
});
//# sourceMappingURL=Spinner.js.map