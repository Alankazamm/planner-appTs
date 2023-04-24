//description: this file is used to protect the planner page from unlogged users
//it redirects to login page if user is not logged in(there is no token in local storage)
//hooks
import { Navigate } from 'react-router-dom';
import * as React from "react";
//components
import { Planner } from "../pages/Planner";
export const ProtectPlanner = () => {
    //navigate to login page if there is no token in local storage
    return (React.createElement(React.Fragment, null, localStorage.getItem('token') ? React.createElement(Planner, null) : React.createElement(Navigate, { to: "/login" })));
};
//# sourceMappingURL=ProtectPlanner.js.map