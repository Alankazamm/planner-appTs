//description: This is the header component for the dashboard page
//it contains the header text, timer, weather and the logout button
//components
import { Timer } from './components/Timer';
import { Weather } from './components/Weather';
import { Logout } from './components/Logout';
//styles
import { DashHeaderContainer } from './styles';
import { HeaderText } from '../../../common/Header';
import * as React from "react";
export const DashboardHeader = () => {
    return (React.createElement(DashHeaderContainer, null,
        React.createElement(HeaderText, { page: "dashboard", title: "Weekly Planner", description: "Use this planner to organize your daily issues" }),
        React.createElement(Timer, null),
        React.createElement(Weather, null),
        React.createElement(Logout, null)));
};
//# sourceMappingURL=DashboardHeader.js.map