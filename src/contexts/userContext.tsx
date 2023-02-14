import { createContext, useState, useEffect, Dispatch, useReducer } from "react";
import {
	formsReducer,
	formState,
	action,
	ActionType,
} from "/src/reducers/formReducer.ts";

const initialState: formState = {
	firstName: { value: "", hasError: false },
	lastName: { value: "", hasError: false },
	birthDate: { value: "", hasError: false },
	country: { value: "", hasError: false },
	city: { value: "", hasError: false },
	email: { value: "", hasError: false },
	password: { value: "", hasError: false },
	confirmPassword: { value: "", hasError: false },
	isFormValid: false,
};

type reducerDestructure = [formState, Dispatch<action>];

export const UserContext = createContext<any>({});
export const UserContextProvider = ({children}:{children: React.ReactNode}) => {
	
 
	

	const [formState, dispatch]: reducerDestructure = useReducer(formsReducer,initialState);
		
		

	return <UserContext.Provider value={{formState,dispatch}}>{children}</UserContext.Provider>;
};
