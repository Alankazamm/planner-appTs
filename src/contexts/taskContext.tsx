//description: this file contains the context for the tasks
//it also contains the functions to update the tasks and the day

//hooks
import { createContext, useState, useEffect } from "react";
import { getEvents } from "../api/services/getEvents";
import { ErrorMessages, GetResponse } from "../api/services/types";
import * as React from "react";
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
	getEventsResponse: GetResponse;
	setGetEventsResponse: React.Dispatch<React.SetStateAction<GetResponse>>;
	deleteEventsResponse: any;
	setDeleteEventsResponse: React.Dispatch<React.SetStateAction<any>>;
	displayErrorModal: ErrorMessages | undefined;
	setDisplayErrorModal: React.Dispatch<
		React.SetStateAction<ErrorMessages | undefined>
	>;
	fetchingLoading: boolean;
	setFetchingLoading: React.Dispatch<React.SetStateAction<boolean>>;
	
};
export type events = {
	dateTime: string;
	taskHour: string;
	date: string;
	dayOfWeek: string;
	description: string;
	id: string;
	userId: string;
};

// export type getEventsType = GetResponse;

let firstRender = true;
export const transformHour = (hour: string) => {
	const newHour = hour.slice(0, -3);
	const hourArray = newHour.split(":");
	return `${hourArray[0]}h ${hourArray[1]}m`;
};
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
	const [getEventsResponse, setGetEventsResponse] = useState<GetResponse>([]);
	const [deleteEventsResponse, setDeleteEventsResponse] = useState<any>({});
	const [fetchingLoading, setFetchingLoading] = useState<boolean>(false);
	const [displayErrorModal, setDisplayErrorModal] = useState<ErrorMessages>();
	
	//trasform the hour to the format that the input type time needs, from 11:11:00 to 11h 11m and remove the last 3 characters

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
		}
		else {
			updateErrorModal(getEventsResponse);
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
		//check if the response is an ErrorMessages enum
		!Array.isArray(getEventsResponse)
			? updateErrorModal(getEventsResponse)
			: null;

		// ? updateErrorModal(getEventsResponse.status)
		// : null;
	}, [actualDay]);

	const updateTask = (taskArray: arrayOfTasks) => {
		setAllTasks(taskArray);
	};
	const updateErrorModal = (status: ErrorMessages) => {
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
