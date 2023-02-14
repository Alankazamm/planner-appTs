import { AxiosResponse } from "axios";
import axiosInstance from "../helpers/axios";
import { formState } from "../reducers/formReducer";
let response: any;
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
}:registerData) => {

    axiosInstance.post('/users/sign-up', {
        firstName,
        lastName,
        birthDate,
        country,
        city,
        email,
        password,
        confirmPassword,
    }).then((res) => {
        console.log(res)
        response = res
    }).catch((err) => {
        console.log(err)
        response = err
    })
    return response
   

}