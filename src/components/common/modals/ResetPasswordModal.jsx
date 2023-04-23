"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPasswordModal = void 0;
const Modal_styles_1 = require("./Modal.styles");
const react_1 = require("react");
const aws_amplify_1 = require("aws-amplify");
const spinner_uol_svg_1 = __importDefault(require("/src/assets/svg/spinner-uol.svg"));
const react_2 = require("react");
const cognitoErrorsHandler_1 = require("../../../api/utils/cognitoErrorsHandler");
const react_3 = __importDefault(require("react"));
const ResetPasswordModal = ({ toggleModal }) => {
    const [errorMessage, setErrorMessage] = (0, react_1.useState)('');
    const [state, setState] = (0, react_1.useState)({
        email: '',
        verificationcode: '',
        newpassword: '',
        loading: false,
        error: false,
        success: false,
    });
    const inputChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };
    const handleResetPassword = () => {
        setState({ ...state, loading: true });
        try {
            aws_amplify_1.Auth.forgotPasswordSubmit(state.email, state.verificationcode, state.newpassword)
                .then(() => {
                setState({ ...state, loading: false, success: true });
            })
                .catch((err) => {
                setErrorMessage((0, cognitoErrorsHandler_1.messageHandler)(err));
                setState({ ...state, loading: false, error: true });
            });
        }
        catch (error) {
            console.log(error, 'error');
            setState({ ...state, loading: false, error: true });
        }
    };
    (0, react_2.useEffect)(() => {
        if (state.success) {
            setTimeout(() => {
                toggleModal();
            }, 2000);
        }
    }, [state.success]);
    return (<Modal_styles_1.ResetPasswordModal>
            <div className="resetPasswordModalContent">
                <div className="resetPasswordModalTitle">
                    Set new password
                </div>
                <div className="resetPasswordModalText">
                    <p>Enter your new password below.</p>
                </div>
                <input className="resetPasswordModalInput" name="email" type="text" placeholder="Email" onChange={e => inputChange(e)}/>
                <input className="resetPasswordModalInput" name="verificationcode" type="text" placeholder="Verification code" onChange={e => inputChange(e)}/>
                <input className="resetPasswordModalInput" name="newpassword" type="password" placeholder="New password" onChange={e => inputChange(e)}/>
                {state.success && <div className="resetPasswordModalSuccess">Password changed! Please, login</div>}
                {state.error && <div className="resetPasswordModalError">{errorMessage}</div>}
                {state.loading ? <img alt="loading spinner" src={spinner_uol_svg_1.default}></img> :
            <div className="resetPasswordModalButtons">
                        <button className="resetPasswordButton" onClick={handleResetPassword}>Reset password</button>
                        <button className="closeButton" onClick={toggleModal}>Cancel</button>
                    </div>}
                
            </div>
                
        </Modal_styles_1.ResetPasswordModal>);
};
exports.ResetPasswordModal = ResetPasswordModal;
