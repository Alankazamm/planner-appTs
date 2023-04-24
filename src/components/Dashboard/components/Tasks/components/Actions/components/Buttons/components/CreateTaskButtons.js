"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskButtons = void 0;
const react_1 = require("react");
const React = __importStar(require("react"));
//description: this section contains the buttons to add and delete tasks
//hooks
const react_2 = require("react");
//styles
const styles_1 = require("../../../../../../../../../styles");
//assets
const spinner_uol_svg_1 = __importDefault(require("/src/assets/svg/spinner-uol.svg"));
//components
//context
const taskContext_1 = require("../../../../../../../../../contexts/taskContext");
//api functions
const getEvents_1 = require("../../../../../../../../../api/services/getEvents");
const deleteEvents_1 = require("../../../../../../../../../api/services/deleteEvents");
const ActionsButton_1 = require("./ActionsButton");
const styles_2 = require("../../../styles");
const ConfirmDeleteModal_1 = require("../../../../../../../../common/Modals/components/ConfirmDeleteModal");
const TasksErrorModal_1 = require("../../../../../../../../common/Modals/components/TasksErrorModal");
const postEvents_1 = require("./../../../../../../../../../api/services/postEvents");
const CreateTaskButtons = () => {
    const [createIsLoading, setCreateIsLoading] = (0, react_2.useState)(false);
    const [createEventResponse, setCreateEventResponse] = (0, react_2.useState)({});
    const [confirmDelete, setConfirmDelete] = (0, react_2.useState)({
        show: false,
        dayOfWeek: "",
    });
    const { task, actualDay, updateTask, getEventsResponse, setGetEventsResponse, displayErrorModal, setDisplayErrorModal, setFetchingLoading, setDeleteEventsResponse, deleteEventsResponse, } = (0, react_1.useContext)(taskContext_1.TasksContext);
    //rerenders on createEventResponse change
    (0, react_2.useEffect)(() => {
        (0, getEvents_1.getEvents)({ dayOfWeek: actualDay })({
            setGetEventsResponse,
            setFetchingLoading,
            setDisplayErrorModal,
        });
        if (!Array.isArray(getEventsResponse)) {
            setDisplayErrorModal(getEventsResponse);
        }
    }, [createEventResponse]);
    //rerenders on deleteEventsResponse change
    (0, react_2.useEffect)(() => {
        (0, getEvents_1.getEvents)({ dayOfWeek: actualDay })({
            setGetEventsResponse,
            setFetchingLoading,
            setDisplayErrorModal,
        });
        if (!Array.isArray(getEventsResponse)) {
            setDisplayErrorModal(getEventsResponse);
        }
    }, [deleteEventsResponse]);
    //rerenders on getEventsResponse change
    (0, react_2.useEffect)(() => {
        if (Array.isArray(getEventsResponse)) {
            updateTask(getEventsResponse.map((event) => {
                console.log((0, taskContext_1.transformHour)(event.taskHour));
                return {
                    taskText: event.description,
                    taskDay: event.dayOfWeek,
                    taskHour: (0, taskContext_1.transformHour)(event.taskHour),
                    taskId: event.id,
                };
            }));
        }
        else {
            setDisplayErrorModal(getEventsResponse);
        }
    }, [getEventsResponse]);
    //rerenders on getEventsResponse change because of delete or create
    (0, react_2.useEffect)(() => {
        if (Array.isArray(getEventsResponse)) {
            updateTask(getEventsResponse.map((event) => {
                console.log((0, taskContext_1.transformHour)(event.taskHour));
                return {
                    taskText: event.description,
                    taskDay: event.dayOfWeek,
                    taskHour: (0, taskContext_1.transformHour)(event.taskHour),
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
            (0, postEvents_1.createEvents)({
                description: task.taskText,
                dayOfWeek: task.taskDay,
                taskHour: hourWithoutSpaces,
            })({
                setCreateEventResponse,
                setCreateIsLoading,
                setDisplayErrorModal,
            });
            (0, getEvents_1.getEvents)({ dayOfWeek: actualDay })({
                setGetEventsResponse,
                setFetchingLoading,
                setDisplayErrorModal,
            });
        }
    }
    //handles the click on the delete button
    const deleteHandler = (dayOfWeek) => {
        (0, deleteEvents_1.deleteEvents)({ dayOfWeek })({
            setDeleteEventsResponse,
            setFetchingLoading,
            setDisplayErrorModal,
            setCreateIsLoading,
        });
        (0, getEvents_1.getEvents)({ dayOfWeek })({
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
};
exports.CreateTaskButtons = CreateTaskButtons;
//# sourceMappingURL=CreateTaskButtons.js.map