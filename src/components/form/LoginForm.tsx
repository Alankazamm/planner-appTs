// description: this is a form component that will be used to log in to dashboard
//hooks
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Form } from "./Form.styles";
import { Icon } from "./icon/Icon";

//styles
import { Input } from "./inputs/styles/Input.styles";
import { LoginInputWrapper } from "./inputs/styles/InputWrapper.styles";



export const LoginForm = () => {
    //hooks
    const [error, setError] = useState(false);
    const [iconIsInside, setIconIsInside] = useState({user: false, password: false});
    const { formState, dispatch } = useContext(UserContext);

    useEffect(() => {
        formState.loginPassword.hasError || formState.user.hasError ? setError(true) : setError(false)
    }, [formState.loginPassword.hasError, formState.user.hasError]);
    //functions
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
    
	return (
		<Form page="login" hasError={error} >
			
			<h2>Login</h2>
			<LoginInputWrapper>
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
				<Icon icon="userIcon" iconIsInside={iconIsInside.user} />
			</LoginInputWrapper>
			<LoginInputWrapper>
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
				<Icon icon="passwordIcon" iconIsInside={iconIsInside.password} />
            </LoginInputWrapper>
            {error &&<div className="errorDiv"><span className="error">Wow, invalid username or password. Please, try again!</span></div> }
		</Form>
	);
};
