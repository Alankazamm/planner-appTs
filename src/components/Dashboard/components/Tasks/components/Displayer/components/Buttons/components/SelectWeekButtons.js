//description: this component is responsible for displaying the buttons that allow the user to select the day of the week
//it's takes the day's state from the TasksContext and changes it when the user clicks on a button
//hooks
import { useContext } from 'react';
//styles
import { TasksButtonsContainer, TasksButton } from './styles';
//context
import { TasksContext } from '../../../../../../../../../contexts/taskContext';
import * as React from "react";
export const SelectWeekButtons = () => {
    const { actualDay, setDay } = useContext(TasksContext);
    return (React.createElement(TasksButtonsContainer, null,
        React.createElement(TasksButton, { id: "monday", actualDay: actualDay, onClick: () => setDay("monday") },
            React.createElement("span", null, "Monday")),
        React.createElement(TasksButton, { id: "tuesday", actualDay: actualDay, onClick: () => setDay("tuesday") },
            React.createElement("span", null, "Tuesday")),
        React.createElement(TasksButton, { id: "wednesday", actualDay: actualDay, onClick: () => setDay("wednesday") },
            React.createElement("span", null, "Wednesday")),
        React.createElement(TasksButton, { id: "thursday", actualDay: actualDay, onClick: () => setDay("thursday") },
            React.createElement("span", null, "Thursday")),
        React.createElement(TasksButton, { id: "friday", actualDay: actualDay, onClick: () => setDay("friday") },
            React.createElement("span", null, "Friday")),
        React.createElement(TasksButton, { id: "saturday", actualDay: actualDay, onClick: () => setDay("saturday") },
            React.createElement("span", null, "Saturday")),
        React.createElement(TasksButton, { id: "sunday", actualDay: actualDay, onClick: () => setDay("sunday") },
            React.createElement("span", null, "Sunday"))));
};
