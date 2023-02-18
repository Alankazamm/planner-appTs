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
enum eventStatus {
  "Access denied" = 401,
  "Event not found" = 404,
  "Internal server error" = 501,
  "Event created" = 201,
  "OK" = 200,
}
type createEvent = {
  status?: eventStatus,
  data?: events,
}

type getEvents = {
  status?: eventStatus,
  data?: {
    events: events[]
 }
}

export const ButtonsSection = () => {
  const [createEventResponse, setCreateEventResponse] = useState<createEvent>({});
  const [getEventsResponse, setGetEventsResponse] = useState<getEvents>({});
  const { task,setTask, allTasks, actualDay, updateTask }:createContextType = useContext(TasksContext);

  useEffect(() => {
    if (createEventResponse.hasOwnProperty('status')) {
      console.log(createEventResponse)
      if (createEventResponse.status === eventStatus["Event created"]) {
        console.log(createEventResponse.data)
      }
    }
  }, [createEventResponse])

  useEffect(() => {
    if (getEventsResponse.hasOwnProperty('status')) {
      console.log(getEventsResponse)
      if (getEventsResponse.status === eventStatus["OK"]) {
        console.log(getEventsResponse.data!.events)
        updateTask(getEventsResponse!.data!.events!.map((event) => {
          return {
            taskText: event.description,
            taskDay: event.dayOfWeek,
            taskHour: event.createdAt.substring(11, 16).replace(':', 'h').concat('m'),
            taskId: event._id
          }
        }));
      }
    }
  }, [getEventsResponse]);

    
    // updateTask([...allTasks, {...task, taskText: createEventResponse.data?.description!, taskDay: createEventResponse.data?.dayOfWeek!, taskHour: createEventResponse.data?.createdAt!, taskId: createEventResponse.data?._id!}
    // }


  function clickHandler() {
    if (task.taskText.length > 0 && task.taskHour.length > 6) {

      createEvents({ description: task!.taskText, dayOfWeek: task!.taskDay })(setCreateEventResponse)
     
      getEvents({})(setGetEventsResponse);

      
     
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

