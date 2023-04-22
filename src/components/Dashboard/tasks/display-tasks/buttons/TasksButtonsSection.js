//description: this component is responsible for displaying the buttons that allow the user to select the day of the week
//it's takes the day's state from the TasksContext and changes it when the user clicks on a button
import React from "react";
//hooks
import { useContext } from 'react';
//styles
import { TasksButton } from './TasksButton.styles';
import { TasksButtonsContainer } from './TasksButtonsContainer.styles';
//context
import { TasksContext } from '../../../../../contexts/tasksContext';
export const TasksButtonsSection = () => {
    const { actualDay, setDay } = useContext(TasksContext);
    return (React.createElement(TasksButtonsContainer, null,
        React.createElement(TasksButton, { id: "monday", actualDay: actualDay, onClick: e => setDay("monday") },
            React.createElement("span", null, "Monday")),
        React.createElement(TasksButton, { id: "tuesday", actualDay: actualDay, onClick: e => setDay("tuesday") },
            React.createElement("span", null, "Tuesday")),
        React.createElement(TasksButton, { id: "wednesday", actualDay: actualDay, onClick: e => setDay("wednesday") },
            React.createElement("span", null, "Wednesday")),
        React.createElement(TasksButton, { id: "thursday", actualDay: actualDay, onClick: e => setDay("thursday") },
            React.createElement("span", null, "Thursday")),
        React.createElement(TasksButton, { id: "friday", actualDay: actualDay, onClick: e => setDay("friday") },
            React.createElement("span", null, "Friday")),
        React.createElement(TasksButton, { id: "saturday", actualDay: actualDay, onClick: e => setDay("saturday") },
            React.createElement("span", null, "Saturday")),
        React.createElement(TasksButton, { id: "sunday", actualDay: actualDay, onClick: e => setDay("sunday") },
            React.createElement("span", null, "Sunday"))));
};
