// description: this is a form component that will be used to log in to dashboard
//hooks
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import ErrorTooltip from "../common/ErrorTooltip.styles";
import { Form } from "./Form.styles";
import { Icon } from "./icon/Icon";

//styles
import { Input } from "./inputs/styles/Input.styles";
import { LoginInputWrapper } from "./inputs/styles/InputWrapper.styles";



export const LoginForm = () => {
    //hooks
    const [errorUser, setErrorUser] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [iconIsInside, setIconIsInside] = useState({user: false, password: false});
    const { formState, dispatch } = useContext(UserContext);

    useEffect(() => {
        setErrorUser(formState.user.hasError);
    }, [formState.user.hasError]);
    useEffect(() => {
        setErrorPassword(formState.loginPassword.hasError);
    }, [formState.loginPassword.hasError]);

	const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "UPDATE_FORM", payload: { name: e.target.name, value: e.target.value } });
        
        if (e.target.value !== "") {
            e.target.name === "user" ? setIconIsInside({ ...iconIsInside, user: true })
                : setIconIsInside({ ...iconIsInside, password: true });
        } else {
            e.target.name === "user" ? setIconIsInside({ ...iconIsInside, user: false })   
                : setIconIsInside({ ...iconIsInside, password: false });
        }
    };
  

	return (// hasError={error} 
		<Form page="login" hasError={formState.user.hasError || formState.loginPassword.hasError}>
			
			<h2>Login</h2>
            <LoginInputWrapper>
                <div>
                    <Input
					type="text"
					name="user"
                    onChange={inputHandler}
                    onFocus={() => setIconIsInside({ ...iconIsInside, user: true })}
                    onBlur={(e) => e.target.value === "" ? setIconIsInside({ ...iconIsInside, user: false }) : null}
					value={formState.user.value}
					placeholder="user name"
					hasError={formState.user.hasError}
                />
                 {errorUser && <ErrorTooltip page="login">{formState.user.error}</ErrorTooltip>}
                </div>
				
				<Icon icon="userIcon" hasError={errorUser} iconIsInside={iconIsInside.user} />
			</LoginInputWrapper>
            <LoginInputWrapper>
                <div>
                    <Input
                        type="password"
                        name="loginPassword"
                        onChange={inputHandler}
                        onFocus={() => setIconIsInside({ ...iconIsInside, password: true })}
                        onBlur={(e) => e.target.value === "" ? setIconIsInside({ ...iconIsInside, password: false }) : null}
                        value={formState.loginPassword.value}
                        placeholder="password"
                        hasError={formState.loginPassword.hasError}
                    />
                    {errorPassword && <ErrorTooltip page="login">{formState.loginPassword.error}</ErrorTooltip>}
                </div>
				
				<Icon icon="passwordIcon" hasError={errorPassword} iconIsInside={iconIsInside.password} />
            </LoginInputWrapper>
            <div className="errorDiv"><span className="error">Wow, invalid username or password. Please, try again!</span></div>
		</Form>
	);
};
