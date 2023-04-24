System.register(["react", "../../../../../../../../../styles", "/src/assets/svg/spinner-uol.svg", "../../../../../../../../../contexts/taskContext", "../../../../../../../../../api/services/getEvents", "../../../../../../../../../api/services/deleteEvents", "./ActionsButton", "../../../styles", "../../../../../../../../common/Modals/components/ConfirmDeleteModal", "../../../../../../../../common/Modals/components/TasksErrorModal", "./../../../../../../../../../api/services/postEvents"], function (exports_1, context_1) {
    "use strict";
    var react_1, React, react_2, styles_1, spinner_uol_svg_1, taskContext_1, getEvents_1, deleteEvents_1, ActionsButton_1, styles_2, ConfirmDeleteModal_1, TasksErrorModal_1, postEvents_1, CreateTaskButtons;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (react_1_1) {
                react_1 = react_1_1;
                React = react_1_1;
                react_2 = react_1_1;
            },
            function (styles_1_1) {
                styles_1 = styles_1_1;
            },
            function (spinner_uol_svg_1_1) {
                spinner_uol_svg_1 = spinner_uol_svg_1_1;
            },
            function (taskContext_1_1) {
                taskContext_1 = taskContext_1_1;
            },
            function (getEvents_1_1) {
                getEvents_1 = getEvents_1_1;
            },
            function (deleteEvents_1_1) {
                deleteEvents_1 = deleteEvents_1_1;
            },
            function (ActionsButton_1_1) {
                ActionsButton_1 = ActionsButton_1_1;
            },
            function (styles_2_1) {
                styles_2 = styles_2_1;
            },
            function (ConfirmDeleteModal_1_1) {
                ConfirmDeleteModal_1 = ConfirmDeleteModal_1_1;
            },
            function (TasksErrorModal_1_1) {
                TasksErrorModal_1 = TasksErrorModal_1_1;
            },
            function (postEvents_1_1) {
                postEvents_1 = postEvents_1_1;
            }
        ],
        execute: function () {
            exports_1("CreateTaskButtons", CreateTaskButtons = () => {
                const [createIsLoading, setCreateIsLoading] = react_2.useState(false);
                const [createEventResponse, setCreateEventResponse] = react_2.useState({});
                const [confirmDelete, setConfirmDelete] = react_2.useState({
                    show: false,
                    dayOfWeek: "",
                });
                const { task, actualDay, updateTask, getEventsResponse, setGetEventsResponse, displayErrorModal, setDisplayErrorModal, setFetchingLoading, setDeleteEventsResponse, deleteEventsResponse, } = react_1.useContext(taskContext_1.TasksContext);
                //rerenders on createEventResponse change
                react_2.useEffect(() => {
                    getEvents_1.getEvents({ dayOfWeek: actualDay })({
                        setGetEventsResponse,
                        setFetchingLoading,
                        setDisplayErrorModal,
                    });
                    if (!Array.isArray(getEventsResponse)) {
                        setDisplayErrorModal(getEventsResponse);
                    }
                }, [createEventResponse]);
                //rerenders on deleteEventsResponse change
                react_2.useEffect(() => {
                    getEvents_1.getEvents({ dayOfWeek: actualDay })({
                        setGetEventsResponse,
                        setFetchingLoading,
                        setDisplayErrorModal,
                    });
                    if (!Array.isArray(getEventsResponse)) {
                        setDisplayErrorModal(getEventsResponse);
                    }
                }, [deleteEventsResponse]);
                //rerenders on getEventsResponse change
                react_2.useEffect(() => {
                    if (Array.isArray(getEventsResponse)) {
                        updateTask(getEventsResponse.map((event) => {
                            console.log(taskContext_1.transformHour(event.taskHour));
                            return {
                                taskText: event.description,
                                taskDay: event.dayOfWeek,
                                taskHour: taskContext_1.transformHour(event.taskHour),
                                taskId: event.id,
                            };
                        }));
                    }
                    else {
                        setDisplayErrorModal(getEventsResponse);
                    }
                }, [getEventsResponse]);
                //rerenders on getEventsResponse change because of delete or create
                react_2.useEffect(() => {
                    if (Array.isArray(getEventsResponse)) {
                        updateTask(getEventsResponse.map((event) => {
                            console.log(taskContext_1.transformHour(event.taskHour));
                            return {
                                taskText: event.description,
                                taskDay: event.dayOfWeek,
                                taskHour: taskContext_1.transformHour(event.taskHour),
                                taskId: event.id,
                            };
                        }));
                    }
                    else {
                        setDisplayErrorModal(getEventsResponse);
                    }
                }, [getEventsResponse]);
                //handles the click on the add button
                function clickHandler() {
                    if (task.taskText.length > 0 &&
                        task.taskDay.length > 0 &&
                        task.taskHour.length > 0) {
                        //convert the hour from HHh MMm to HH:MM:00
                        const hour = task.taskHour.replace("h", ":").replace("m", ":00");
                        //remove the white spaces from the hour currentryl is getting 11: 11:00
                        const hourWithoutSpaces = hour.replace(/\s/g, "");
                        console.log(hourWithoutSpaces);
                        postEvents_1.createEvents({
                            description: task.taskText,
                            dayOfWeek: task.taskDay,
                            taskHour: hourWithoutSpaces,
                        })({
                            setCreateEventResponse,
                            setCreateIsLoading,
                            setDisplayErrorModal,
                        });
                        getEvents_1.getEvents({ dayOfWeek: actualDay })({
                            setGetEventsResponse,
                            setFetchingLoading,
                            setDisplayErrorModal,
                        });
                    }
                }
                //handles the click on the delete button
                const deleteHandler = (dayOfWeek) => {
                    deleteEvents_1.deleteEvents({ dayOfWeek })({
                        setDeleteEventsResponse,
                        setFetchingLoading,
                        setDisplayErrorModal,
                        setCreateIsLoading,
                    });
                    getEvents_1.getEvents({ dayOfWeek })({
                        setGetEventsResponse,
                        setFetchingLoading,
                        setDisplayErrorModal,
                    });
                };
                const componentsOutput = createIsLoading ? (React.createElement(styles_1.Spinner, null,
                    " ",
                    React.createElement("img", { alt: "loading", src: spinner_uol_svg_1.default }))) : (React.createElement(React.Fragment, null,
                    React.createElement(ActionsButton_1.ActionsButton, { onClick: clickHandler, icon: "plusIcon", text: "Add to calendar" }),
                    React.createElement(ActionsButton_1.ActionsButton, { onClick: () => setConfirmDelete({ show: true, dayOfWeek: actualDay }), icon: "minusIcon", text: "Delete All" })));
                return (React.createElement(styles_2.ActionsContainerCommons, null,
                    confirmDelete.show && (React.createElement(ConfirmDeleteModal_1.ConfirmDeleteModal, { actionFunction: deleteHandler, value: confirmDelete, showModal: setConfirmDelete })),
                    displayErrorModal && (React.createElement(TasksErrorModal_1.TasksErrorModal, { displayErrorModal: displayErrorModal, setDisplayErrorModal: setDisplayErrorModal })),
                    componentsOutput));
            });
        }
    };
});
//# sourceMappingURL=CreateTaskButtons.js.map