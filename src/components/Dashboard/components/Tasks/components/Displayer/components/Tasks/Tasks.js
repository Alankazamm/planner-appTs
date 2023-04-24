"use strict";
//description: this component is responsible for displaying all tasks for a given day
//it is rendered by the TasksSection component
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
exports.Tasks = void 0;
//hooks
const react_1 = require("react");
//styles
const styles_1 = require("./styles");
const React = __importStar(require("react"));
//context
const spinner_uol_svg_1 = __importDefault(require("/src/assets/svg/spinner-uol.svg"));
const styles_2 = require("../../../../../../../../styles");
const react_2 = require("react");
const TaskWarnigModal_1 = require("../../../../../../../common/Modals/components/TaskWarnigModal");
const deleteEvents_1 = require("../../../../../../../../api/services/deleteEvents");
const getEvents_1 = require("../../../../../../../../api/services/getEvents");
const taskContext_1 = require("../../../../../../../../contexts/taskContext");
const ConfirmDeleteModal_1 = require("../../../../../../../common/Modals/components/ConfirmDeleteModal");
const TasksErrorModal_1 = require("../../../../../../../common/Modals/components/TasksErrorModal");
const Tasks = () => {
    const { allTasks, actualDay, setDisplayErrorModal, fetchingLoading, setGetEventsResponse, setFetchingLoading, displayErrorModal, setDeleteEventsResponse } = (0, react_1.useContext)(taskContext_1.TasksContext);
    const [showModal, setShowModal] = (0, react_2.useState)(false);
    const [confirmDelete, setConfirmDelete] = (0, react_2.useState)({ show: false, id: '' });
    (0, react_1.useEffect)(() => {
        if (allTasks.length > 14) {
            setShowModal(true);
        }
    }, [allTasks]);
    let sameDayTasks = allTasks.filter((task) => task.taskDay === actualDay);
    let taskHours = sameDayTasks.map((task) => task.taskHour);
    taskHours = taskHours.filter((hour, index) => taskHours.indexOf(hour) === index);
    taskHours = taskHours.sort((a, b) => a.localeCompare(b));
    const taskDeleteHandler = (value) => {
        (0, deleteEvents_1.deleteEvents)({ id: value })({ setDeleteEventsResponse, setFetchingLoading, setDisplayErrorModal });
        (0, getEvents_1.getEvents)({ dayOfWeek: actualDay })({ setGetEventsResponse, setFetchingLoading, setDisplayErrorModal });
    };
    //update page after delete
    (0, react_1.useEffect)(() => {
        setFetchingLoading(true);
        (0, getEvents_1.getEvents)({ dayOfWeek: actualDay })({ setGetEventsResponse, setFetchingLoading, setDisplayErrorModal });
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
};
exports.Tasks = Tasks;
//# sourceMappingURL=Tasks.js.map