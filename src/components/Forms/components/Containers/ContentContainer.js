System.register(["styled-components"], function (exports_1, context_1) {
    "use strict";
    var styled_components_1, ContentContainer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styled_components_1_1) {
                styled_components_1 = styled_components_1_1;
            }
        ],
        execute: function () {
            exports_1("ContentContainer", ContentContainer = styled_components_1.default.section `
    width: 50%;
    height: 100vh;
    background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    #wrapper{
        width: 24.6vw;
        height: 83.4vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 18px;

    }
`);
        }
    };
});
//# sourceMappingURL=ContentContainer.js.map