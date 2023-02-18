//description: this file contains the context for the tasks
//it also contains the functions to update the tasks and the day

//hooks
import { createContext, useState, useEffect } from "react";
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
    displayErrorModal: boolean,
    setDisplayErrorModal: React.Dispatch<React.SetStateAction<boolean>>;
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
	"Internal server error" = 501,
	"Event created" = 201,
	"OK" = 200,
}
export type getEventsType = {
	status?: eventStatus;
	data?: {
		events: events[];
	};
};

export const TasksContext = createContext({} as createContextType);

export const TasksProvider = ({ children }: { children: React.ReactNode }) => {
	console.log("tasksContext");
	const [task, setTask] = useState({
		taskText: "",
		taskDay: "monday",
		taskHour: "",
		taskId: "1",
	});
	const [allTasks, setAllTasks] = useState<arrayOfTasks>([]);
	const [actualDay, setDay] = useState("monday");
	const [getEventsResponse, setGetEventsResponse] = useState<getEventsType>({});
    const [displayErrorModal, setDisplayErrorModal] = useState(false);
	console.log(task, "task");
	console.log(allTasks, "allTasks");

	useEffect(() => {
		if (getEventsResponse.hasOwnProperty("status")) {
			console.log(getEventsResponse);
			if (getEventsResponse.status === eventStatus["OK"]) {
				console.log(getEventsResponse.data!.events);
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
            }
            else {
                setDisplayErrorModal(true);
            }
		}
	}, [getEventsResponse]);

	useEffect(() => {
		getEvents({dayOfWeek:actualDay})(setGetEventsResponse);
	}, [actualDay]);

	const updateTask = (taskArray: arrayOfTasks) => {
		setAllTasks(taskArray);
		localStorage.setItem("tasks", JSON.stringify(taskArray));
		console.log(allTasks);
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
			}}
		>
			{children}
		</TasksContext.Provider>
	);
};
