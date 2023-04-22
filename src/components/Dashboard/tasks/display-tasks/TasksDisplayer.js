//description: this component is responsible for displaying the tasks of the day selected
//it is rendered by the TasksSection component
import React from "react";
import { TasksButtonsSection } from "./buttons/TasksButtonsSection";
import { DisplayerContainer } from "./DisplayerContainer.styles";
import { Tasks } from "./tasks/Tasks";
export const TasksDisplayer = () => {
    return (React.createElement(DisplayerContainer, null,
        React.createElement(TasksButtonsSection, null),
        React.createElement(Tasks, null)));
};
