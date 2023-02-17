import { DashContainer } from "../components/dashboard/DashContainer.styles"
import DashboardHeader from "../components/dashboard/header/DashboardHeader"
import { TasksDisplayer } from "../components/dashboard/tasks/display-tasks/TasksDisplayer"
import { TasksSection } from "../components/dashboard/tasks/TasksSection"
import { useContext } from 'react';
import { UserContext } from "../contexts/UserContext";
import { ActionType } from "../reducers/formReducer";

export const Planner = () => {
    const { dispatch } = useContext(UserContext);
    dispatch({ type: ActionType.RESET_FORMSTATE });
    return (
        <DashContainer>
            <DashboardHeader />
          <TasksSection />
        </DashContainer>
            
    )
}