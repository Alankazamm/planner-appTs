import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//styles
import { DashContainer } from "../components/dashboard/DashContainer.styles";
//components
import DashboardHeader from "../components/dashboard/header/DashboardHeader";
import { TasksSection } from "../components/dashboard/tasks/TasksSection";
export const Planner = () => {
    return (_jsxs(DashContainer, { children: [_jsx(DashboardHeader, {}), _jsx(TasksSection, {})] }));
};
