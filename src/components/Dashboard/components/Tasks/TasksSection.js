System.register(["react", "./components/Actions/ActionsSection", "./components/Displayer", "../../../../contexts/taskContext", "./styles"], function (exports_1, context_1) {
    "use strict";
    var React, ActionsSection_1, Displayer_1, taskContext_1, styles_1, TasksSection;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (ActionsSection_1_1) {
                ActionsSection_1 = ActionsSection_1_1;
            },
            function (Displayer_1_1) {
                Displayer_1 = Displayer_1_1;
            },
            function (taskContext_1_1) {
                taskContext_1 = taskContext_1_1;
            },
            function (styles_1_1) {
                styles_1 = styles_1_1;
            }
        ],
        execute: function () {
            exports_1("TasksSection", TasksSection = () => {
                return (React.createElement(taskContext_1.TasksProvider, null,
                    React.createElement(styles_1.TasksContainer, null,
                        React.createElement(ActionsSection_1.ActionsSection, null),
                        React.createElement(Displayer_1.TasksDisplayer, null))));
            });
        }
    };
});
//# sourceMappingURL=TasksSection.js.map