import {useContext} from 'react'
//description: this section contains the buttons to add and delete tasks
//styles
import { ActionsContainerCommons } from '../../ActionsContainer.styles';
//types
import { createContextType } from '../../../../../../contexts/TasksContext';
//components
import { ActionsButton } from '../ActionsButton';
//context
import { TasksContext } from '/src/contexts/tasksContext.tsx';



export const ButtonsSection = () => {

  const { task,setTask, allTasks, actualDay, updateTask }:createContextType = useContext(TasksContext);

  function clickHandler() {
    if (task.taskText.length > 0 && task.taskHour.length > 6) {
      setTask({ ...task, taskId: Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1) });
      updateTask([...allTasks, task]);
    }
  }
  const deleteHandler = () => {
    const newArray = allTasks.filter(tasks =>  tasks.taskDay !== actualDay);
    updateTask(newArray); 
  }

  return (
    <ActionsContainerCommons>
      <ActionsButton onClick={clickHandler} icon={"plusIcon"} text={"Add to calendar"} />
      <ActionsButton onClick={deleteHandler} icon={"minusIcon"} text={"Delete All"} />
    </ActionsContainerCommons>
  )
}

