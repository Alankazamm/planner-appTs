//description: this component is responsible for displaying the buttons that allow the user to select the day of the week
//it's takes the day's state from the TasksContext and changes it when the user clicks on a button
System.register(["react", "./styles", "../../../../../../../../../contexts/taskContext"], function (exports_1, context_1) {
    "use strict";
    var react_1, styles_1, taskContext_1, React, SelectWeekButtons;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (react_1_1) {
                react_1 = react_1_1;
                React = react_1_1;
            },
            function (styles_1_1) {
                styles_1 = styles_1_1;
            },
            function (taskContext_1_1) {
                taskContext_1 = taskContext_1_1;
            }
        ],
        execute: function () {
            exports_1("SelectWeekButtons", SelectWeekButtons = () => {
                const { actualDay, setDay } = react_1.useContext(taskContext_1.TasksContext);
                return (React.createElement(styles_1.TasksButtonsContainer, null,
                    React.createElement(styles_1.TasksButton, { id: "monday", actualDay: actualDay, onClick: () => setDay("monday") },
                        React.createElement("span", null, "Monday")),
                    React.createElement(styles_1.TasksButton, { id: "tuesday", actualDay: actualDay, onClick: () => setDay("tuesday") },
                        React.createElement("span", null, "Tuesday")),
                    React.createElement(styles_1.TasksButton, { id: "wednesday", actualDay: actualDay, onClick: () => setDay("wednesday") },
                        React.createElement("span", null, "Wednesday")),
                    React.createElement(styles_1.TasksButton, { id: "thursday", actualDay: actualDay, onClick: () => setDay("thursday") },
                        React.createElement("span", null, "Thursday")),
                    React.createElement(styles_1.TasksButton, { id: "friday", actualDay: actualDay, onClick: () => setDay("friday") },
                        React.createElement("span", null, "Friday")),
                    React.createElement(styles_1.TasksButton, { id: "saturday", actualDay: actualDay, onClick: () => setDay("saturday") },
                        React.createElement("span", null, "Saturday")),
                    React.createElement(styles_1.TasksButton, { id: "sunday", actualDay: actualDay, onClick: () => setDay("sunday") },
                        React.createElement("span", null, "Sunday"))));
            });
        }
    };
});
//# sourceMappingURL=SelectWeekButtons.js.map