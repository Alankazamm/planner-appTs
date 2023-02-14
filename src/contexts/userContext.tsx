// This is the context that will be used to store the user data and the form data
//hooks
import {
	createContext,
	useState,
	useEffect,
	Dispatch,
	useReducer,
} from "react";
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
export const UserContextProvider = ({ children,}: {children: React.ReactNode;}) => {
	    
	const [formState, dispatch]: reducerDestructure = useReducer(
		formsReducer,
		initialState,
	);

    const [isLogged, setIsLogged] = useState<boolean>(false);
    useEffect(() => {
        formState.isFormValid === true ? setIsLogged(true) : setIsLogged(false);
    }, [formState.isFormValid]);

	return (
		<UserContext.Provider value={{ formState, dispatch}}>
			{children}
		</UserContext.Provider>
	);
};
