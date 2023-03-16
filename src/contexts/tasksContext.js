import { jsx as _jsx } from "react/jsx-runtime";
//description: this file contains the context for the tasks
//it also contains the functions to update the tasks and the day
//hooks
import { createContext, useState, useEffect } from "react";
import { getEvents } from "../actions/events/getEvents";
export var eventStatus;
(function (eventStatus) {
    eventStatus[eventStatus["Access denied"] = 401] = "Access denied";
    eventStatus[eventStatus["Event not found"] = 404] = "Event not found";
    eventStatus[eventStatus["Internal server error"] = 501] = "Internal server error";
    eventStatus[eventStatus["Event created"] = 201] = "Event created";
    eventStatus[eventStatus["OK"] = 200] = "OK";
    eventStatus[eventStatus["Invalid data"] = 400] = "Invalid data";
})(eventStatus || (eventStatus = {}));
let firstRender = true;
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
    const [getEventsResponse, setGetEventsResponse] = useState({});
    const [deleteEventsResponse, setDeleteEventsResponse] = useState({});
    const [fetchingLoading, setFetchingLoading] = useState(false);
    const [displayErrorModal, setDisplayErrorModal] = useState();
    useEffect(() => {
        if (getEventsResponse.hasOwnProperty("status")) {
            if (getEventsResponse.status === eventStatus["OK"]) {
                updateTask(getEventsResponse.data.events.map((event) => {
                    return {
                        taskText: event.description,
                        taskDay: event.dayOfWeek,
                        taskHour: event.createdAt
                            .substring(11, 16)
                            .replace(":", "h")
                            .concat("m"),
                        taskId: event._id,
                    };
                }));
            }
            else {
                setDisplayErrorModal(getEventsResponse.status);
            }
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
        getEventsResponse.status
            ? updateErrorModal(getEventsResponse.status)
            : null;
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
