import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// description: login page
//hooks
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//styles
import { MainWrapper } from "../components/common/MainWrapper.styles";
import { ContentContainer } from "../components/form/containers/ContentContainer";
import { BgSection } from "../components/aside/BgSection";
//contexts
import { UserContext } from './../contexts/userContext';
//types
import { ActionType } from "../reducers/formReducer";
//external funcs
import { login } from "../actions/auth/login";
// import { updateToken } from "../helpers/axios";
let firstRender = true;
export const LogIn = () => {
    //hook's calls
    const { formState, dispatch } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (firstRender) {
            firstRender = false;
            dispatch({ type: ActionType.LOG_USER });
            localStorage.removeItem("token");
            localStorage.removeItem("loggedUser");
        }
    }, []);
    useEffect(() => {
        if (formState.loginAuth.errors) {
            dispatch({ type: ActionType.VALIDATE_LOGIN });
        }
    }, [formState.loginAuth.errors]);
    // useEffect(() => {
    // 	if (formState.loginAuth.data) {
    // 		localStorage.setItem("token", formState.loginAuth.data.token);
    // 		localStorage.setItem("loggedUser", JSON.stringify(formState.loginAuth.data.user));
    // 		updateToken(formState.loginAuth.data.token)
    // 		navigate("/planner");
    // 	}
    // }, [formState.loginAuth.data]);
    const loginHandler = () => {
        const email = formState.user.value;
        const password = formState.loginPassword.value;
        login({ email, password })(dispatch);
        //return from api: data:{token:string, user:{birthDate, city, country, email, firstName, lastName, password,createdAt, _id} },
    };
    return (_jsxs(MainWrapper, { children: [_jsx(ContentContainer, {}), _jsx(BgSection, {})] }));
};
