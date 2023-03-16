import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Description: This component is the main component for the tasks section.
//It is responsible for rendering the tasks container and the actions section.
//components
import { ActionsSection } from "./actions/ActionsSection";
import { TasksDisplayer } from "./display-tasks/TasksDisplayer";
//styles
import { TasksContainer } from "./TasksContainer.styles";
//context
import { TasksProvider } from "../../../contexts/tasksContext";
export const TasksSection = () => {
    return (_jsx(TasksProvider, { children: _jsxs(TasksContainer, { children: [_jsx(ActionsSection, {}), _jsx(TasksDisplayer, {})] }) }));
};
