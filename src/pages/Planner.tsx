//styles
import { DashContainer } from "../components/dashboard/DashContainer.styles"
//components
import DashboardHeader from "../components/dashboard/header/DashboardHeader"
import { TasksSection } from "../components/dashboard/tasks/TasksSection"



export const Planner = () => {
    // window.addEventListener("popstate", () => {
    //     localStorage.removeItem('canEnter');
    //     localStorage.removeItem('token');
    //   });

   

    return (
        <DashContainer>
            <DashboardHeader />
          <TasksSection />
        </DashContainer>
            
    )
}