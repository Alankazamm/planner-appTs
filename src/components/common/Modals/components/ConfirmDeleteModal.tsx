
import { ConfirmModal } from '../styles';
import warningIcon from '/src/assets/svg/icon-warning.svg'
import * as React from "react";
export const ConfirmDeleteModal = ({actionFunction, value, showModal}:{actionFunction:any, value:{show:boolean, id?:string, dayOfWeek?:string}, showModal:any}) => {
  const actionHandler = () => {
    value.id ? actionFunction(value.id) : actionFunction(value.dayOfWeek);
    value.id ? showModal({ show: false, id: '' }) : showModal({ show: false, dayOfWeek: '' });
  };
  const cancelHandler = () => {
    value.id ? showModal({ show: false, id: '' }) : showModal({ show: false, dayOfWeek: '' });
  };
  return (
    <ConfirmModal>
      <div className="confirmModalContent">
        <div className="confirmModalTitle">
          <img src={warningIcon} alt="warning icon" />
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
   </ConfirmModal>
  )
}
