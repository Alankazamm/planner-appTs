import { jsx as _jsx } from "react/jsx-runtime";
//description: this file contains the context for the tasks
//it also contains the functions to update the tasks and the day
//hooks
import { createContext, useState, useEffect } from "react";
import { getEvents } from "../api/services/getEvents";
// export type getEventsType = GetResponse;
let firstRender = true;
export const transformHour = (hour) => {
    const newHour = hour.slice(0, -3);
    const hourArray = newHour.split(":");
    return `${hourArray[0]}h ${hourArray[1]}m`;
};
export const TasksContext = createContext({});
export const TasksProvider = ({ children }) => {
    const [task, setTask] = useState({
        taskText: "",
        taskDay: "monday",
        taskHour: "",
        taskId: "1",
    });
    const [allTasks, setAllTasks] = useState([]);
    const [actualDay, setDay] = useState("monday");
    const [getEventsResponse, setGetEventsResponse] = useState([]);
    const [deleteEventsResponse, setDeleteEventsResponse] = useState({});
    const [fetchingLoading, setFetchingLoading] = useState(false);
    const [displayErrorModal, setDisplayErrorModal] = useState();
    //trasform the hour to the format that the input type time needs, from 11:11:00 to 11h 11m and remove the last 3 characters
    useEffect(() => {
        if (Array.isArray(getEventsResponse)) {
            updateTask(getEventsResponse.map((event) => {
                console.log(transformHour(event.taskHour));
                return {
                    taskText: event.description,
                    taskDay: event.dayOfWeek,
                    taskHour: transformHour(event.taskHour),
                    taskId: event.id,
                };
            }));
        }
        else {
            updateErrorModal(getEventsResponse);
        }
    }, [getEventsResponse]);
    useEffect(() => {
        if (firstRender) {
            firstRender = false;
            return;
        }
        getEvents({ dayOfWeek: actualDay })({
            setGetEventsResponse,
            setFetchingLoading,
            setDisplayErrorModal,
        });
        //check if the response is an ErrorMessages enum
        !Array.isArray(getEventsResponse)
            ? updateErrorModal(getEventsResponse)
            : null;
        // ? updateErrorModal(getEventsResponse.status)
        // : null;
    }, [actualDay]);
    const updateTask = (taskArray) => {
        setAllTasks(taskArray);
    };
    const updateErrorModal = (status) => {
        setDisplayErrorModal(status);
    };
    return (_jsx(TasksContext.Provider, { value: {
            task,
            setTask,
            allTasks,
            setAllTasks,
            actualDay,
            setDay,
            updateTask,
            getEventsResponse,
            setGetEventsResponse,
            displayErrorModal,
            setDisplayErrorModal,
            fetchingLoading,
            setFetchingLoading,
            setDeleteEventsResponse,
            deleteEventsResponse,
        }, children: children }));
};
