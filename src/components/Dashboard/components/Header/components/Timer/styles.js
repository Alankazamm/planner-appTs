System.register(["styled-components"], function (exports_1, context_1) {
    "use strict";
    var styled_components_1, TimerContainer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styled_components_1_1) {
                styled_components_1 = styled_components_1_1;
            }
        ],
        execute: function () {
            exports_1("TimerContainer", TimerContainer = styled_components_1.default.div `


display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;


.hour{
    font-size: 40px;
    color: #3B3E45;
    font-weight: 700;
}
.date{
    font-size: 20px;
    color: #3B3E45;
}
@media (max-width: 920px) {
    .hour{
        font-size: 30px;
    }
    .date{
        font-size: 15px;
    }
}

`);
        }
    };
});
//# sourceMappingURL=styles.js.map