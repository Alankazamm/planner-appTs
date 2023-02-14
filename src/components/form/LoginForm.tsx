// description: this is a form component that will be used to log in to dashboard
//hooks
import React, { useState } from "react";
import { Form } from "./Form.styles";
import {Icon} from "./icon/Icon";
//styles
import { Input } from "./inputs/styles/Input.styles";
import { LoginInputWrapper } from "./inputs/styles/InputWrapper.styles";



export const LoginForm = () => {
    //hooks
	const [user, setUser] = useState({ value: "", hasError: false });
	const [password, setPassword] = useState({ value: "", hasError: false });
    const [iconIsInside, setIconIsInside] = useState({user: false, password: false});

    //functions
	const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "user") {
			setUser({ ...user, value: e.target.value });
		} else if (e.target.name === "password") {
			setPassword({ ...password, value: e.target.value });
        }
        if (e.target.value !== "") {
            if (e.target.name === "user") {
                setIconIsInside({...iconIsInside, user: true});
            } else if (e.target.name === "password") {
                setIconIsInside({...iconIsInside, password: true});
            }
        } else {
            if (e.target.name === "user") {
                setIconIsInside({...iconIsInside, user: false});
            } else if (e.target.name === "password") {
                setIconIsInside({...iconIsInside, password: false});
            }
        }
    };
    
	return (
		<Form page="login" hasError={password.hasError || user.hasError ? true : false}>
			
			<h2>Login</h2>
			<LoginInputWrapper>
				<Input
					type="text"
					name="user"
                    onChange={inputHandler}
                    onFocus={() => setIconIsInside({ ...iconIsInside, user: true })}
                    onBlur={(e) => e.target.value === "" ? setIconIsInside({ ...iconIsInside, user: false }) : null}
					value={user.value}
					placeholder="user name"
					hasError={user.hasError}
				/>
				<Icon icon="userIcon" iconIsInside={iconIsInside.user} />
			</LoginInputWrapper>
			<LoginInputWrapper>
				<Input
					type="password"
					name="password"
                    onChange={inputHandler}
                    onFocus={() => setIconIsInside({ ...iconIsInside, password: true })}
                    onBlur={(e) => e.target.value === "" ? setIconIsInside({ ...iconIsInside, password: false }) : null}
					value={password.value}
					placeholder="password"
					hasError={password.hasError}
				/>
				<Icon icon="passwordIcon" iconIsInside={iconIsInside.password} />
			</LoginInputWrapper>
		</Form>
	);
};
