//description: This is the header component for the dashboard page
//it contains the header text, timer, weather and the logout button
//test
//components
import { Timer } from './components/Timer';
import { Weather } from './components/Weather';
import { Logout } from './components/Logout';
import { DashHeaderContainer } from './styles';
import { HeaderText } from './../../../common/header/Header';
import React from 'react';
//styles
export const DashboardHeader = () => {
    return (React.createElement(DashHeaderContainer, null,
        React.createElement(HeaderText, { page: "dashboard", title: "Weekly Planner", description: "Use this planner to organize your daily issues" }),
        React.createElement(Timer, null),
        React.createElement(Weather, null),
        React.createElement(Logout, null)));
};
