System.register(["styled-components"], function (exports_1, context_1) {
    "use strict";
    var styled_components_1, tooltipFade, TooltipError;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styled_components_1_1) {
                styled_components_1 = styled_components_1_1;
            }
        ],
        execute: function () {
            tooltipFade = styled_components_1.keyframes `
 0% {display: none; opacity: 0;}
 
 100% { display: block; opacity: 1; }
`;
            exports_1("TooltipError", TooltipError = styled_components_1.default.span `

    width: max-content;
    padding: 6px 10px;
    background-color: rgba(255,45,4,0.2);
    color: #fff;
    text-align: center;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    left:${props => props.page === 'login' ? '90%' : '105%'};
    top:${props => props.page === 'login' ? '20%' : ''};
    font-weight: 700;
    animation: ${tooltipFade} 0.8s;
    
    ::after {
      content: " ";
      position: absolute;
      top: 50%;
      right: 100%; /* To the left of the tooltip */
      margin-top: -11px;
      border-width: 11px;
      border-style: solid;
      border-color: transparent rgba(255,45,4,0.2) transparent transparent;
      animation: ${tooltipFade} 0.8s;
    }
   
`);
        }
    };
});
//# sourceMappingURL=TooltipError.js.map