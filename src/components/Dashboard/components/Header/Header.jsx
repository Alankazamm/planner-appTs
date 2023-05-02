"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardHeader = void 0;
//description: This is the header component for the dashboard page
//it contains the header text, timer, weather and the logout button
//test
//components
const Timer_1 = require("./components/Timer");
const Weather_1 = require("./components/Weather");
const Logout_1 = require("./components/Logout");
const styles_1 = require("./styles");
const Header_1 = require("./../../../common/header/Header");
const react_1 = __importDefault(require("react"));
//styles
const DashboardHeader = () => {
    return (<styles_1.DashHeaderContainer>
			<Header_1.HeaderText page="dashboard" title="Weekly Planner" description="Use this planner to organize your daily issues"/>
            <Timer_1.Timer />
            <Weather_1.Weather />
            <Logout_1.Logout />
		</styles_1.DashHeaderContainer>);
};
exports.DashboardHeader = DashboardHeader;
