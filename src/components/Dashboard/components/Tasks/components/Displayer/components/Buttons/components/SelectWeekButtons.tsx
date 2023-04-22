//description: this component is responsible for displaying the buttons that allow the user to select the day of the week
//it's takes the day's state from the TasksContext and changes it when the user clicks on a button

//hooks
import { useContext } from 'react';
//styles
import { TasksButtonsContainer, TasksButton } from './styles';
//context
import { createContextType, TasksContext } from '../../../../../../../../../contexts/tasksContext';

export const SelectWeekButtons = () => {
    const { actualDay, setDay }:createContextType = useContext(TasksContext);
  return (
    <TasksButtonsContainer>
            <TasksButton id="monday" actualDay={actualDay} onClick={() => setDay("monday")}><span>Monday</span></TasksButton>
            <TasksButton id="tuesday" actualDay={actualDay} onClick={() =>setDay("tuesday")}><span>Tuesday</span></TasksButton>
            <TasksButton id="wednesday" actualDay={actualDay} onClick={() =>setDay("wednesday")}><span>Wednesday</span></TasksButton>
            <TasksButton id="thursday" actualDay={actualDay} onClick={() =>setDay("thursday")}><span>Thursday</span></TasksButton>
            <TasksButton id="friday" actualDay={actualDay} onClick={() =>setDay("friday")}><span>Friday</span></TasksButton>
            <TasksButton id="saturday" actualDay={actualDay} onClick={() =>setDay("saturday")}><span>Saturday</span></TasksButton>
            <TasksButton id="sunday" actualDay={actualDay} onClick={() => setDay("sunday")}><span>Sunday</span></TasksButton>
    </TasksButtonsContainer>
  )
}
