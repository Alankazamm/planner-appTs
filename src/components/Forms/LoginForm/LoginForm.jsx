// description: this is a form component that will be used to log in to dashboard
//hooks
import { useContext, useEffect, useState } from "react";
//styles
import { Input, LoginInputWrapper } from "../components/Input";
import { Icon } from "../components/Icon";
import { TooltipError } from "../../../styles";
import { Form } from "../styles";
//context
import { UserContext } from "../../../contexts/usersContext";
export const LoginForm = () => {
    //hooks
    const [errorUser, setErrorUser] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [iconIsInside, setIconIsInside] = useState({
        user: false,
        password: false,
    });
    const { formState, dispatch } = useContext(UserContext);
    //useEffects
    useEffect(() => {
        setErrorUser(formState.user.hasError);
    }, [formState.user.hasError]);
    useEffect(() => {
        setErrorPassword(formState.loginPassword.hasError);
    }, [formState.loginPassword.hasError]);
    //manages the icons inside or not, and remove the error state from the formstate(to remove error markups)
    const inputHandler = (e) => {
        dispatch({
            type: "UPDATE_FORM",
            payload: { name: e.target.name, value: e.target.value },
        });
        e.target.value !== ""
            ? e.target.name === "user"
                ? setIconIsInside({ ...iconIsInside, user: true })
                : setIconIsInside({ ...iconIsInside, password: true })
            : e.target.name === "user"
                ? setIconIsInside({ ...iconIsInside, user: false })
                : setIconIsInside({ ...iconIsInside, password: false });
    };
    return (<Form page="login" hasError={formState.user.hasError || formState.loginPassword.hasError}>
			<h2>Login</h2>
			<LoginInputWrapper>
				<div>
					<Input type="text" name="user" onChange={inputHandler} onFocus={() => setIconIsInside({ ...iconIsInside, user: true })} onBlur={(e) => e.target.value === ""
            ? setIconIsInside({ ...iconIsInside, user: false })
            : null} value={formState.user.value} placeholder="user name" hasError={formState.user.hasError}/>
					{errorUser && (<TooltipError page="login">{formState.user.error}</TooltipError>)}
				</div>

				<Icon icon="userIcon" hasError={errorUser} iconIsInside={iconIsInside.user}/>
			</LoginInputWrapper>
			<LoginInputWrapper>
				<div>
					<Input type="password" name="loginPassword" onChange={inputHandler} onFocus={() => setIconIsInside({ ...iconIsInside, password: true })} onBlur={(e) => e.target.value === ""
            ? setIconIsInside({ ...iconIsInside, password: false })
            : null} value={formState.loginPassword.value} placeholder="password" hasError={formState.loginPassword.hasError}/>
					{errorPassword && (<TooltipError page="login">
							{formState.loginPassword.error}
						</TooltipError>)}
				</div>

				<Icon icon="passwordIcon" hasError={errorPassword} iconIsInside={iconIsInside.password}/>
			</LoginInputWrapper>
			<div className="errorDiv">
				<span className="error">
					Wow, invalid username or password. Please, try again!
				</span>
			</div>
		</Form>);
};
