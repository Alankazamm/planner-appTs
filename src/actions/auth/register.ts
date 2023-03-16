//description: this file is used to register a new user, it uses the axios instance to send the data to the server
// and then it dispatches the data to the reducer

import { ActionType } from "../../reducers/formReducer";
import { Auth } from "aws-amplify";

let response: any;

//types
interface registerData {
    firstName: string;
    lastName: string;
    birthDate: string;
    country: string;
    city: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const register = ({
    firstName,
    lastName,
    birthDate,
    country,
    city,
    email,
    password,
    confirmPassword,
}:registerData) => (dispatch:any) =>{

    dispatch({ type: ActionType.REGISTER_LOADING });

    
    Auth.signUp({
        username: email,
        password: password,
        attributes: {
            email: email,
            "custom:firstName": firstName,
            "custom:lastName": lastName,
            "custom:birthDate": birthDate,
            "custom:country": country,
            "custom:city": city,
        },
    }).then((data) => {
        console.log(data);
        dispatch({ type: ActionType.REGISTER_SUCCESS, payload: data });
    }
    ).catch((err) => {
        console.log(err);
            let arrErrors = [];
            if (err.response.data.hasOwnProperty('errors')){
                for (let key in err.response.data.errors) {
                    arrErrors.push(err.response.data.errors[key]);
                }
            } else {
                arrErrors.push(err.data);
            }
            dispatch({ type: ActionType.REGISTER_FAIL, payload: arrErrors });
        })
        return response
}