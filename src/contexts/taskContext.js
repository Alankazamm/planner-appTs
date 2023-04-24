"use strict";
//description: this file contains the context for the tasks
//it also contains the functions to update the tasks and the day
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksProvider = exports.TasksContext = exports.transformHour = void 0;
//hooks
const react_1 = require("react");
const getEvents_1 = require("../api/services/getEvents");
const React = __importStar(require("react"));
// export type getEventsType = GetResponse;
let firstRender = true;
const transformHour = (hour) => {
    const newHour = hour.slice(0, -3);
    const hourArray = newHour.split(":");
    return `${hourArray[0]}h ${hourArray[1]}m`;
};
exports.transformHour = transformHour;
exports.TasksContext = (0, react_1.createContext)({});
const TasksProvider = ({ children }) => {
    const [task, setTask] = (0, react_1.useState)({
        taskText: "",
        taskDay: "monday",
        taskHour: "",
        taskId: "1",
    });
    const [allTasks, setAllTasks] = (0, react_1.useState)([]);
    const [actualDay, setDay] = (0, react_1.useState)("monday");
    const [getEventsResponse, setGetEventsResponse] = (0, react_1.useState)([]);
    const [deleteEventsResponse, setDeleteEventsResponse] = (0, react_1.useState)({});
    const [fetchingLoading, setFetchingLoading] = (0, react_1.useState)(false);
    const [displayErrorModal, setDisplayErrorModal] = (0, react_1.useState)();
    //trasform the hour to the format that the input type time needs, from 11:11:00 to 11h 11m and remove the last 3 characters
    (0, react_1.useEffect)(() => {
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
    (0, react_1.useEffect)(() => {
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
    return (React.createElement(exports.TasksContext.Provider, { value: {
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
        } }, children));
};
exports.TasksProvider = TasksProvider;
//# sourceMappingURL=taskContext.js.map