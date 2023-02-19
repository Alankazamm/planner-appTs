import { useContext } from "react";
//description: this section contains the buttons to add and delete tasks
//styles
import { ActionsContainerCommons } from "../../ActionsContainer.styles";
//types

//components
import { ActionsButton } from "../ActionsButton";
//context

import { createEvents } from "./../../../../../../actions/events/createEvent";
import { getEvents } from "./../../../../../../actions/events/getEvents";
import {
	TasksContext,
	createContextType,
	events,
	eventStatus,
	taskState,
} from "/src/contexts/tasksContext.tsx";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "../../../../../common/loading/Spinner.styles";
import  spinner  from '/src/assets/svg/spinner-uol.svg';
import { TasksErrorModal } from "../../../../../common/error-handling/modal/TasksErrorModal";


type createEvent = {
	status?: eventStatus;
	data?: events;
};

export const ButtonsSection = () => {
	const [createEventResponse, setCreateEventResponse] = useState<createEvent>({});

	const {
		task,
		allTasks,
		actualDay,
		updateTask,
		getEventsResponse,
    setGetEventsResponse,
    displayErrorModal,
		setDisplayErrorModal,
	}: createContextType = useContext(TasksContext);

  const [createIsLoading, setCreateIsLoading] = useState(false);

	useEffect(() => {
		if (createEventResponse.hasOwnProperty("status")) {
			console.log(createEventResponse);
			if (createEventResponse.status === eventStatus["Event created"]) {
				getEvents({ dayOfWeek: actualDay })(setGetEventsResponse);
				console.log(createEventResponse.data);
			} else {
				setDisplayErrorModal(createEventResponse.status);
			}
		}
	}, [createEventResponse]);

	useEffect(() => {
		if (getEventsResponse.hasOwnProperty("status")) {
			console.log(getEventsResponse);
			if (getEventsResponse.status === eventStatus["OK"]) {
				console.log(getEventsResponse.data!.events);
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

	function clickHandler() {
		if (task.taskText.length > 0) {
			createEvents({ description: task!.taskText, dayOfWeek: task!.taskDay })(
				{setCreateEventResponse, setCreateIsLoading, setDisplayErrorModal}
      );
     
			getEvents({ dayOfWeek: actualDay })(setGetEventsResponse);
		}
  }
  console.log(displayErrorModal)
	const deleteHandler = () => {
		const newArray = allTasks.filter(
			(tasks: taskState) => tasks.taskDay !== actualDay,
		);
		updateTask(newArray);
	};

  const componentsOutput = createIsLoading ?
  (<Spinner> <img src={spinner}></img></Spinner>)
    :(<>
      <ActionsButton
        onClick={clickHandler}
        icon={"plusIcon"}
        text={"Add to calendar"}
      />
      <ActionsButton
        onClick={deleteHandler}
        icon={"minusIcon"}
        text={"Delete All"}
      />
    </>);
      

	return (
    <ActionsContainerCommons>
      {displayErrorModal && <TasksErrorModal displayErrorModal={displayErrorModal} setDisplayErrorModal={setDisplayErrorModal} />}
      {componentsOutput}
		</ActionsContainerCommons>
	);
};
