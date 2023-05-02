// Description: This component is the main component for the tasks section.
//It is responsible for rendering the tasks container and the actions section.
import React from "react";
//components
import { ActionsSection } from "./components/Actions/ActionsSection";
import { TasksDisplayer } from "../../tasks/display-tasks/TasksDisplayer";
//styles
//context
import { TasksProvider } from "../../../../contexts/tasksContext";
import { TasksContainer } from './styles';
export const TasksSection = () => {
    return (React.createElement(TasksProvider, null,
        React.createElement(TasksContainer, null,
            React.createElement(ActionsSection, null),
            React.createElement(TasksDisplayer, null))));
};
