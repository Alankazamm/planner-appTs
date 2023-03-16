import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Description: This component is the container for the actions section of the planner.
//It contains the inputs and buttons sections.
//components
import { ButtonsSection } from './buttons/section/ButtonsSection';
import ActionsInputs from './inputs/ActionsInputs';
//styles
import { ActionsContainer } from './ActionsContainer.styles';
export const ActionsSection = () => {
    return (_jsxs(ActionsContainer, { children: [_jsx(ActionsInputs, {}), _jsx(ButtonsSection, {})] }));
};
