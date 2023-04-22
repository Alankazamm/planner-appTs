// Description: This component is the main component for the tasks section.
//It is responsible for rendering the tasks container and the actions section.

//components
import { ActionsSection } from "./components/Actions/ActionsSection"
import { TasksDisplayer } from "./components/Displayer"
//styles
//context
import {  TasksProvider } from "../../../../contexts/taskContext"
import { TasksContainer } from './styles';

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

