// Description: This component is the container for the actions section of the planner.
//It contains the inputs and buttons sections.

//components
import { ActionsInputs } from './components/Inputs';


//styles
import { ActionsContainer } from './styles';
import { CreateTaskButtons } from './components/Buttons';

export const ActionsSection = () => {
  return (
    <ActionsContainer>
          <ActionsInputs></ActionsInputs>
          <CreateTaskButtons></CreateTaskButtons>
          
    </ActionsContainer>
  )
}


