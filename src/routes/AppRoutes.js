import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import { LogIn } from "../pages/LogIn";
import { SignUp } from "../pages/SignUp";
import { ProtectPlanner } from "./ProtectPlanner";
export const AppRoutes = () => {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: '/', element: _jsx(SignUp, {}) }), _jsx(Route, { path: '/login', element: _jsx(LogIn, {}) }), _jsx(Route, { path: '/signup', element: _jsx(SignUp, {}) }), _jsx(Route, { path: '/planner', element: _jsx(ProtectPlanner, {}) }), _jsx(Route, { path: '*', element: _jsx("h1", { children: "404" }) })] }));
};
