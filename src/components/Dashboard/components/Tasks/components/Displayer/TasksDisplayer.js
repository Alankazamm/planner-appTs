System.register(["react", "./components/Buttons", "./styles", "./components/Tasks"], function (exports_1, context_1) {
    "use strict";
    var React, Buttons_1, styles_1, Tasks_1, TasksDisplayer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (Buttons_1_1) {
                Buttons_1 = Buttons_1_1;
            },
            function (styles_1_1) {
                styles_1 = styles_1_1;
            },
            function (Tasks_1_1) {
                Tasks_1 = Tasks_1_1;
            }
        ],
        execute: function () {
            exports_1("TasksDisplayer", TasksDisplayer = () => {
                return (React.createElement(styles_1.DisplayerContainer, null,
                    React.createElement(Buttons_1.SelectWeekButtons, null),
                    React.createElement(Tasks_1.Tasks, null)));
            });
        }
    };
});
//# sourceMappingURL=TasksDisplayer.js.map