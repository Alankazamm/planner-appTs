"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPasswordModal = void 0;
const Modal_styles_1 = require("./Modal.styles");
const spinner_uol_svg_1 = __importDefault(require("/src/assets/svg/spinner-uol.svg"));
const react_1 = require("react");
const aws_amplify_1 = require("aws-amplify");
const cognitoErrorsHandler_1 = require("../../../api/utils/cognitoErrorsHandler");
const react_2 = __importDefault(require("react"));
const ForgotPasswordModal = ({ toggleModal }) => {
    const [errorMessage, setErrorMessage] = (0, react_1.useState)('');
    const [state, setState] = (0, react_1.useState)({
        email: '',
        loading: false,
        error: false,
        success: false,
    });
    const handleForgotPassword = () => {
        setState({ ...state, loading: true });
        try {
            aws_amplify_1.Auth.forgotPassword(state.email)
                .then(() => {
                setState({ ...state, loading: false, success: true });
            })
                .catch((err) => {
                setErrorMessage((0, cognitoErrorsHandler_1.messageHandler)(err));
                setState({ ...state, loading: false, error: true });
            });
        }
        catch (error) {
            setErrorMessage((0, cognitoErrorsHandler_1.messageHandler)(error));
            setState({ ...state, loading: false, error: true });
        }
    };
    (0, react_1.useEffect)(() => {
        if (state.success) {
            setTimeout(() => {
                toggleModal(true);
            }, 2000);
        }
    }, [state.success]);
    const cancelHandler = () => {
        toggleModal(false);
    };
    return (<Modal_styles_1.ForgotPasswordModal>
            <div className="forgotPasswordModalContent">
                <div className="forgotPasswordModalTitle">
                    Forgot password
                </div>
                <div className="forgotPasswordModalText">
                    <p>Enter your email address and we will send you a link to reset your password.</p>
                </div>
                <input className="forgotPasswordModalInput" onChange={(e) => setState({ ...state, email: e.target.value })} type="text" placeholder="Email address"/>
                {state.success && <div className="forgotPasswordModalSuccess">Email sent!</div>}
                {state.error && <div className="forgotPasswordModalError">{errorMessage}</div>}
                {state.loading ? <img alt="loading spinner" src={spinner_uol_svg_1.default}></img> :
            <div className="forgotPasswordModalButtons">
                        <button className="forgotPasswordButton" onClick={handleForgotPassword}>Send</button>
                        <button className="closeButton" onClick={cancelHandler}>Cancel</button>
                    </div>}
               
            </div>
        </Modal_styles_1.ForgotPasswordModal>);
};
exports.ForgotPasswordModal = ForgotPasswordModal;
