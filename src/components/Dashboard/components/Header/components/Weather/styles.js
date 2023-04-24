System.register(["styled-components"], function (exports_1, context_1) {
    "use strict";
    var styled_components_1, WeatherContainer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styled_components_1_1) {
                styled_components_1 = styled_components_1_1;
            }
        ],
        execute: function () {
            exports_1("WeatherContainer", WeatherContainer = styled_components_1.default.div `
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    color: #222222;
    order: 3;
    img{
        width: 34px;
        height: 34px;
        
    }

    span{
        font-size: 14px;
    }
    div{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 137px;
        font-size: 48px;
        font-weight: 700;
    }

    
`);
        }
    };
});
//# sourceMappingURL=styles.js.map