import { createContext, useState, useEffect } from 'react';
type arrayOfTasks = Array<{ taskText: string, taskDay: string, taskHour: string, taskId: string }>[];

export const TasksContext = createContext({});
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