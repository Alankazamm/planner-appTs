"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtectPlanner = void 0;
//description: this file is used to protect the planner page from unlogged users
//it redirects to login page if user is not logged in(there is no token in local storage)
//hooks
const react_router_dom_1 = require("react-router-dom");
//components
const Planner_1 = require("../pages/Planner");
const react_1 = __importDefault(require("react"));
const ProtectPlanner = () => {
    //navigate to login page if there is no token in local storage
    return (<>
            {localStorage.getItem('token') ? <Planner_1.Planner /> : <react_router_dom_1.Navigate to="/login"/>}
        </>);
};
exports.ProtectPlanner = ProtectPlanner;
