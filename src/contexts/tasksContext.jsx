"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksProvider = exports.TasksContext = exports.transformHour = void 0;
//description: this file contains the context for the tasks
//it also contains the functions to update the tasks and the day
const react_1 = __importDefault(require("react"));
//hooks
const react_2 = require("react");
const getEvents_1 = require("../api/services/getEvents");
// export type getEventsType = GetResponse;
let firstRender = true;
const transformHour = (hour) => {
    const newHour = hour.slice(0, -3);
    const hourArray = newHour.split(":");
    return `${hourArray[0]}h ${hourArray[1]}m`;
};
exports.transformHour = transformHour;
exports.TasksContext = (0, react_2.createContext)({});
const TasksProvider = ({ children }) => {
    const [task, setTask] = (0, react_2.useState)({
        taskText: "",
        taskDay: "monday",
        taskHour: "",
        taskId: "1",
    });
    const [allTasks, setAllTasks] = (0, react_2.useState)([]);
    const [actualDay, setDay] = (0, react_2.useState)("monday");
    const [getEventsResponse, setGetEventsResponse] = (0, react_2.useState)([]);
    const [deleteEventsResponse, setDeleteEventsResponse] = (0, react_2.useState)({});
    const [fetchingLoading, setFetchingLoading] = (0, react_2.useState)(false);
    const [displayErrorModal, setDisplayErrorModal] = (0, react_2.useState)();
    //trasform the hour to the format that the input type time needs, from 11:11:00 to 11h 11m and remove the last 3 characters
    (0, react_2.useEffect)(() => {
        if (Array.isArray(getEventsResponse)) {
            updateTask(getEventsResponse.map((event) => {
                console.log((0, exports.transformHour)(event.taskHour));
                return {
                    taskText: event.description,
                    taskDay: event.dayOfWeek,
                    taskHour: (0, exports.transformHour)(event.taskHour),
                    taskId: event.id,
                };
            }));
        }
        else {
            updateErrorModal(getEventsResponse);
        }
    }, [getEventsResponse]);
    (0, react_2.useEffect)(() => {
        if (firstRender) {
            firstRender = false;
            return;
        }
        (0, getEvents_1.getEvents)({ dayOfWeek: actualDay })({
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
    return (<exports.TasksContext.Provider value={{
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
        }}>
			{children}
		</exports.TasksContext.Provider>);
};
exports.TasksProvider = TasksProvider;
