//description: this component is responsible for displaying all tasks for a given day
//it is rendered by the TasksSection component

//hooks
import { useContext, useEffect } from "react";

//styles
import { TaskBorder } from "./styles/TaskBorder.styles";
import { TasksTimeCard } from "./styles/TasksTimeCard.styles";


//context
import { createContextType, TasksContext } from "../../../../../contexts/tasksContext";
import TasksWrapper from "./TasksWrapper.styles";

export const Tasks = () => {
   
    
    const { allTasks, actualDay, updateTask }:createContextType = useContext(TasksContext);
    let sameDayTasks = allTasks.filter((task) => task.taskDay === actualDay);
    let taskHours = sameDayTasks.map((task) => task.taskHour);
    taskHours = taskHours.filter(
        (hour, index) => taskHours.indexOf(hour) === index,
    );
    taskHours = taskHours.sort((a, b) => a.localeCompare(b));

    useEffect(() => {
        
    }, [actualDay]);

    const taskDeleteHandler = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLButtonElement;
        let newArray = allTasks.filter((task) => task.taskId !== target.id );
        updateTask(newArray);
    };
    return (
		<TasksWrapper>
			

            <div className="cardsList">
            <div className="timeCard">
				<p>Time</p>
			</div>
				{taskHours.map((hour, index) => (
					<div className="tasksSameHour" id={"sameHour" + index} >
						<TasksTimeCard actualDay={sameDayTasks.filter((task) => task.taskHour === hour).length > 1 ? 'conflict' : actualDay} key={"timeCard" + index}>
							{hour}
						</TasksTimeCard>
						<div className="tasksList" id={"taskList" + index}>
							{sameDayTasks
								.filter((task) => task.taskHour === hour)
								.map((task) => {
									return (
										<div className="taskCard" id={"card" + task.taskId}>
											<TaskBorder
												actualDay={sameDayTasks.filter((task) => task.taskHour === hour).length > 1 ? 'conflict' : actualDay}
												id={"border" + index}
											></TaskBorder>
											<div className="taskText" id={"text" + index}>
												{task.taskText}
											</div>
											<div
												className="deleteButton"
												onClick={taskDeleteHandler}
												id={task.taskId}
											>
												Delete
											</div>
										</div>
									);
                                })}
                             {sameDayTasks.filter((task) => task.taskHour === hour).length > 1
                        && <><div className="circle"></div><div className="stroke"></div></> }
                        </div>
                       
                    </div>
                    
                ))}
                
			</div>
		</TasksWrapper>
	);
};
