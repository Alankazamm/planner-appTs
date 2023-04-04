import { WarningModal } from "../styles";
import warningIcon from "/src/assets/svg/icon-warning.svg";
type SignErrorModalProps = {
	//toggleModal is an anonymous function that is passed as a prop from SignUp.tsx
    toggleModal: () => void;
};

export const SignErrorModal = ({ toggleModal }: SignErrorModalProps) => {
	return (
		<WarningModal>
			<div className="warningModalContent">
				<div className="warnigModalTitle">
					<img src={warningIcon} alt="warning icon" />
					<h2>Warning</h2>
				</div>
				<div className="warningModalText">
					<p>
                        There was an error while trying to sign up. Please,
                        try to refresh the page or try again later.
					</p>
				</div>

				<div className="warningModalButtons">
					<button className="closeButton" onClick={(e) => toggleModal()}>
						Ok
					</button>
				</div>
			</div>
		</WarningModal>
	);
};
