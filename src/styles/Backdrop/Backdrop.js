System.register(["styled-components", "../animations/animationRotate"], function (exports_1, context_1) {
    "use strict";
    var styled_components_1, animationRotate_1, Backdrop;
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
            exports_1("Backdrop", Backdrop = styled_components_1.default.div `
  position: absolute;
    top: 0;
    left: -110px;
    right: 10px;
    width: 200vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 110px 0 rgba(0, 0, 0, 0.1);
    z-index: 100;
    
    img{
        position: absolute;
        top: 25%;
        left: 25%;
        animation: ${animationRotate_1.rotate} 1s linear infinite;
        height: 140px;
        width: 140px;
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
//# sourceMappingURL=Backdrop.js.map