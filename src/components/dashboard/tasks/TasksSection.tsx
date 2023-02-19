// Description: This component is the main component for the tasks section.
//It is responsible for rendering the tasks container and the actions section.

//components
import { ActionsSection } from "./actions/ActionsSection"

//styles
import { TasksContainer } from "./TasksContainer.styles"

//context

import { TasksDisplayer } from "./display-tasks/TasksDisplayer"
import { TasksContext, TasksProvider } from "../../../contexts/tasksContext"
import { useContext } from 'react';
import { TasksErrorModal } from "../../common/error-handling/modal/TasksErrorModal";
import { useEffect } from 'react';


export const TasksSection = () => {
  const { displayErrorModal, setDisplayErrorModal } = useContext(TasksContext);
  console.log(displayErrorModal);

  // useEffect(() => {
  //   console.log(displayErrorModal);
  // }, [setDisplayErrorModal, displayErrorModal]);
  return (
    <TasksProvider>
      {/* {displayErrorModal && <TasksErrorModal displayErrorModal={displayErrorModal} setDisplayErrorModal={setDisplayErrorModal} />} */}
          <TasksContainer>
              <ActionsSection />
              <TasksDisplayer />
          </TasksContainer>
    </TasksProvider>
  )
}

