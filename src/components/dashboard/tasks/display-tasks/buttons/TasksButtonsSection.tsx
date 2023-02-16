//description: this component is responsible for displaying the buttons that allow the user to select the day of the week
//it's takes the day's state from the TasksContext and changes it when the user clicks on a button

//hooks
import { useContext } from 'react';

//styles
import { TasksButton } from './TasksButton.styles'
import { TasksButtonsContainer } from './TasksButtonsContainer.styles'

//context


//types
import { createContextType } from '../../../../../contexts/tasksContext';
import { TasksContext } from '../../../../../contexts/tasksContext';

export const TasksButtonsSection = () => {
    const { actualDay, setDay }:createContextType = useContext(TasksContext);
  return (
    <TasksButtonsContainer>
            <TasksButton id="Monday" actualDay={actualDay} onClick={e => setDay("Monday")}><span>Monday</span></TasksButton>
            <TasksButton id="Tuesday" actualDay={actualDay} onClick={e =>setDay("Tuesday")}><span>Tuesday</span></TasksButton>
            <TasksButton id="Wednesday" actualDay={actualDay} onClick={e =>setDay("Wednesday")}><span>Wednesday</span></TasksButton>
            <TasksButton id="Thursday" actualDay={actualDay} onClick={e =>setDay("Thursday")}><span>Thursday</span></TasksButton>
            <TasksButton id="Friday" actualDay={actualDay} onClick={e =>setDay("Friday")}><span>Friday</span></TasksButton>
            <TasksButton id="Saturday" actualDay={actualDay} onClick={e =>setDay("Saturday")}><span>Saturday</span></TasksButton>
            <TasksButton id="Sunday" actualDay={actualDay} onClick={e => setDay("Sunday")}><span>Sunday</span></TasksButton>
    </TasksButtonsContainer>
  )
}
