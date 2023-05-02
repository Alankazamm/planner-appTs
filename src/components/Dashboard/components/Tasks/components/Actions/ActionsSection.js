// Description: This component is the container for the actions section of the planner.
//It contains the inputs and buttons sections.
//components
//styles
import ActionsInputs from './../../../../tasks/actions/inputs/ActionsInputs';
import { ActionsContainer } from './styles';
import { ButtonsSection } from './../../../../tasks/actions/buttons/section/ButtonsSection';
import React from 'react';
export const ActionsSection = () => {
    return (React.createElement(ActionsContainer, null,
        React.createElement(ActionsInputs, null),
        React.createElement(ButtonsSection, null)));
};
