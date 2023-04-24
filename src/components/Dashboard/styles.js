System.register(["styled-components", "/src/assets/svg/globo.svg"], function (exports_1, context_1) {
    "use strict";
    var styled_components_1, globo_svg_1, DashBoardContainer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styled_components_1_1) {
                styled_components_1 = styled_components_1_1;
            },
            function (globo_svg_1_1) {
                globo_svg_1 = globo_svg_1_1;
            }
        ],
        execute: function () {
            exports_1("DashBoardContainer", DashBoardContainer = styled_components_1.default.div `
    position: relative;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 4px 4px 70px 0px #00000040;
    min-height: 100vh;
    max-width: 100vw;
    background-image: url(${globo_svg_1.default});
    background-repeat: no-repeat;
    background-position: right bottom;
    
`);
        }
    };
});
//# sourceMappingURL=styles.js.map