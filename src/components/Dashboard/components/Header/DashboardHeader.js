"use strict";
//description: This is the header component for the dashboard page
//it contains the header text, timer, weather and the logout button
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
exports.DashboardHeader = void 0;
//components
const Timer_1 = require("./components/Timer");
const Weather_1 = require("./components/Weather");
const Logout_1 = require("./components/Logout");
//styles
const styles_1 = require("./styles");
const Header_1 = require("../../../common/Header");
const React = __importStar(require("react"));
const DashboardHeader = () => {
    return (React.createElement(styles_1.DashHeaderContainer, null,
        React.createElement(Header_1.HeaderText, { page: "dashboard", title: "Weekly Planner", description: "Use this planner to organize your daily issues" }),
        React.createElement(Timer_1.Timer, null),
        React.createElement(Weather_1.Weather, null),
        React.createElement(Logout_1.Logout, null)));
};
exports.DashboardHeader = DashboardHeader;
//# sourceMappingURL=DashboardHeader.js.map