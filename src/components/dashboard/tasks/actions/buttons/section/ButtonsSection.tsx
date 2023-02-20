import { useContext } from "react";
//description: this section contains the buttons to add and delete tasks
//hooks
import { useState, useEffect } from "react";
//styles
import { ActionsContainerCommons } from "../../ActionsContainer.styles";
import Spinner from "../../../../../common/loading/Spinner.styles";
//assets
import spinner from "/src/assets/svg/spinner-uol.svg";
//types
type createEvent = {
	status?: eventStatus;
	data?: events;
};
//components
import { ActionsButton } from "../ActionsButton";
import { TasksErrorModal } from "../../../../../common/error-handling/modal/TasksErrorModal";
import { ConfirmDeleteModal } from "../../../../../common/confirmation/ConfirmDeleteModal";
//context
import {
	TasksContext,
	createContextType,
	events,
	eventStatus,
} from "../../../../../../contexts/tasksContext";

//api functions
import { getEvents } from "./../../../../../../actions/events/getEvents";
import { deleteEvents } from "../../../../../../actions/delete-events/deleteEvents";
import {axiosInstance} from "../../../../../../helpers/axios";

export const ButtonsSection = () => {

	const [createIsLoading, setCreateIsLoading] = useState(false);
	const [createEventResponse, setCreateEventResponse] = useState<createEvent>({});
	const [confirmDelete, setConfirmDelete] = useState({show: false,dayOfWeek: ""});	
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
		deleteEventsResponse
	}: createContextType = useContext(TasksContext);

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
			} else {
				setDisplayErrorModal(deleteEventsResponse.status);
	
			}
		}
	}, [deleteEventsResponse]);
	
	//rerenders on getEventsResponse change
	useEffect(() => {
		if (getEventsResponse.hasOwnProperty("status")) {
			if (getEventsResponse.status === eventStatus["OK"]) {
				updateTask(
					getEventsResponse!.data!.events!.map((event: events) => {
						return {
							taskText: event.description,
							taskDay: event.dayOfWeek,
							taskHour: event.createdAt,
							taskId: event._id,
						};
					}),
				);
			}
		}
	}, [getEventsResponse]);
	//rerenders on getEventsResponse change because of delete or create
	useEffect(() => {
		if (getEventsResponse.hasOwnProperty("status")) {
			if (getEventsResponse.status === eventStatus["OK"]) {
				updateTask(
					getEventsResponse!.data!.events!.map((event: events) => {
						return {
							taskText: event.description,
							taskDay: event.dayOfWeek,
							taskHour: event.createdAt
								.substring(11, 16)
								.replace(":", "h")
								.concat("m"),
							taskId: event._id,
						};
					}),
				);
			} else {
				setDisplayErrorModal(getEventsResponse.status);
			}
		}
	}, [getEventsResponse]);
	//request API to create events
	const createEvents = ({description, dayOfWeek}: { description: string, dayOfWeek: string }) => {
		setCreateIsLoading(true);
		axiosInstance.post(`/events`, { description, dayOfWeek }).then((response) => {
			setCreateEventResponse(response);
			setCreateIsLoading(false);
		}).catch(error => {
		console.log(error);
		setCreateIsLoading(false);
		setDisplayErrorModal(error.response.data.status);
		setCreateEventResponse(error.response.data);

	})
}
	//handles the click on the add button
	function clickHandler() {
		if (task.taskText.length > 0) {
			 createEvents({ description: task!.taskText, dayOfWeek: task!.taskDay })
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
			<img src={spinner}></img>
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
