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
exports.TasksSection = void 0;
// Description: This component is the main component for the tasks section.
//It is responsible for rendering the tasks container and the actions section.
const React = __importStar(require("react"));
//components
const ActionsSection_1 = require("./components/Actions/ActionsSection");
const Displayer_1 = require("./components/Displayer");
//styles
//context
const taskContext_1 = require("../../../../contexts/taskContext");
const styles_1 = require("./styles");
const TasksSection = () => {
    return (React.createElement(taskContext_1.TasksProvider, null,
        React.createElement(styles_1.TasksContainer, null,
            React.createElement(ActionsSection_1.ActionsSection, null),
            React.createElement(Displayer_1.TasksDisplayer, null))));
};
exports.TasksSection = TasksSection;
//# sourceMappingURL=TasksSection.js.map