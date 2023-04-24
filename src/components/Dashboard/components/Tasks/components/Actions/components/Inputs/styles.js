System.register(["styled-components", "../../styles"], function (exports_1, context_1) {
    "use strict";
    var styled_components_1, styles_1, ActionsInputsContainer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styled_components_1_1) {
                styled_components_1 = styled_components_1_1;
            },
            function (styles_1_1) {
                styles_1 = styles_1_1;
            }
        ],
        execute: function () {
            exports_1("ActionsInputsContainer", ActionsInputsContainer = styled_components_1.default(styles_1.ActionsContainerCommons) `
gap:3px;
    &*:placeholder{
        font-size: 14px;
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.7);
    }
    option, select{
        color: rgba(0, 0, 0, 0.7);
    }
    select, input{
        border: 1px solid #FECE00;
        border-radius: 10px;
    }
    select:focus-visible, input:focus-visible{
        outline:none;
    }
    .taskText{
        width: 374px;
        padding-left:15px;
        padding-right: 15px;
        height: 45px;
       
    }
    .taskWeekDay{
        width: 232px;
        padding-left: 8px;
        height: 45px;
       
    }
    .taskTime{
        width: 112px;
        padding-left: 8px;
        height: 45px;
       
    }
    
`);
        }
    };
});
//# sourceMappingURL=styles.js.map