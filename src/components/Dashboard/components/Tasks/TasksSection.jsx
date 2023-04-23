"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksSection = void 0;
// Description: This component is the main component for the tasks section.
//It is responsible for rendering the tasks container and the actions section.
const react_1 = __importDefault(require("react"));
//components
const ActionsSection_1 = require("./components/Actions/ActionsSection");
const TasksDisplayer_1 = require("../../tasks/display-tasks/TasksDisplayer");
//styles
//context
const tasksContext_1 = require("../../../../contexts/tasksContext");
const styles_1 = require("./styles");
const TasksSection = () => {
    return (<tasksContext_1.TasksProvider>
          <styles_1.TasksContainer>
              <ActionsSection_1.ActionsSection />
              <TasksDisplayer_1.TasksDisplayer />
          </styles_1.TasksContainer>
    </tasksContext_1.TasksProvider>);
};
exports.TasksSection = TasksSection;
