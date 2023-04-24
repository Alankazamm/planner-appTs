System.register(["styled-components"], function (exports_1, context_1) {
    "use strict";
    var styled_components_1, HeaderTextStyle;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styled_components_1_1) {
                styled_components_1 = styled_components_1_1;
            }
        ],
        execute: function () {
            exports_1("HeaderTextStyle", HeaderTextStyle = styled_components_1.default.div `
    color: #FFFFFF;
    width: ${(props) => props.page === "dashboard" ? "30.63vw" : "15.6vw"};
    height: ${(props) => props.page === "dashboard" ? "6vh" : "auto"};
    background: ${(props) => props.page === "dashboard" ? "#000000" : "unset"};
    border-radius: ${(props) => props.page === "dashboard" ? "0px 14px 15px 0px" : "unset"};
    padding-left: ${(props) => props.page === "dashboard" ? "24px" : "unset"};
    display: flex;
    flex-direction: column;
    justify-content: center;
  
    h1{
        font-size: ${(props) => props.page === "dashboard" ? "22px" : "60px"};
        font-weight: 400;
    }
    p{
        font-size: ${(props) => props.page === "dashboard" ? "20px" : "16px"};
        font-weight: 400;
    }

    @media (max-height: 920px) {
    h1{
        
        font-size: ${(props) => props.page === "dashboard" ? "22px" : "30px"};

    }
    p{
        font-size: ${(props) => props.page === "dashboard" ? "20px" : "12px"};
    }
        
}

`);
        }
    };
});
//# sourceMappingURL=styles.js.map