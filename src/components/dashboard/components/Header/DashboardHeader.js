import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//description: This is the header component for the dashboard page
//it contains the header text, timer, weather and the logout button
//components
import { Timer } from './components/Timer';
import { Weather } from './components/Weather';
import { Logout } from './components/Logout';
//styles
import { HeaderText } from "../../../common/header/Header";
import { DashHeaderContainer } from "./styles";
export const DashboardHeader = () => {
    return (_jsxs(DashHeaderContainer, { children: [_jsx(HeaderText, { page: "dashboard", title: "Weekly Planner", description: "Use this planner to organize your daily issues" }), _jsx(Timer, {}), _jsx(Weather, {}), _jsx(Logout, {})] }));
};
