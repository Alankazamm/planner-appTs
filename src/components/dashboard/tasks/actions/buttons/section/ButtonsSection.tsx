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
import { events, eventStatus, useGetAllEvents } from '../../../../../../custom-hooks/customGetEventsHook';


type createEvent = {
  status?: eventStatus,
  data?: events,
}



export const ButtonsSection = () => {
  //hooks
  const [createEventResponse, setCreateEventResponse] = useState<createEvent>({});
  const { task, allTasks, actualDay, updateTask }:createContextType = useContext(TasksContext);
  const getEventsState = useGetAllEvents();

  useEffect(() => {
    if (createEventResponse.hasOwnProperty('status')) {
      console.log(createEventResponse)
      if (createEventResponse.status === eventStatus["Event created"]) {
        console.log(createEventResponse.data)
      }
    }
  }, [createEventResponse])


  function clickHandler() {
    if (task.taskText.length > 0 && task.taskHour.length > 6) {

      createEvents({ description: task!.taskText, dayOfWeek: task!.taskDay })(setCreateEventResponse)
     
     

      updateTask(getEventsState);
     
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

