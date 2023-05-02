"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const react_router_dom_1 = require("react-router-dom");
const LogIn_1 = require("../pages/LogIn");
const SignUp_1 = require("../pages/SignUp");
const ProtectPlanner_1 = require("./ProtectPlanner");
const react_1 = __importDefault(require("react"));
const AppRoutes = () => {
    return (<react_router_dom_1.Routes>
            <react_router_dom_1.Route path='/' element={<SignUp_1.SignUp />}/>
            <react_router_dom_1.Route path='/login' element={<LogIn_1.LogIn />}/>
            <react_router_dom_1.Route path='/signup' element={<SignUp_1.SignUp />}/>
            <react_router_dom_1.Route path='/planner' element={<ProtectPlanner_1.ProtectPlanner />}/>
         
            <react_router_dom_1.Route path='*' element={<h1>404</h1>}/>

        </react_router_dom_1.Routes>);
};
exports.AppRoutes = AppRoutes;
