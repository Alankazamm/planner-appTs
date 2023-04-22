//description: this component is responsible for displaying the buttons that allow the user to select the day of the week
//it's takes the day's state from the TasksContext and changes it when the user clicks on a button
import React from "react";

//hooks
import { useContext } from 'react';

//styles
import { TasksButton } from './TasksButton.styles'
import { TasksButtonsContainer } from './TasksButtonsContainer.styles'

//context
import { createContextType, TasksContext } from '../../../../../contexts/tasksContext';

export const TasksButtonsSection = () => {
    const { actualDay, setDay }:createContextType = useContext(TasksContext);
  return (
    <TasksButtonsContainer>
            <TasksButton id="monday" actualDay={actualDay} onClick={e => setDay("monday")}><span>Monday</span></TasksButton>
            <TasksButton id="tuesday" actualDay={actualDay} onClick={e =>setDay("tuesday")}><span>Tuesday</span></TasksButton>
            <TasksButton id="wednesday" actualDay={actualDay} onClick={e =>setDay("wednesday")}><span>Wednesday</span></TasksButton>
            <TasksButton id="thursday" actualDay={actualDay} onClick={e =>setDay("thursday")}><span>Thursday</span></TasksButton>
            <TasksButton id="friday" actualDay={actualDay} onClick={e =>setDay("friday")}><span>Friday</span></TasksButton>
            <TasksButton id="saturday" actualDay={actualDay} onClick={e =>setDay("saturday")}><span>Saturday</span></TasksButton>
            <TasksButton id="sunday" actualDay={actualDay} onClick={e => setDay("sunday")}><span>Sunday</span></TasksButton>
    </TasksButtonsContainer>
  )
}
