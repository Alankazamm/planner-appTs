import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//description: this component is responsible for displaying the tasks of the day selected
//it is rendered by the TasksSection component
import { TasksButtonsSection } from "./buttons/TasksButtonsSection";
import { DisplayerContainer } from "./DisplayerContainer.styles";
import { Tasks } from "./tasks/Tasks";
export const TasksDisplayer = () => {
    return (_jsxs(DisplayerContainer, { children: [_jsx(TasksButtonsSection, {}), _jsx(Tasks, {})] }));
};
