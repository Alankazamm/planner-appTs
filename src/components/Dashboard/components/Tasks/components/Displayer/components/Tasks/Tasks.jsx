//description: this component is responsible for displaying all tasks for a given day
//it is rendered by the TasksSection component
//hooks
import { useContext, useEffect } from "react";
//styles
import { TasksWrapper, TaskBorder, TasksTimeCard } from "./styles";
//context
import spinner from "/src/assets/svg/spinner-uol.svg";
import { Backdrop } from "../../../../../../../../styles";
import { useState } from 'react';
import { TaskWarnigModal } from "../../../../../../../common/Modals/components/TaskWarnigModal";
import { deleteEvents } from "../../../../../../../../api/services/deleteEvents";
import { getEvents } from "../../../../../../../../api/services/getEvents";
import { TasksContext } from "../../../../../../../../contexts/taskContext";
import { ConfirmDeleteModal } from "../../../../../../../common/Modals/components/ConfirmDeleteModal";
import { TasksErrorModal } from "../../../../../../../common/Modals/components/TasksErrorModal";
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
    return (<TasksWrapper>
			{confirmDelete.show && <ConfirmDeleteModal actionFunction={taskDeleteHandler} value={confirmDelete} showModal={setConfirmDelete}/>}
			{displayErrorModal && <TasksErrorModal displayErrorModal={displayErrorModal} setDisplayErrorModal={setDisplayErrorModal}/>}
			{showModal && <TaskWarnigModal toggleModal={setShowModal}/>}
            <div className="cardsList">
            <div className="timeCard">
				<p>Time</p>
				</div>
				{fetchingLoading && <Backdrop><img alt="loading" src={spinner}></img></Backdrop>}
				{taskHours.map((hour, index) => (<div className="tasksSameHour" id={Math.random().toString()} key={"tasksSameHour" + index}>
						<TasksTimeCard id={"card" + index} actualDay={sameDayTasks.filter((task) => task.taskHour === hour).length > 1 ? 'conflict' : actualDay} key={"timeCard" + index}>
							{hour}
						</TasksTimeCard>
						<div className="tasksList" id={"taskList" + index}>
							{sameDayTasks
                .filter((task) => task.taskHour === hour)
                .map((task) => {
                return (<div className="taskCard" id={"card" + task.taskId}>
											<TaskBorder actualDay={sameDayTasks.filter((task) => task.taskHour === hour).length > 1 ? 'conflict' : actualDay} id={"border" + index}></TaskBorder>
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
		</TasksWrapper>);
};