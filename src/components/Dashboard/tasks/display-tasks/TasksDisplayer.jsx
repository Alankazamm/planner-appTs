"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksDisplayer = void 0;
//description: this component is responsible for displaying the tasks of the day selected
//it is rendered by the TasksSection component
const react_1 = __importDefault(require("react"));
const TasksButtonsSection_1 = require("./buttons/TasksButtonsSection");
const DisplayerContainer_styles_1 = require("./DisplayerContainer.styles");
const Tasks_1 = require("./tasks/Tasks");
const TasksDisplayer = () => {
    return (<DisplayerContainer_styles_1.DisplayerContainer>
			<TasksButtonsSection_1.TasksButtonsSection />
			<Tasks_1.Tasks />
		</DisplayerContainer_styles_1.DisplayerContainer>);
};
exports.TasksDisplayer = TasksDisplayer;
