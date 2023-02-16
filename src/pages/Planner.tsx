import { DashContainer } from "../components/dashboard/DashContainer.styles"
import DashboardHeader from "../components/dashboard/header/DashboardHeader"
import { TasksDisplayer } from "../components/dashboard/tasks/display-tasks/TasksDisplayer"
import { TasksSection } from "../components/dashboard/tasks/TasksSection"

export const Planner = () => {
    return (
        <DashContainer>
            <DashboardHeader />
          <TasksSection />
        </DashContainer>
            
    )
}