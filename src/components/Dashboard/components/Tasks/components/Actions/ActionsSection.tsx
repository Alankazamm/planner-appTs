// Description: This component is the container for the actions section of the planner.
//It contains the inputs and buttons sections.

//components
import { ActionsInputs } from './components/Inputs';
import { ButtonsSection } from './../../../../tasks/actions/buttons/section/ButtonsSection';

//styles
import { ActionsContainer } from './styles';

export const ActionsSection = () => {
  return (
    <ActionsContainer>
          <ActionsInputs></ActionsInputs>
          <ButtonsSection></ButtonsSection>
          
    </ActionsContainer>
  )
}


