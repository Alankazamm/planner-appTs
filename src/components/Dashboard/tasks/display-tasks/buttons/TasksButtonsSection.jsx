"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksButtonsSection = void 0;
//description: this component is responsible for displaying the buttons that allow the user to select the day of the week
//it's takes the day's state from the TasksContext and changes it when the user clicks on a button
const react_1 = __importDefault(require("react"));
//hooks
const react_2 = require("react");
//styles
const TasksButton_styles_1 = require("./TasksButton.styles");
const TasksButtonsContainer_styles_1 = require("./TasksButtonsContainer.styles");
//context
const tasksContext_1 = require("../../../../../contexts/tasksContext");
const TasksButtonsSection = () => {
    const { actualDay, setDay } = (0, react_2.useContext)(tasksContext_1.TasksContext);
    return (<TasksButtonsContainer_styles_1.TasksButtonsContainer>
            <TasksButton_styles_1.TasksButton id="monday" actualDay={actualDay} onClick={e => setDay("monday")}><span>Monday</span></TasksButton_styles_1.TasksButton>
            <TasksButton_styles_1.TasksButton id="tuesday" actualDay={actualDay} onClick={e => setDay("tuesday")}><span>Tuesday</span></TasksButton_styles_1.TasksButton>
            <TasksButton_styles_1.TasksButton id="wednesday" actualDay={actualDay} onClick={e => setDay("wednesday")}><span>Wednesday</span></TasksButton_styles_1.TasksButton>
            <TasksButton_styles_1.TasksButton id="thursday" actualDay={actualDay} onClick={e => setDay("thursday")}><span>Thursday</span></TasksButton_styles_1.TasksButton>
            <TasksButton_styles_1.TasksButton id="friday" actualDay={actualDay} onClick={e => setDay("friday")}><span>Friday</span></TasksButton_styles_1.TasksButton>
            <TasksButton_styles_1.TasksButton id="saturday" actualDay={actualDay} onClick={e => setDay("saturday")}><span>Saturday</span></TasksButton_styles_1.TasksButton>
            <TasksButton_styles_1.TasksButton id="sunday" actualDay={actualDay} onClick={e => setDay("sunday")}><span>Sunday</span></TasksButton_styles_1.TasksButton>
    </TasksButtonsContainer_styles_1.TasksButtonsContainer>);
};
exports.TasksButtonsSection = TasksButtonsSection;
