//description: this component is responsible for displaying all tasks for a given day
//it is rendered by the TasksSection component
System.register(["react", "./styles", "/src/assets/svg/spinner-uol.svg", "../../../../../../../../styles", "../../../../../../../common/Modals/components/TaskWarnigModal", "../../../../../../../../api/services/deleteEvents", "../../../../../../../../api/services/getEvents", "../../../../../../../../contexts/taskContext", "../../../../../../../common/Modals/components/ConfirmDeleteModal", "../../../../../../../common/Modals/components/TasksErrorModal"], function (exports_1, context_1) {
    "use strict";
    var react_1, styles_1, React, spinner_uol_svg_1, styles_2, react_2, TaskWarnigModal_1, deleteEvents_1, getEvents_1, taskContext_1, ConfirmDeleteModal_1, TasksErrorModal_1, Tasks;
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
            function (styles_2_1) {
                styles_2 = styles_2_1;
            },
            function (TaskWarnigModal_1_1) {
                TaskWarnigModal_1 = TaskWarnigModal_1_1;
            },
            function (deleteEvents_1_1) {
                deleteEvents_1 = deleteEvents_1_1;
            },
            function (getEvents_1_1) {
                getEvents_1 = getEvents_1_1;
            },
            function (taskContext_1_1) {
                taskContext_1 = taskContext_1_1;
            },
            function (ConfirmDeleteModal_1_1) {
                ConfirmDeleteModal_1 = ConfirmDeleteModal_1_1;
            },
            function (TasksErrorModal_1_1) {
                TasksErrorModal_1 = TasksErrorModal_1_1;
            }
        ],
        execute: function () {
            exports_1("Tasks", Tasks = () => {
                const { allTasks, actualDay, setDisplayErrorModal, fetchingLoading, setGetEventsResponse, setFetchingLoading, displayErrorModal, setDeleteEventsResponse } = react_1.useContext(taskContext_1.TasksContext);
                const [showModal, setShowModal] = react_2.useState(false);
                const [confirmDelete, setConfirmDelete] = react_2.useState({ show: false, id: '' });
                react_1.useEffect(() => {
                    if (allTasks.length > 14) {
                        setShowModal(true);
                    }
                }, [allTasks]);
                let sameDayTasks = allTasks.filter((task) => task.taskDay === actualDay);
                let taskHours = sameDayTasks.map((task) => task.taskHour);
                taskHours = taskHours.filter((hour, index) => taskHours.indexOf(hour) === index);
                taskHours = taskHours.sort((a, b) => a.localeCompare(b));
                const taskDeleteHandler = (value) => {
                    deleteEvents_1.deleteEvents({ id: value })({ setDeleteEventsResponse, setFetchingLoading, setDisplayErrorModal });
                    getEvents_1.getEvents({ dayOfWeek: actualDay })({ setGetEventsResponse, setFetchingLoading, setDisplayErrorModal });
                };
                //update page after delete
                react_1.useEffect(() => {
                    setFetchingLoading(true);
                    getEvents_1.getEvents({ dayOfWeek: actualDay })({ setGetEventsResponse, setFetchingLoading, setDisplayErrorModal });
                }, [confirmDelete]);
                return (React.createElement(styles_1.TasksWrapper, null,
                    confirmDelete.show && React.createElement(ConfirmDeleteModal_1.ConfirmDeleteModal, { actionFunction: taskDeleteHandler, value: confirmDelete, showModal: setConfirmDelete }),
                    displayErrorModal && React.createElement(TasksErrorModal_1.TasksErrorModal, { displayErrorModal: displayErrorModal, setDisplayErrorModal: setDisplayErrorModal }),
                    showModal && React.createElement(TaskWarnigModal_1.TaskWarnigModal, { toggleModal: setShowModal }),
                    React.createElement("div", { className: "cardsList" },
                        React.createElement("div", { className: "timeCard" },
                            React.createElement("p", null, "Time")),
                        fetchingLoading && React.createElement(styles_2.Backdrop, null,
                            React.createElement("img", { alt: "loading", src: spinner_uol_svg_1.default })),
                        taskHours.map((hour, index) => (React.createElement("div", { className: "tasksSameHour", id: Math.random().toString(), key: "tasksSameHour" + index },
                            React.createElement(styles_1.TasksTimeCard, { id: "card" + index, actualDay: sameDayTasks.filter((task) => task.taskHour === hour).length > 1 ? 'conflict' : actualDay, key: "timeCard" + index }, hour),
                            React.createElement("div", { className: "tasksList", id: "taskList" + index },
                                sameDayTasks
                                    .filter((task) => task.taskHour === hour)
                                    .map((task) => {
                                    return (React.createElement("div", { className: "taskCard", id: "card" + task.taskId },
                                        React.createElement(styles_1.TaskBorder, { actualDay: sameDayTasks.filter((task) => task.taskHour === hour).length > 1 ? 'conflict' : actualDay, id: "border" + index }),
                                        React.createElement("div", { className: "taskText", id: "text" + index }, task.taskText),
                                        React.createElement("div", { className: "deleteButton", onClick: () => setConfirmDelete({ show: true, id: task.taskId }), id: task.taskId }, "Delete")));
                                }),
                                sameDayTasks.filter((task) => task.taskHour === hour).length > 1
                                    && React.createElement(React.Fragment, null,
                                        React.createElement("div", { className: "circle" }),
                                        React.createElement("div", { className: "stroke" })))))))));
            });
        }
    };
});
//# sourceMappingURL=Tasks.js.map