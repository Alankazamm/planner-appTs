"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmEmailModal = void 0;
const aws_amplify_1 = require("aws-amplify");
const Modal_styles_1 = require("../modals/Modal.styles");
const react_1 = require("react");
const aws_amplify_2 = require("aws-amplify");
const aws_exports_1 = __importDefault(require("../../../aws-exports"));
const react_router_dom_1 = require("react-router-dom");
const react_2 = __importDefault(require("react"));
aws_amplify_2.Amplify.configure(aws_exports_1.default);
const ConfirmEmailModal = ({ email, toggleModal }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [code, setCode] = (0, react_1.useState)('');
    const [modalTitle, setModalTitle] = (0, react_1.useState)('Confirm your email');
    const handleConfirm = async () => {
        try {
            await aws_amplify_1.Auth.confirmSignUp(email, code);
            setModalTitle('Email confirmed');
        }
        catch (error) {
            if (error.code === 'CodeMismatchException') {
                setModalTitle('Incorrect code');
            }
            else if (error.code === 'ExpiredCodeException') {
                setModalTitle('Code expired, please request a new one');
            }
            else if (error.code === 'LimitExceededException') {
                setModalTitle('Too many attempts, please request a new code');
            }
            else if (error.toString().includes('Confirmation code cannot be empty')) {
                setModalTitle('Please enter a code');
            }
        }
    };
    return (<Modal_styles_1.ConfirmEmailModal>
            <div className="confirmEmailModalContent">
                <div className="confirmEmailModalTitle">
                    {modalTitle}
                </div>
                <div className="confirmEmailModalText">
                    <p>We have sent you a confirmation code to your email address. Please enter it below to confirm your email address.</p>
                </div>
             
                    <input className="confirmEmailModalInput" type="text" placeholder="Confirmation code" value={code} onChange={(e) => setCode(e.target.value)}/>
               
                <div className="confirmEmailModalButtons">
                    <button className="confirmEmailButton" onClick={handleConfirm}>Confirm</button>
                    {modalTitle === 'Email confirmed' && <button className="closeButton" onClick={() => { toggleModal(); navigate('/login'); }}>Close</button>}
                </div>
            </div>


        </Modal_styles_1.ConfirmEmailModal>);
};
exports.ConfirmEmailModal = ConfirmEmailModal;
