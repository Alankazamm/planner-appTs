import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext } from "react";
//description: this section contains the buttons to add and delete tasks
//hooks
import { useState, useEffect } from "react";
//styles
import { ActionsContainerCommons } from "../../ActionsContainer.styles";
import Spinner from "../../../../../common/loading/Spinner.styles";
//assets
import spinner from "/src/assets/svg/spinner-uol.svg";
//components
import { ActionsButton } from "../ActionsButton";
import { TasksErrorModal } from "../../../../../common/error-handling/modals/TasksErrorModal";
import { ConfirmDeleteModal } from "../../../../../common/confirmation/ConfirmDeleteModal";
//context
import { TasksContext, eventStatus, } from "../../../../../../contexts/tasksContext";
//api functions
import { getEvents } from "./../../../../../../actions/events/getEvents";
import { deleteEvents } from "../../../../../../actions/delete-events/deleteEvents";
import { BaseUrl } from "../../../../../../helpers/axios";
import axios from "axios";
export const ButtonsSection = () => {
    const [createIsLoading, setCreateIsLoading] = useState(false);
    const [createEventResponse, setCreateEventResponse] = useState({});
    const [confirmDelete, setConfirmDelete] = useState({ show: false, dayOfWeek: "" });
    const { task, actualDay, updateTask, getEventsResponse, setGetEventsResponse, displayErrorModal, setDisplayErrorModal, setFetchingLoading, setDeleteEventsResponse, deleteEventsResponse } = useContext(TasksContext);
    //rerenders on createEventResponse change
    useEffect(() => {
        if (createEventResponse.hasOwnProperty("status")) {
            if (createEventResponse.status === eventStatus["Event created"]) {
                getEvents({ dayOfWeek: actualDay })({
                    setGetEventsResponse,
                    setFetchingLoading,
                    setDisplayErrorModal,
                });
            }
        }
    }, [createEventResponse]);
    //rerenders on deleteEventsResponse change
    useEffect(() => {
        if (deleteEventsResponse.hasOwnProperty("status")) {
            if (deleteEventsResponse.status === eventStatus["OK"]) {
                getEvents({ dayOfWeek: actualDay })({
                    setGetEventsResponse,
                    setFetchingLoading,
                    setDisplayErrorModal,
                });
            }
            else {
                setDisplayErrorModal(deleteEventsResponse.status);
            }
        }
    }, [deleteEventsResponse]);
    //rerenders on getEventsResponse change
    useEffect(() => {
        if (getEventsResponse.hasOwnProperty("status")) {
            if (getEventsResponse.status === eventStatus["OK"]) {
                updateTask(getEventsResponse.data.events.map((event) => {
                    return {
                        taskText: event.description,
                        taskDay: event.dayOfWeek,
                        taskHour: event.createdAt,
                        taskId: event._id,
                    };
                }));
            }
        }
    }, [getEventsResponse]);
    //rerenders on getEventsResponse change because of delete or create
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
    const axiosNewInstance = axios.create({
        baseURL: BaseUrl,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
    //request API to create events
    const createEvents = ({ description, dayOfWeek }) => {
        setCreateIsLoading(true);
        axiosNewInstance.post(`/events`, { description, dayOfWeek }).then((response) => {
            setCreateEventResponse(response);
            setCreateIsLoading(false);
        }).catch(error => {
            console.log(error);
            setCreateIsLoading(false);
            setDisplayErrorModal(error.response.data.status);
            setCreateEventResponse(error.response.data);
        });
    };
    //handles the click on the add button
    function clickHandler() {
        if (task.taskText.length > 0) {
            createEvents({ description: task.taskText, dayOfWeek: task.taskDay });
            getEvents({ dayOfWeek: actualDay })({
                setGetEventsResponse,
                setFetchingLoading,
                setDisplayErrorModal,
            });
        }
    }
    //handles the click on the delete button
    const deleteHandler = (dayOfWeek) => {
        deleteEvents({ dayOfWeek })({
            setDeleteEventsResponse,
            setFetchingLoading,
            setDisplayErrorModal,
            setCreateIsLoading,
        });
        getEvents({ dayOfWeek })({
            setGetEventsResponse,
            setFetchingLoading,
            setDisplayErrorModal,
        });
    };
    const componentsOutput = createIsLoading ? (_jsxs(Spinner, { children: [" ", _jsx("img", { src: spinner })] })) : (_jsxs(_Fragment, { children: [_jsx(ActionsButton, { onClick: clickHandler, icon: "plusIcon", text: "Add to calendar" }), _jsx(ActionsButton, { onClick: () => setConfirmDelete({ show: true, dayOfWeek: actualDay }), icon: "minusIcon", text: "Delete All" })] }));
    return (_jsxs(ActionsContainerCommons, { children: [confirmDelete.show && (_jsx(ConfirmDeleteModal, { actionFunction: deleteHandler, value: confirmDelete, showModal: setConfirmDelete })), displayErrorModal && (_jsx(TasksErrorModal, { displayErrorModal: displayErrorModal, setDisplayErrorModal: setDisplayErrorModal })), componentsOutput] }));
};
