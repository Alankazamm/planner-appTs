import { WarningModal } from './Modal.styles'

const warningIcon = require('./../../../../assets/svg/icon-warning.svg')
export const TaskWarnigModal = ({toggleModal}:{toggleModal:React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <WarningModal>
    <div className="warningModalContent">
        <div className="warnigModalTitle">
            <img src={warningIcon} alt="warning icon" />
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
</WarningModal>
  )
}
