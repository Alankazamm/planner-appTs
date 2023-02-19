
import { ConfirmModal } from './../error-handling/modal/Modal.styles';
import warningIcon from '/src/assets/svg/icon-warning.svg';

export const ConfirmDeleteModal = ({actionFunction, value, showModal}:{actionFunction:any, value:string, showModal:any}) => {
  const actionHandler = () => {
    actionFunction(value);
    showModal({show: false, id: ''});
  }
  const cancelHandler = () => {
    showModal({show: false, id: ''});
  }
  return (
    <ConfirmModal>
      <div className="confirmModalContent">
        <div className="confirmModalTitle">
          <img src={warningIcon} alt="warning icon" />
          <h2>Are you sure you want to delete this task?</h2>
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
