System.register(["styled-components", "/src/assets/images/bgImg.png"], function (exports_1, context_1) {
    "use strict";
    var styled_components_1, bgImg_png_1, BgWrapper;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styled_components_1_1) {
                styled_components_1 = styled_components_1_1;
            },
            function (bgImg_png_1_1) {
                bgImg_png_1 = bgImg_png_1_1;
            }
        ],
        execute: function () {
            exports_1("BgWrapper", BgWrapper = styled_components_1.default.div `
    width: 50%;
    height: 100vh;
    background-image: url(${bgImg_png_1.default}) ;
    background-repeat: no-repeat;
    background-size: cover;
    img{
        position: absolute;
        top: 36px;
        left: 61vw;
        max-width: 26vw;
        cursor: pointer;
    }
`);
        }
    };
});
//# sourceMappingURL=styles.js.map