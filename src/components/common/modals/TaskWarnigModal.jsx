"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskWarnigModal = void 0;
const Modal_styles_1 = require("./Modal.styles");
const icon_warning_svg_1 = __importDefault(require("/src/assets/svg/icon-warning.svg"));
const react_1 = __importDefault(require("react"));
const TaskWarnigModal = ({ toggleModal }) => {
    return (<Modal_styles_1.WarningModal>
    <div className="warningModalContent">
        <div className="warnigModalTitle">
            <img src={icon_warning_svg_1.default} alt="warning icon"/>
            <h2>Warning</h2>
        </div>
        <div className="warningModalText">
            <p>
                Maybe there is more tasks than the display limit. Please, try to filter the tasks by desciption
                if you are not able to find the task you are looking for.
            </p>
        </div>
        
        <div className="warningModalButtons">
            <button className="closeButton" onClick={e => toggleModal(false)}>Ok</button>
        </div>
    </div>
    </Modal_styles_1.WarningModal>);
};
exports.TaskWarnigModal = TaskWarnigModal;
