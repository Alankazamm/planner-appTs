//description: this file contains the context for the tasks
//it also contains the functions to update the tasks and the day

//hooks
import { createContext, useState, useEffect } from 'react';
import { getEvents } from '../actions/events/getEvents';
import { getEventsType } from '../components/dashboard/tasks/actions/buttons/section/ButtonsSection';
import { eventStatus, useGetAllEvents } from '../custom-hooks/customGetEventsHook';

//types
export type arrayOfTasks = taskState[];
export type taskState = { taskText: string, taskDay: string, taskHour: string, taskId: string };
export type setTaskState = React.Dispatch<React.SetStateAction<taskState>>;
export type taskStateDestructured = { task: taskState, setTask: setTaskState };
export type createContextType = { task: taskState, setTask: setTaskState, allTasks: arrayOfTasks, setAllTasks: React.Dispatch<React.SetStateAction<arrayOfTasks>>, actualDay: string, setDay: React.Dispatch<React.SetStateAction<string>>, updateTask: (taskArray: arrayOfTasks) => void };
export const TasksContext = createContext({} as createContextType);

export const TasksProvider = ({ children }: { children: React.ReactNode }) => {
console.log("tasksContext");
    const [task, setTask] = useState({ taskText: '', taskDay: 'monday', taskHour: '', taskId: '1' });
    const [allTasks, setAllTasks] = useState<arrayOfTasks>([]);
    const [actualDay, setDay] = useState('monday');
    const [getEventsResponse, setGetEventsResponse] = useState<getEventsType>({});
    console.log(task , "task");
    console.log(allTasks ,"allTasks");

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
    
    useEffect(() => {
        getEvents({})(setGetEventsResponse);
    }, [actualDay]);
        
    const updateTask = (taskArray:arrayOfTasks) => {

        setAllTasks(taskArray);
        localStorage.setItem('tasks', JSON.stringify(taskArray));
        console.log(allTasks);
    }

    return (
        <TasksContext.Provider value={{ task, setTask, allTasks, setAllTasks, actualDay, setDay, updateTask }}>
            {children}
        </TasksContext.Provider>

    );


}