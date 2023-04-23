"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContextProvider = exports.UserContext = void 0;
// This is the context that will be used to store the user data and the form data
//hooks
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
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
exports.UserContext = (0, react_2.createContext)({});
const UserContextProvider = ({ children }) => {
    //hooks
    const [displayRenewAccessTokenModal, setDisplayRenewAccessTokenModal] = (0, react_2.useState)(false);
    const [formState, dispatch] = (0, react_2.useReducer)(formReducer_1.formsReducer, initialState);
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
    return (<exports.UserContext.Provider value={{ formState, dispatch, signout, displayRenewAccessTokenModal,
            setDisplayRenewAccessTokenModal }}>
			{children}
		</exports.UserContext.Provider>);
};
exports.UserContextProvider = UserContextProvider;
