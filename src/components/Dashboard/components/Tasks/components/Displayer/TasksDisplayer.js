//description: this component is responsible for displaying the tasks of the day selected
//it is rendered by the TasksSection component
import * as React from "react";
import { SelectWeekButtons } from "./components/Buttons";
import { DisplayerContainer } from "./styles";
import { Tasks } from "./components/Tasks";
export const TasksDisplayer = () => {
    return (React.createElement(DisplayerContainer, null,
        React.createElement(SelectWeekButtons, null),
        React.createElement(Tasks, null)));
};
//# sourceMappingURL=TasksDisplayer.js.map