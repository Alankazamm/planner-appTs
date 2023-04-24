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
exports.TasksDisplayer = void 0;
//description: this component is responsible for displaying the tasks of the day selected
//it is rendered by the TasksSection component
const React = __importStar(require("react"));
const Buttons_1 = require("./components/Buttons");
const styles_1 = require("./styles");
const Tasks_1 = require("./components/Tasks");
const TasksDisplayer = () => {
    return (React.createElement(styles_1.DisplayerContainer, null,
        React.createElement(Buttons_1.SelectWeekButtons, null),
        React.createElement(Tasks_1.Tasks, null)));
};
exports.TasksDisplayer = TasksDisplayer;
//# sourceMappingURL=TasksDisplayer.js.map