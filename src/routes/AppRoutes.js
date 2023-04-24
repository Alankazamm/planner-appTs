"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const react_router_dom_1 = require("react-router-dom");
const LogIn_1 = require("../pages/LogIn");
const SignUp_1 = require("../pages/SignUp");
const ProtectPlanner_1 = require("./ProtectPlanner");
const React = __importStar(require("react"));
const AppRoutes = () => {
    return (React.createElement(react_router_dom_1.Routes, null,
        React.createElement(react_router_dom_1.Route, { path: '/', element: React.createElement(SignUp_1.SignUp, null) }),
        React.createElement(react_router_dom_1.Route, { path: '/login', element: React.createElement(LogIn_1.LogIn, null) }),
        React.createElement(react_router_dom_1.Route, { path: '/signup', element: React.createElement(SignUp_1.SignUp, null) }),
        React.createElement(react_router_dom_1.Route, { path: '/planner', element: React.createElement(ProtectPlanner_1.ProtectPlanner, null) }),
        React.createElement(react_router_dom_1.Route, { path: '*', element: React.createElement("h1", null, "404") })));
};
exports.AppRoutes = AppRoutes;
//# sourceMappingURL=AppRoutes.js.map