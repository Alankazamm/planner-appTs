"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tasks = void 0;
//description: this component is responsible for displaying all tasks for a given day
//it is rendered by the TasksSection component
const react_1 = __importDefault(require("react"));
//hooks
const react_2 = require("react");
//styles
const TaskBorder_styles_1 = require("./styles/TaskBorder.styles");
const TasksTimeCard_styles_1 = require("./styles/TasksTimeCard.styles");
const TasksWrapper_styles_1 = __importDefault(require("./TasksWrapper.styles"));
//context
const spinner_uol_svg_1 = __importDefault(require("/src/assets/svg/spinner-uol.svg"));
const LoadingModal_1 = __importDefault(require("../../../../common/loading/LoadingModal"));
const react_3 = require("react");
const TaskWarnigModal_1 = require("../../../../common/modals/TaskWarnigModal");
const deleteEvents_1 = require("../../../../../api/services/deleteEvents");
const getEvents_1 = require("../../../../../api/services/getEvents");
const TasksErrorModal_1 = require("../../../../common/modals/TasksErrorModal");
const ConfirmDeleteModal_1 = require("../../../../common/confirmation/ConfirmDeleteModal");
const tasksContext_1 = require("../../../../../contexts/tasksContext");
const Tasks = () => {
    const { allTasks, actualDay, setDisplayErrorModal, fetchingLoading, setGetEventsResponse, setFetchingLoading, displayErrorModal, setDeleteEventsResponse } = (0, react_2.useContext)(tasksContext_1.TasksContext);
    const [showModal, setShowModal] = (0, react_3.useState)(false);
    const [confirmDelete, setConfirmDelete] = (0, react_3.useState)({ show: false, id: '' });
    (0, react_2.useEffect)(() => {
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
    (0, react_2.useEffect)(() => {
        setFetchingLoading(true);
        (0, getEvents_1.getEvents)({ dayOfWeek: actualDay })({ setGetEventsResponse, setFetchingLoading, setDisplayErrorModal });
    }, [confirmDelete]);
    return (<TasksWrapper_styles_1.default>
			{confirmDelete.show && <ConfirmDeleteModal_1.ConfirmDeleteModal actionFunction={taskDeleteHandler} value={confirmDelete} showModal={setConfirmDelete}/>}
			{displayErrorModal && <TasksErrorModal_1.TasksErrorModal displayErrorModal={displayErrorModal} setDisplayErrorModal={setDisplayErrorModal}/>}
			{showModal && <TaskWarnigModal_1.TaskWarnigModal toggleModal={setShowModal}/>}
            <div className="cardsList">
            <div className="timeCard">
				<p>Time</p>
				</div>
				{fetchingLoading && <LoadingModal_1.default><img alt="loading" src={spinner_uol_svg_1.default}></img></LoadingModal_1.default>}
				{taskHours.map((hour, index) => (<div className="tasksSameHour" id={Math.random().toString()} key={"tasksSameHour" + index}>
						<TasksTimeCard_styles_1.TasksTimeCard id={"card" + index} actualDay={sameDayTasks.filter((task) => task.taskHour === hour).length > 1 ? 'conflict' : actualDay} key={"timeCard" + index}>
							{hour}
						</TasksTimeCard_styles_1.TasksTimeCard>
						<div className="tasksList" id={"taskList" + index}>
							{sameDayTasks
                .filter((task) => task.taskHour === hour)
                .map((task) => {
                return (<div className="taskCard" id={"card" + task.taskId}>
											<TaskBorder_styles_1.TaskBorder actualDay={sameDayTasks.filter((task) => task.taskHour === hour).length > 1 ? 'conflict' : actualDay} id={"border" + index}></TaskBorder_styles_1.TaskBorder>
											<div className="taskText" id={"text" + index}>
												{task.taskText}
											</div>
											<div className="deleteButton" onClick={() => setConfirmDelete({ show: true, id: task.taskId })} id={task.taskId}>
												Delete
											</div>
										</div>);
            })}
                             {sameDayTasks.filter((task) => task.taskHour === hour).length > 1
                && <><div className="circle"></div><div className="stroke"></div></>}
                        </div>
                       
                    </div>))}
                
			</div>
		</TasksWrapper_styles_1.default>);
};
exports.Tasks = Tasks;
