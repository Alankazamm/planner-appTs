// Description: This component is the container for the actions section of the planner.
//It contains the inputs and buttons sections.
System.register(["./components/Inputs", "react", "./styles", "./components/Buttons"], function (exports_1, context_1) {
    "use strict";
    var Inputs_1, React, styles_1, Buttons_1, ActionsSection;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Inputs_1_1) {
                Inputs_1 = Inputs_1_1;
            },
            function (React_1) {
                React = React_1;
            },
            function (styles_1_1) {
                styles_1 = styles_1_1;
            },
            function (Buttons_1_1) {
                Buttons_1 = Buttons_1_1;
            }
        ],
        execute: function () {
            exports_1("ActionsSection", ActionsSection = () => {
                return (React.createElement(styles_1.ActionsContainer, null,
                    React.createElement(Inputs_1.ActionsInputs, null),
                    React.createElement(Buttons_1.CreateTaskButtons, null)));
            });
        }
    };
});
//# sourceMappingURL=ActionsSection.js.map