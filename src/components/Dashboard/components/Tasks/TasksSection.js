import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Description: This component is the main component for the tasks section.
//It is responsible for rendering the tasks container and the actions section.
//components
import { ActionsSection } from "./components/Actions/ActionsSection";
import { TasksDisplayer } from "../../tasks/display-tasks/TasksDisplayer";
//styles
//context
import { TasksProvider } from "../../../../contexts/tasksContext";
import { TasksContainer } from './styles';
export const TasksSection = () => {
    return (_jsx(TasksProvider, { children: _jsxs(TasksContainer, { children: [_jsx(ActionsSection, {}), _jsx(TasksDisplayer, {})] }) }));
};
