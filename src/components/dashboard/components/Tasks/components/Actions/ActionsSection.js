import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Description: This component is the container for the actions section of the planner.
//It contains the inputs and buttons sections.
//components
//styles
import ActionsInputs from './../../../../tasks/actions/inputs/ActionsInputs';
import { ActionsContainer } from './styles';
import { ButtonsSection } from './../../../../tasks/actions/buttons/section/ButtonsSection';
export const ActionsSection = () => {
    return (_jsxs(ActionsContainer, { children: [_jsx(ActionsInputs, {}), _jsx(ButtonsSection, {})] }));
};
