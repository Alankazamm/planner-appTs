"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonsSection = void 0;
const react_1 = require("react");
const react_2 = __importDefault(require("react"));
//description: this section contains the buttons to add and delete tasks
//hooks
const react_3 = require("react");
//styles
const Spinner_styles_1 = __importDefault(require("../../../../../common/loading/Spinner.styles"));
//assets
const spinner_uol_svg_1 = __importDefault(require("/src/assets/svg/spinner-uol.svg"));
//components
const TasksErrorModal_1 = require("../../../../../common/modals/TasksErrorModal");
const ConfirmDeleteModal_1 = require("../../../../../common/confirmation/ConfirmDeleteModal");
//context
const tasksContext_1 = require("../../../../../../contexts/tasksContext");
//api functions
const getEvents_1 = require("../../../../../../api/services/getEvents");
const deleteEvents_1 = require("../../../../../../api/services/deleteEvents");
const postEvents_1 = require("../../../../../../api/services/postEvents");
const ActionsButton_1 = require("./../../../../components/Tasks/components/Actions/components/Buttons/ActionsButton");
const styles_1 = require("../../../../components/Tasks/components/Actions/styles");
const ButtonsSection = () => {
    const [createIsLoading, setCreateIsLoading] = (0, react_3.useState)(false);
    const [createEventResponse, setCreateEventResponse] = (0, react_3.useState)({});
    const [confirmDelete, setConfirmDelete] = (0, react_3.useState)({
        show: false,
        dayOfWeek: "",
    });
    const { task, actualDay, updateTask, getEventsResponse, setGetEventsResponse, displayErrorModal, setDisplayErrorModal, setFetchingLoading, setDeleteEventsResponse, deleteEventsResponse, } = (0, react_1.useContext)(tasksContext_1.TasksContext);
    //rerenders on createEventResponse change
    (0, react_3.useEffect)(() => {
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
    (0, react_3.useEffect)(() => {
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
    (0, react_3.useEffect)(() => {
        if (Array.isArray(getEventsResponse)) {
            updateTask(getEventsResponse.map((event) => {
                console.log((0, tasksContext_1.transformHour)(event.taskHour));
                return {
                    taskText: event.description,
                    taskDay: event.dayOfWeek,
                    taskHour: (0, tasksContext_1.transformHour)(event.taskHour),
                    taskId: event.id,
                };
            }));
        }
        else {
            setDisplayErrorModal(getEventsResponse);
        }
    }, [getEventsResponse]);
    //rerenders on getEventsResponse change because of delete or create
    (0, react_3.useEffect)(() => {
        if (Array.isArray(getEventsResponse)) {
            updateTask(getEventsResponse.map((event) => {
                console.log((0, tasksContext_1.transformHour)(event.taskHour));
                return {
                    taskText: event.description,
                    taskDay: event.dayOfWeek,
                    taskHour: (0, tasksContext_1.transformHour)(event.taskHour),
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
    const componentsOutput = createIsLoading ? (<Spinner_styles_1.default>
			{" "}
			<img alt="loading" src={spinner_uol_svg_1.default}></img>
		</Spinner_styles_1.default>) : (<>
			<ActionsButton_1.ActionsButton onClick={clickHandler} icon={"plusIcon"} text={"Add to calendar"}/>
			<ActionsButton_1.ActionsButton onClick={() => setConfirmDelete({ show: true, dayOfWeek: actualDay })} icon={"minusIcon"} text={"Delete All"}/>
		</>);
    return (<styles_1.ActionsContainerCommons>
			{confirmDelete.show && (<ConfirmDeleteModal_1.ConfirmDeleteModal actionFunction={deleteHandler} value={confirmDelete} showModal={setConfirmDelete}/>)}
			{displayErrorModal && (<TasksErrorModal_1.TasksErrorModal displayErrorModal={displayErrorModal} setDisplayErrorModal={setDisplayErrorModal}/>)}
			{componentsOutput}
		</styles_1.ActionsContainerCommons>);
};
exports.ButtonsSection = ButtonsSection;
