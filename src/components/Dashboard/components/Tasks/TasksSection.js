// Description: This component is the main component for the tasks section.
//It is responsible for rendering the tasks container and the actions section.
import * as React from "react";
//components
import { ActionsSection } from "./components/Actions/ActionsSection";
import { TasksDisplayer } from "./components/Displayer";
//styles
//context
import { TasksProvider } from "../../../../contexts/taskContext";
import { TasksContainer } from './styles';
export const TasksSection = () => {
    return (React.createElement(TasksProvider, null,
        React.createElement(TasksContainer, null,
            React.createElement(ActionsSection, null),
            React.createElement(TasksDisplayer, null))));
};
