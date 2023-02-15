//description: this file contains the context for the tasks
//it also contains the functions to update the tasks and the day

//hooks
import { createContext, useState, useEffect } from 'react';
//types
type arrayOfTasks = Array<{ taskText: string, taskDay: string, taskHour: string, taskId: string }>[];
export type taskState = { taskText: string, taskDay: string, taskHour: string, taskId: string };
export type setTaskState = React.Dispatch<React.SetStateAction<taskState>>;
export type taskStateDestructured = { task: taskState, setTask: setTaskState };
export type createContextType = { task: taskState, setTask: setTaskState, allTasks: arrayOfTasks, setAllTasks: React.Dispatch<React.SetStateAction<arrayOfTasks>>, actualDay: string, setDay: React.Dispatch<React.SetStateAction<string>>, updateTask: (taskArray: arrayOfTasks) => void };
export const TasksContext = createContext({}  as createContextType );
export const TasksProvider = ({ children }: { children: React.ReactNode }) => {

    const [task, setTask] = useState({ taskText: '', taskDay: 'Monday', taskHour: '', taskId: '1' });
    const [allTasks, setAllTasks] = useState([] as arrayOfTasks );
    const [actualDay, setDay] = useState('Monday');


    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem('tasks')!);
        if (tasks) {
            setAllTasks(tasks);
        }
    }, []);

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