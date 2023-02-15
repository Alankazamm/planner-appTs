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
	firstName: { value: "", hasError: false },
	lastName: { value: "", hasError: false },
	birthDate: { value: "", hasError: false },
	country: { value: "", hasError: false },
	city: { value: "", hasError: false },
	email: { value: "", hasError: false },
	password: { value: "", hasError: false },
    confirmPassword: { value: "", hasError: false },
    user: { value: "", hasError: false },
    loginPassword: { value: "", hasError: false },
    isFormValid: false,
    isLoginValid: false,
};

//types
type reducerDestructure = [formState, Dispatch<action>];

//context
export const UserContext = createContext<any>({});
export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
    console.log('rendered context');
	//hooks
	const [formState, dispatch]: reducerDestructure = useReducer(formsReducer,initialState);
    const navigate = useNavigate();
    const [isLogged, setIsLogged] = useState<boolean>();
    useEffect(() => {
        localStorage.getItem('token') ? setIsLogged(true) : setIsLogged(false);
    }, []);
    
    const signout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

	return (
		<UserContext.Provider value={{ formState, dispatch, isLogged, signout}}>
			{children}
		</UserContext.Provider>
	);
};
