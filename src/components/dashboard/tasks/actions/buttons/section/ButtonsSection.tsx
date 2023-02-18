import {useContext} from 'react'
//description: this section contains the buttons to add and delete tasks
//styles
import { ActionsContainerCommons } from '../../ActionsContainer.styles';
//types
import { createContextType } from '../../../../../../contexts/TasksContext';
//components
import { ActionsButton } from '../ActionsButton';
//context

import { createEvents } from './../../../../../../actions/events/createEvent';
import { getEvents } from './../../../../../../actions/events/getEvents';
import { TasksContext } from '/src/contexts/tasksContext.tsx';
import { useState } from 'react';
import { useEffect } from 'react';

type events = {
  createdAt: string,
  dayOfWeek: string,
  description: string,
  updatedAt: string,
  _id: string
  userId: string
}
enum eventErrors {

}
type getEvents = {
  events?: {
  }
}

export const ButtonsSection = () => {
  const [createEventResponse, setCreateEventResponse] = useState();
  const [getEventsResponse, setGetEventsResponse] = useState<any>();
  const { task,setTask, allTasks, actualDay, updateTask }:createContextType = useContext(TasksContext);

  useEffect(() => {
    console.log(createEventResponse)
  }, [createEventResponse])

  useEffect(() => {
    // if(getEventsResponse!.hasOwnProperty('events')){
      console.log(getEventsResponse)
    // }
  }, [getEventsResponse])

  function clickHandler() {
    if (task.taskText.length > 0 && task.taskHour.length > 6) {

      createEvents({ description: task!.taskText, dayOfWeek: task!.taskDay })(setCreateEventResponse)
     
      getEvents({})(setGetEventsResponse);

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

