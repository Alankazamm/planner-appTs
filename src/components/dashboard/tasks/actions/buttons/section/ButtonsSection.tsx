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
import { TasksErrorModal } from "../../../../../common/modals/TasksErrorModal";
import { ConfirmDeleteModal } from "../../../../../common/confirmation/ConfirmDeleteModal";
//context
import {
	TasksContext,
	createContextType,
	events,
	transformHour,
} from "../../../../../../contexts/tasksContext";

//api functions
import { getEvents } from "../../../../../../api/services/getEvents";
import { deleteEvents } from "../../../../../../api/services/deleteEvents";
import { PostDeleteResponse } from "../../../../../../api/services/types";
import { createEvents } from "../../../../../../api/services/postEvents";

export const ButtonsSection = () => {
	const [createIsLoading, setCreateIsLoading] = useState(false);
	const [createEventResponse, setCreateEventResponse] = useState<
		PostDeleteResponse
	>({});
	const [confirmDelete, setConfirmDelete] = useState({
		show: false,
		dayOfWeek: "",
	});
	const {
		task,
		actualDay,
		updateTask,
		getEventsResponse,
		setGetEventsResponse,
		displayErrorModal,
		setDisplayErrorModal,
		setFetchingLoading,
		setDeleteEventsResponse,
		deleteEventsResponse,
	}: createContextType = useContext(TasksContext);

	//rerenders on createEventResponse change
	useEffect(() => {
		getEvents({ dayOfWeek: actualDay })({
			setGetEventsResponse,
			setFetchingLoading,
			setDisplayErrorModal,
		});
		if (!Array.isArray(getEventsResponse)) {
			setDisplayErrorModal(getEventsResponse);
		}
	}, [createEventResponse]);

	//rerenders on deleteEventsResponse change
	useEffect(() => {
		getEvents({ dayOfWeek: actualDay })({
			setGetEventsResponse,
			setFetchingLoading,
			setDisplayErrorModal,
		});
		if (!Array.isArray(getEventsResponse)) {
			setDisplayErrorModal(getEventsResponse);
		}
	}, [deleteEventsResponse]);

	//rerenders on getEventsResponse change
	useEffect(() => {
		if (Array.isArray(getEventsResponse)) {
			updateTask(
				getEventsResponse!.map((event: any) => {
					console.log(transformHour(event.taskHour));
					return {
						taskText: event.description,
						taskDay: event.dayOfWeek,
						taskHour: transformHour(event.taskHour),
						taskId: event.id,
					};
				}),
			);
		} else {
			setDisplayErrorModal(getEventsResponse);
		}
	}, [getEventsResponse]);
	//rerenders on getEventsResponse change because of delete or create
	useEffect(() => {
		if (Array.isArray(getEventsResponse)) {
			updateTask(
				getEventsResponse!.map((event: any) => {
					console.log(transformHour(event.taskHour));
					return {
						taskText: event.description,
						taskDay: event.dayOfWeek,
						taskHour: transformHour(event.taskHour),
						taskId: event.id,
					};
				}),
			);
		} else {
			setDisplayErrorModal(getEventsResponse);
		}
	}, [getEventsResponse]);

	//handles the click on the add button
	function clickHandler() {
		if (
			task.taskText.length > 0 &&
			task.taskDay.length > 0 &&
			task.taskHour.length > 0
		) {
			//convert the hour from HHh MMm to HH:MM:00
			const hour = task!.taskHour.replace("h", ":").replace("m", ":00");
			//remove the white spaces from the hour currentryl is getting 11: 11:00
			const hourWithoutSpaces = hour.replace(/\s/g, "");
			console.log(hourWithoutSpaces);
			createEvents({
				description: task!.taskText,
				dayOfWeek: task!.taskDay,
				taskHour: hourWithoutSpaces,
			})({
				setCreateEventResponse,
				setCreateIsLoading,
				setDisplayErrorModal,
			});
			getEvents({ dayOfWeek: actualDay })({
				setGetEventsResponse,
				setFetchingLoading,
				setDisplayErrorModal,
			});
		}
	}
	//handles the click on the delete button
	const deleteHandler = (dayOfWeek: string) => {
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

	const componentsOutput = createIsLoading ? (
		<Spinner>
			{" "}
			<img alt="loading" src={spinner}></img>
		</Spinner>
	) : (
		<>
			<ActionsButton
				onClick={clickHandler}
				icon={"plusIcon"}
				text={"Add to calendar"}
			/>
			<ActionsButton
				onClick={() => setConfirmDelete({ show: true, dayOfWeek: actualDay })}
				icon={"minusIcon"}
				text={"Delete All"}
			/>
		</>
	);

	return (
		<ActionsContainerCommons>
			{confirmDelete.show && (
				<ConfirmDeleteModal
					actionFunction={deleteHandler}
					value={confirmDelete}
					showModal={setConfirmDelete}
				/>
			)}
			{displayErrorModal && (
				<TasksErrorModal
					displayErrorModal={displayErrorModal}
					setDisplayErrorModal={setDisplayErrorModal}
				/>
			)}
			{componentsOutput}
		</ActionsContainerCommons>
	);
};
