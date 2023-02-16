// Description: This component is the main component for the tasks section.
//It is responsible for rendering the tasks container and the actions section.

//components
import { ActionsSection } from "./actions/ActionsSection"

//styles
import { TasksContainer } from "./TasksContainer.styles"

//context

import { TasksDisplayer } from "./display-tasks/TasksDisplayer"
import { TasksProvider } from "../../../contexts/tasksContext"


export const TasksSection = () => {
  return (
    <TasksProvider>
          <TasksContainer>
              <ActionsSection />
              <TasksDisplayer />
          </TasksContainer>
    </TasksProvider>
  )
}

