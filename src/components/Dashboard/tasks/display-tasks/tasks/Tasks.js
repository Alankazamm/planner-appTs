//description: this component is responsible for displaying all tasks for a given day
//it is rendered by the TasksSection component
import React from "react";
//hooks
import { useContext, useEffect } from "react";
//styles
import { TaskBorder } from "./styles/TaskBorder.styles";
import { TasksTimeCard } from "./styles/TasksTimeCard.styles";
import TasksWrapper from "./TasksWrapper.styles";
//context
import spinner from "/src/assets/svg/spinner-uol.svg";
import LoadingModal from "../../../../common/loading/LoadingModal";
import { useState } from 'react';
import { TaskWarnigModal } from "../../../../common/modals/TaskWarnigModal";
import { deleteEvents } from "../../../../../api/services/deleteEvents";
import { getEvents } from "../../../../../api/services/getEvents";
import { TasksErrorModal } from "../../../../common/modals/TasksErrorModal";
import { ConfirmDeleteModal } from "../../../../common/confirmation/ConfirmDeleteModal";
import { TasksContext } from "../../../../../contexts/tasksContext";
export const Tasks = () => {
    const { allTasks, actualDay, setDisplayErrorModal, fetchingLoading, setGetEventsResponse, setFetchingLoading, displayErrorModal, setDeleteEventsResponse } = useContext(TasksContext);
    const [showModal, setShowModal] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState({ show: false, id: '' });
    useEffect(() => {
        if (allTasks.length > 14) {
            setShowModal(true);
        }
    }, [allTasks]);
    let sameDayTasks = allTasks.filter((task) => task.taskDay === actualDay);
    let taskHours = sameDayTasks.map((task) => task.taskHour);
    taskHours = taskHours.filter((hour, index) => taskHours.indexOf(hour) === index);
    taskHours = taskHours.sort((a, b) => a.localeCompare(b));
    const taskDeleteHandler = (value) => {
        deleteEvents({ id: value })({ setDeleteEventsResponse, setFetchingLoading, setDisplayErrorModal });
        getEvents({ dayOfWeek: actualDay })({ setGetEventsResponse, setFetchingLoading, setDisplayErrorModal });
    };
    //update page after delete
    useEffect(() => {
        setFetchingLoading(true);
        getEvents({ dayOfWeek: actualDay })({ setGetEventsResponse, setFetchingLoading, setDisplayErrorModal });
    }, [confirmDelete]);
    return (React.createElement(TasksWrapper, null,
        confirmDelete.show && React.createElement(ConfirmDeleteModal, { actionFunction: taskDeleteHandler, value: confirmDelete, showModal: setConfirmDelete }),
        displayErrorModal && React.createElement(TasksErrorModal, { displayErrorModal: displayErrorModal, setDisplayErrorModal: setDisplayErrorModal }),
        showModal && React.createElement(TaskWarnigModal, { toggleModal: setShowModal }),
        React.createElement("div", { className: "cardsList" },
            React.createElement("div", { className: "timeCard" },
                React.createElement("p", null, "Time")),
            fetchingLoading && React.createElement(LoadingModal, null,
                React.createElement("img", { alt: "loading", src: spinner })),
            taskHours.map((hour, index) => (React.createElement("div", { className: "tasksSameHour", id: Math.random().toString(), key: "tasksSameHour" + index },
                React.createElement(TasksTimeCard, { id: "card" + index, actualDay: sameDayTasks.filter((task) => task.taskHour === hour).length > 1 ? 'conflict' : actualDay, key: "timeCard" + index }, hour),
                React.createElement("div", { className: "tasksList", id: "taskList" + index },
                    sameDayTasks
                        .filter((task) => task.taskHour === hour)
                        .map((task) => {
                        return (React.createElement("div", { className: "taskCard", id: "card" + task.taskId },
                            React.createElement(TaskBorder, { actualDay: sameDayTasks.filter((task) => task.taskHour === hour).length > 1 ? 'conflict' : actualDay, id: "border" + index }),
                            React.createElement("div", { className: "taskText", id: "text" + index }, task.taskText),
                            React.createElement("div", { className: "deleteButton", onClick: () => setConfirmDelete({ show: true, id: task.taskId }), id: task.taskId }, "Delete")));
                    }),
                    sameDayTasks.filter((task) => task.taskHour === hour).length > 1
                        && React.createElement(React.Fragment, null,
                            React.createElement("div", { className: "circle" }),
                            React.createElement("div", { className: "stroke" })))))))));
};
