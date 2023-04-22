//description: this component is responsible for displaying the tasks of the day selected
//it is rendered by the TasksSection component
import { SelectWeekButtons } from "./components/Buttons";
import { DisplayerContainer } from "./styles";
import { Tasks } from "./components/Tasks";
export const TasksDisplayer = () => {
    return (<DisplayerContainer>
			<SelectWeekButtons />
			<Tasks />
		</DisplayerContainer>);
};
