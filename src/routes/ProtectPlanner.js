//description: this file is used to protect the planner page from unlogged users
//it redirects to login page if user is not logged in(there is no token in local storage)
//hooks
import { Navigate } from 'react-router-dom';
//components
import { Planner } from "../pages/Planner";
import React from 'react';
export const ProtectPlanner = () => {
    //navigate to login page if there is no token in local storage
    return (React.createElement(React.Fragment, null, localStorage.getItem('token') ? React.createElement(Planner, null) : React.createElement(Navigate, { to: "/login" })));
};
