import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//description: this component is responsible for displaying the buttons that allow the user to select the day of the week
//it's takes the day's state from the TasksContext and changes it when the user clicks on a button
//hooks
import { useContext } from 'react';
//styles
import { TasksButton } from './TasksButton.styles';
import { TasksButtonsContainer } from './TasksButtonsContainer.styles';
//context
import { TasksContext } from '../../../../../contexts/tasksContext';
export const TasksButtonsSection = () => {
    const { actualDay, setDay } = useContext(TasksContext);
    return (_jsxs(TasksButtonsContainer, { children: [_jsx(TasksButton, { id: "monday", actualDay: actualDay, onClick: e => setDay("monday"), children: _jsx("span", { children: "Monday" }) }), _jsx(TasksButton, { id: "tuesday", actualDay: actualDay, onClick: e => setDay("tuesday"), children: _jsx("span", { children: "Tuesday" }) }), _jsx(TasksButton, { id: "wednesday", actualDay: actualDay, onClick: e => setDay("wednesday"), children: _jsx("span", { children: "Wednesday" }) }), _jsx(TasksButton, { id: "thursday", actualDay: actualDay, onClick: e => setDay("thursday"), children: _jsx("span", { children: "Thursday" }) }), _jsx(TasksButton, { id: "friday", actualDay: actualDay, onClick: e => setDay("friday"), children: _jsx("span", { children: "Friday" }) }), _jsx(TasksButton, { id: "saturday", actualDay: actualDay, onClick: e => setDay("saturday"), children: _jsx("span", { children: "Saturday" }) }), _jsx(TasksButton, { id: "sunday", actualDay: actualDay, onClick: e => setDay("sunday"), children: _jsx("span", { children: "Sunday" }) })] }));
};
