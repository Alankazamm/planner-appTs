"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmDeleteModal = void 0;
const react_1 = __importDefault(require("react"));
const Modal_styles_1 = require("../modals/Modal.styles");
const icon_warning_svg_1 = __importDefault(require("/src/assets/svg/icon-warning.svg"));
const ConfirmDeleteModal = ({ actionFunction, value, showModal }) => {
    const actionHandler = () => {
        value.id ? actionFunction(value.id) : actionFunction(value.dayOfWeek);
        value.id ? showModal({ show: false, id: '' }) : showModal({ show: false, dayOfWeek: '' });
    };
    const cancelHandler = () => {
        value.id ? showModal({ show: false, id: '' }) : showModal({ show: false, dayOfWeek: '' });
    };
    return (<Modal_styles_1.ConfirmModal>
      <div className="confirmModalContent">
        <div className="confirmModalTitle">
          <img src={icon_warning_svg_1.default} alt="warning icon"/>
          {value.id && <h2>Are you sure you want to delete this task?</h2>}
          {value.dayOfWeek && <h3>Are you sure you want to delete all tasks for {value.dayOfWeek}?</h3>}
        </div>
        <div className="confirmModalText">
          <p>
            This action cannot be undone.
          </p>
        </div>
        <div className="confirmModalButtons">
          <button className="closeButton" onClick={cancelHandler}>Cancel</button>
          <button className="confirmDeleteButton" onClick={actionHandler}>Delete</button>
        </div>
      </div>
   </Modal_styles_1.ConfirmModal>);
};
exports.ConfirmDeleteModal = ConfirmDeleteModal;
