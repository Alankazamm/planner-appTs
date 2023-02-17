// This is the context that will be used to store the user data and the form data
//hooks
import {
	createContext,
	useState,
	useEffect,
	Dispatch,
	useReducer,
} from "react";
import { useNavigate } from "react-router-dom";
//reducers
import {
	formsReducer,
	formState,
	action,
	ActionType,
} from "../reducers/formReducer";

//initial states
const initialState: formState = {
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
	loginAuth:{
		loading: false,
		errors: [],
		data: null,
	},
    isFormValid: false,
    isLoginValid: false,
};

//types
type reducerDestructure = [formState, Dispatch<action>];

//context
export const UserContext = createContext<any>({});
export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
	//hooks
	const [formState, dispatch]: reducerDestructure = useReducer(formsReducer, initialState);
	console.log('formstate',formState);
    const navigate = useNavigate();
	const [isLogged, setIsLogged] = useState<boolean>();
	console.log('isLogged',isLogged);
	useEffect(() => {
		if (formState.isLoginValid === true) {
			localStorage.setItem("token", formState.loginAuth.data.token);
			setIsLogged(true);
		} 
    }, [formState.isLoginValid]);
    
	const signout = () => {
		console.log('signout');
		localStorage.removeItem('token');
		dispatch({ type: ActionType.RESET_FORMSTATE });
        navigate('/login');
	}
	

	return (
		<UserContext.Provider value={{ formState, dispatch, isLogged, signout}}>
			{children}
		</UserContext.Provider>
	);
};
