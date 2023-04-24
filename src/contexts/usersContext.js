"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContextProvider = exports.UserContext = void 0;
// This is the context that will be used to store the user data and the form data
//hooks
const React = __importStar(require("react"));
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
//reducers
const formReducer_1 = require("../reducers/formReducer");
//initial states
const initialState = {
    firstName: { value: "", hasError: false, error: "" },
    lastName: { value: "", hasError: false, error: "" },
    birthDate: { value: "", hasError: false, error: "" },
    country: { value: "", hasError: false, error: "" },
    city: { value: "", hasError: false, error: "" },
    email: { value: "", hasError: false, error: "" },
    password: { value: "", hasError: false, error: "" },
    confirmPassword: { value: "", hasError: false, error: "" },
    user: { value: "", hasError: false, error: "" },
    loginPassword: { value: "", hasError: false, error: "" },
    auth: {
        loading: false,
        errors: [],
        data: null,
    },
    loginAuth: {
        loading: false,
        errors: [],
        data: null,
    },
    isFormValid: false,
    isLoginValid: false,
    unknownError: false,
};
//context
exports.UserContext = (0, react_1.createContext)({});
const UserContextProvider = ({ children }) => {
    //hooks
    const [displayRenewAccessTokenModal, setDisplayRenewAccessTokenModal] = (0, react_1.useState)(false);
    const [formState, dispatch] = (0, react_1.useReducer)(formReducer_1.formsReducer, initialState);
    const navigate = (0, react_router_dom_1.useNavigate)();
    //functions
    //when the user signs out, the form state is reset and the user is redirected to the login page
    //the user is also removed from the local storage
    const signout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem("user");
        localStorage.removeItem("sessionToken");
        localStorage.removeItem("sessionRefreshToken");
        localStorage.removeItem("sessionAccessToken");
        localStorage.removeItem("sessionExpires");
        dispatch({ type: formReducer_1.ActionType.RESET_FORMSTATE });
        navigate('/login');
    };
    return (React.createElement(exports.UserContext.Provider, { value: { formState, dispatch, signout, displayRenewAccessTokenModal,
            setDisplayRenewAccessTokenModal } }, children));
};
exports.UserContextProvider = UserContextProvider;
//# sourceMappingURL=usersContext.js.map