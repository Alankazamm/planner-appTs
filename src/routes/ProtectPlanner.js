import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
//description: this file is used to protect the planner page from unlogged users
//it redirects to login page if user is not logged in(there is no token in local storage)
//hooks
import { Navigate } from 'react-router-dom';
//components
import { Planner } from "../pages/Planner";
export const ProtectPlanner = () => {
    //navigate to login page if there is no token in local storage
    return (_jsx(_Fragment, { children: localStorage.getItem('token') ? _jsx(Planner, {}) : _jsx(Navigate, { to: "/login" }) }));
};
