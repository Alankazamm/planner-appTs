"use strict";
// Description: This component is the container for the actions section of the planner.
//It contains the inputs and buttons sections.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionsSection = void 0;
//components
//styles
const ActionsInputs_1 = __importDefault(require("./../../../../tasks/actions/inputs/ActionsInputs"));
const styles_1 = require("./styles");
const ButtonsSection_1 = require("./../../../../tasks/actions/buttons/section/ButtonsSection");
const react_1 = __importDefault(require("react"));
const ActionsSection = () => {
    return (<styles_1.ActionsContainer>
          <ActionsInputs_1.default></ActionsInputs_1.default>
          <ButtonsSection_1.ButtonsSection></ButtonsSection_1.ButtonsSection>
          
    </styles_1.ActionsContainer>);
};
exports.ActionsSection = ActionsSection;
