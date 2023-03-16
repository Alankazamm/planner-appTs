//description: this file contains the context for the tasks
//it also contains the functions to update the tasks and the day

//hooks
import { createContext, useState, useEffect } from "react"
import { getEvents } from "../actions/events/getEvents";

//types
export type arrayOfTasks = taskState[];
export type taskState = {
	taskText: string;
	taskDay: string;
	taskHour: string;
	taskId: string;
};
export type setTaskState = React.Dispatch<React.SetStateAction<taskState>>;
export type taskStateDestructured = { task: taskState; setTask: setTaskState };
export type createContextType = {
	task: taskState;
	setTask: setTaskState;
	allTasks: arrayOfTasks;
	setAllTasks: React.Dispatch<React.SetStateAction<arrayOfTasks>>;
	actualDay: string;
	setDay: React.Dispatch<React.SetStateAction<string>>;
	updateTask: (taskArray: arrayOfTasks) => void;
	getEventsResponse: getEventsType;
	setGetEventsResponse: React.Dispatch<React.SetStateAction<getEventsType>>;
	deleteEventsResponse: any;
	setDeleteEventsResponse: React.Dispatch<React.SetStateAction<any>>;
	displayErrorModal: eventStatus | undefined;
	setDisplayErrorModal: React.Dispatch<
		React.SetStateAction<eventStatus | undefined>
	>;
	fetchingLoading: boolean;
	setFetchingLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
export type events = {
	createdAt: string;
	dayOfWeek: string;
	description: string;
	updatedAt: string;
	_id: string;
	userId: string;
};
export enum eventStatus {
	"Access denied" = 401,
	"Event not found" = 404,
	"Internal server error" = 500 | 501,
	"Event created" = 201,
	"OK" = 200,
	"Invalid data" = 400,
}
export type getEventsType = {
	status?: eventStatus;
	message?: string;
	data?: {
		events: events[];
	};
};

let firstRender = true;

export const TasksContext = createContext({} as createContextType);
export const TasksProvider = ({ children }: { children: React.ReactNode }) => {
	const [task, setTask] = useState({
		taskText: "",
		taskDay: "monday",
		taskHour: "",
		taskId: "1",
	});
	const [allTasks, setAllTasks] = useState<arrayOfTasks>([]);
	const [actualDay, setDay] = useState("monday");
	const [getEventsResponse, setGetEventsResponse] = useState<getEventsType>({});
	const [deleteEventsResponse, setDeleteEventsResponse] = useState<any>({});
	const [fetchingLoading, setFetchingLoading] = useState<boolean>(false);
	const [displayErrorModal, setDisplayErrorModal] = useState<eventStatus>();

	useEffect(() => {
		if (getEventsResponse.hasOwnProperty("status")) {
			if (getEventsResponse.status === eventStatus["OK"]) {
				updateTask(
					getEventsResponse!.data!.events!.map((event) => {
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

	useEffect(() => {
		if (firstRender) {
			firstRender = false;
			return;
		}
		getEvents({ dayOfWeek: actualDay })({
			setGetEventsResponse,
			setFetchingLoading,
			setDisplayErrorModal,
		});
		getEventsResponse.status
			? updateErrorModal(getEventsResponse.status)
			: null;
	}, [actualDay]);

	const updateTask = (taskArray: arrayOfTasks) => {
		setAllTasks(taskArray);
	};
	const updateErrorModal = (status: eventStatus) => {
		setDisplayErrorModal(status);
	};

	return (
		<TasksContext.Provider
			value={{
				task,
				setTask,
				allTasks,
				setAllTasks,
				actualDay,
				setDay,
				updateTask,
				getEventsResponse,
				setGetEventsResponse,
				displayErrorModal,
				setDisplayErrorModal,
				fetchingLoading,
				setFetchingLoading,
				setDeleteEventsResponse,
				deleteEventsResponse,
			}}
		>
			{children}
		</TasksContext.Provider>
	);
};
