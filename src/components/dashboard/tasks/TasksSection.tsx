import { TasksProvider } from "../../../contexts/TasksContext"
import { TasksContainer } from "./TasksContainer.styles"


export const TasksSection = () => {
  return (
    <TasksProvider>
          <TasksContainer>
              
          </TasksContainer>
    </TasksProvider>
  )
}

