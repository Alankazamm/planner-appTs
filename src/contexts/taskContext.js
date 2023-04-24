//description: this file contains the context for the tasks
//it also contains the functions to update the tasks and the day
System.register(["react", "../api/services/getEvents"], function (exports_1, context_1) {
    "use strict";
    var react_1, getEvents_1, React, firstRender, transformHour, TasksContext, TasksProvider;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (react_1_1) {
                react_1 = react_1_1;
                React = react_1_1;
            },
            function (getEvents_1_1) {
                getEvents_1 = getEvents_1_1;
            }
        ],
        execute: function () {
            // export type getEventsType = GetResponse;
            firstRender = true;
            exports_1("transformHour", transformHour = (hour) => {
                const newHour = hour.slice(0, -3);
                const hourArray = newHour.split(":");
                return `${hourArray[0]}h ${hourArray[1]}m`;
            });
            exports_1("TasksContext", TasksContext = react_1.createContext({}));
            exports_1("TasksProvider", TasksProvider = ({ children }) => {
                const [task, setTask] = react_1.useState({
                    taskText: "",
                    taskDay: "monday",
                    taskHour: "",
                    taskId: "1",
                });
                const [allTasks, setAllTasks] = react_1.useState([]);
                const [actualDay, setDay] = react_1.useState("monday");
                const [getEventsResponse, setGetEventsResponse] = react_1.useState([]);
                const [deleteEventsResponse, setDeleteEventsResponse] = react_1.useState({});
                const [fetchingLoading, setFetchingLoading] = react_1.useState(false);
                const [displayErrorModal, setDisplayErrorModal] = react_1.useState();
                //trasform the hour to the format that the input type time needs, from 11:11:00 to 11h 11m and remove the last 3 characters
                react_1.useEffect(() => {
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
                react_1.useEffect(() => {
                    if (firstRender) {
                        firstRender = false;
                        return;
                    }
                    getEvents_1.getEvents({ dayOfWeek: actualDay })({
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
                return (React.createElement(TasksContext.Provider, { value: {
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
            });
        }
    };
});
//# sourceMappingURL=taskContext.js.map