

//styles
import { ActionsInputsContainer } from './ActionsInputsContayner.styles';
import { inputsHandler } from './inputsHandler';
import { useContext } from 'react';
import { TasksContext, createContextType } from '../../../../../contexts/tasksContext';



const ActionsInputs = () => {
    
    const { task }:createContextType  = useContext(TasksContext)

    return (
        <ActionsInputsContainer>
            <input type="text" name="taskText" className="taskText"
                placeholder="Task or issue" onChange={inputsHandler}
                value={task.taskText} autoComplete="off"></input>

            <select name="taskDay"
                className="taskWeekDay"
                onChange={inputsHandler}
                value={task.taskDay}>
                <option className="taskWeekDayOpt" value="Monday">Monday</option>
                <option className="taskWeekDayOpt" value="Tuesday">Tuesday</option>
                <option className="taskWeekDayOpt" value="Wednesday">Wednesday</option>
                <option className="taskWeekDayOpt" value="Thursday">Thursday</option>
                <option className="taskWeekDayOpt" value="Friday">Friday</option>
                <option className="taskWeekDayOpt" value="Saturday">Saturday</option>
                <option className="taskWeekDayOpt" value="Sunday">Sunday</option>
            </select>

            <input type="text"
                name="taskHour"
                className="taskTime"
                placeholder="00h 00m"
                onChange={inputsHandler}
                value={task.taskHour}
                autoComplete="off"></input>



        </ActionsInputsContainer>
    )
}

export default ActionsInputs
