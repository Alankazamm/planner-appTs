System.register(["styled-components"], function (exports_1, context_1) {
    "use strict";
    var styled_components_1, LogoutContainer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styled_components_1_1) {
                styled_components_1 = styled_components_1_1;
            }
        ],
        execute: function () {
            exports_1("LogoutContainer", LogoutContainer = styled_components_1.default.div `
order: 4;
display: flex;
flex-direction: column;
justify-content: flex-end;
margin-right: 12px;

&>img{
    margin-bottom: 12px;
    cursor: pointer;
}
div{
    
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    cursor: pointer;
   
}

div> img{
    margin-right: 12px;
}
span{
    font-size: 17px;
line-height: 20px;
}
`);
        }
    };
});
//# sourceMappingURL=styles.js.map