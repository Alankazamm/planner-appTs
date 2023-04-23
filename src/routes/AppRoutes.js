import { Routes, Route } from "react-router-dom";
import { LogIn } from "../pages/LogIn";
import { SignUp } from "../pages/SignUp";
import { ProtectPlanner } from "./ProtectPlanner";
import * as React from "react";
export const AppRoutes = () => {
    return (React.createElement(Routes, null,
        React.createElement(Route, { path: '/', element: React.createElement(SignUp, null) }),
        React.createElement(Route, { path: '/login', element: React.createElement(LogIn, null) }),
        React.createElement(Route, { path: '/signup', element: React.createElement(SignUp, null) }),
        React.createElement(Route, { path: '/planner', element: React.createElement(ProtectPlanner, null) }),
        React.createElement(Route, { path: '*', element: React.createElement("h1", null, "404") })));
};
//# sourceMappingURL=AppRoutes.js.map