"use strict";
//description: this component is responsible for displaying the buttons that allow the user to select the day of the week
//it's takes the day's state from the TasksContext and changes it when the user clicks on a button
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
exports.SelectWeekButtons = void 0;
//hooks
const react_1 = require("react");
//styles
const styles_1 = require("./styles");
//context
const taskContext_1 = require("../../../../../../../../../contexts/taskContext");
const React = __importStar(require("react"));
const SelectWeekButtons = () => {
    const { actualDay, setDay } = (0, react_1.useContext)(taskContext_1.TasksContext);
    return (React.createElement(styles_1.TasksButtonsContainer, null,
        React.createElement(styles_1.TasksButton, { id: "monday", actualDay: actualDay, onClick: () => setDay("monday") },
            React.createElement("span", null, "Monday")),
        React.createElement(styles_1.TasksButton, { id: "tuesday", actualDay: actualDay, onClick: () => setDay("tuesday") },
            React.createElement("span", null, "Tuesday")),
        React.createElement(styles_1.TasksButton, { id: "wednesday", actualDay: actualDay, onClick: () => setDay("wednesday") },
            React.createElement("span", null, "Wednesday")),
        React.createElement(styles_1.TasksButton, { id: "thursday", actualDay: actualDay, onClick: () => setDay("thursday") },
            React.createElement("span", null, "Thursday")),
        React.createElement(styles_1.TasksButton, { id: "friday", actualDay: actualDay, onClick: () => setDay("friday") },
            React.createElement("span", null, "Friday")),
        React.createElement(styles_1.TasksButton, { id: "saturday", actualDay: actualDay, onClick: () => setDay("saturday") },
            React.createElement("span", null, "Saturday")),
        React.createElement(styles_1.TasksButton, { id: "sunday", actualDay: actualDay, onClick: () => setDay("sunday") },
            React.createElement("span", null, "Sunday"))));
};
exports.SelectWeekButtons = SelectWeekButtons;
//# sourceMappingURL=SelectWeekButtons.js.map