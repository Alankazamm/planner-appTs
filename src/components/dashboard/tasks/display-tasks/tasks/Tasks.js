import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
//description: this component is responsible for displaying all tasks for a given day
//it is rendered by the TasksSection component
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
import { deleteEvents } from "../../../../../actions/delete-events/deleteEvents";
import { getEvents } from "../../../../../actions/events/getEvents";
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
    return (_jsxs(TasksWrapper, { children: [confirmDelete.show && _jsx(ConfirmDeleteModal, { actionFunction: taskDeleteHandler, value: confirmDelete, showModal: setConfirmDelete }), displayErrorModal && _jsx(TasksErrorModal, { displayErrorModal: displayErrorModal, setDisplayErrorModal: setDisplayErrorModal }), showModal && _jsx(TaskWarnigModal, { toggleModal: setShowModal }), _jsxs("div", { className: "cardsList", children: [_jsx("div", { className: "timeCard", children: _jsx("p", { children: "Time" }) }), fetchingLoading && _jsx(LoadingModal, { children: _jsx("img", { alt: "loading", src: spinner }) }), taskHours.map((hour, index) => (_jsxs("div", { className: "tasksSameHour", id: Math.random().toString(), children: [_jsx(TasksTimeCard, { id: "card" + index, actualDay: sameDayTasks.filter((task) => task.taskHour === hour).length > 1 ? 'conflict' : actualDay, children: hour }, "timeCard" + index), _jsxs("div", { className: "tasksList", id: "taskList" + index, children: [sameDayTasks
                                        .filter((task) => task.taskHour === hour)
                                        .map((task) => {
                                        return (_jsxs("div", { className: "taskCard", id: "card" + task.taskId, children: [_jsx(TaskBorder, { actualDay: sameDayTasks.filter((task) => task.taskHour === hour).length > 1 ? 'conflict' : actualDay, id: "border" + index }), _jsx("div", { className: "taskText", id: "text" + index, children: task.taskText }), _jsx("div", { className: "deleteButton", onClick: () => setConfirmDelete({ show: true, id: task.taskId }), id: task.taskId, children: "Delete" })] }));
                                    }), sameDayTasks.filter((task) => task.taskHour === hour).length > 1
                                        && _jsxs(_Fragment, { children: [_jsx("div", { className: "circle" }), _jsx("div", { className: "stroke" })] })] })] }, "tasksSameHour" + index)))] })] }));
};
