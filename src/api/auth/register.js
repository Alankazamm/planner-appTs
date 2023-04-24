"use strict";
//description: this function is used to register a new user, it uses the axios instance to send the data to the server
// and then it dispatches the data to the reducer
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const formReducer_1 = require("../../reducers/formReducer");
const aws_amplify_1 = require("aws-amplify");
const aws_amplify_2 = require("aws-amplify");
const aws_exports_js_1 = __importDefault(require("../../aws-exports.js"));
const errorsHandler_1 = require("../utils/errorsHandler");
aws_amplify_2.Amplify.configure(aws_exports_js_1.default);
const register = ({ firstName, lastName, birthDate, country, city, email, password, confirmPassword, }) => (dispatch) => {
    dispatch({ type: formReducer_1.ActionType.REGISTER_LOADING });
    //check all data and push errors if it have
    let arrErrors = [];
    //firstName errors check
    firstName === "" || firstName === undefined || firstName === null ? arrErrors.push("First name is required") : null;
    firstName.trim().length < 2 ? arrErrors.push("First name must be at least 2 characters") : null;
    //lastName errors check
    lastName === "" || lastName === undefined || lastName === null ? arrErrors.push("Last name is required") : null;
    lastName.trim().length < 1 ? arrErrors.push("Last name must be at least 1 characters") : null;
    //birthDate errors check
    birthDate === "" || birthDate === undefined || birthDate === null ? arrErrors.push("Birth date is required") : null;
    //check if birthdate is before actual date
    const birthDateDate = new Date(birthDate);
    const today = new Date();
    if (birthDateDate > today) {
        arrErrors.push("Birth date must be before today");
    }
    //country errors check
    country === "" || country === undefined || country === null ? arrErrors.push("Country is required") : null;
    //city errors check
    city === "" || city === undefined || city === null ? arrErrors.push("City is required") : null;
    //email errors check
    email === "" || email === undefined || email === null ? arrErrors.push("Email is required") : null;
    //regex for email validation
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    !emailRegex.test(email) ? arrErrors.push("Email is not valid") : null;
    //password errors check
    password === "" || password === undefined || password === null ? arrErrors.push("Password is required") : null;
    password.trim().length < 8 ? arrErrors.push("Password must be at least 8 characters") : null;
    //confirmPassword errors check
    confirmPassword === "" || confirmPassword === undefined || confirmPassword === null ? arrErrors.push("Confirm password is required") : null;
    password !== confirmPassword ? arrErrors.push("Passwords do not match") : null;
    //if there are errors, dispatch them to the reducer
    if (arrErrors.length > 0) {
        dispatch({ type: formReducer_1.ActionType.REGISTER_FAIL, payload: arrErrors });
        return;
    }
    //if there are no errors, send the data to the server
    try {
        //remove all non numeric characters from the birthDate
        birthDate = birthDate.replace(/\D/g, "");
        aws_amplify_1.Auth.signUp({
            username: email,
            password: password,
            attributes: {
                'custom:firstName': firstName,
                'custom:lastName': lastName,
                'custom:birthDate': birthDate,
                'custom:country': country,
                'custom:city': city,
            }
        })
            .then((data) => {
            //send data to  dynamoDB
            // try {
            //     API.post("plannerprojectapi", "/users", {
            //         body: {
            //             id: data.userSub,
            //             firstName: firstName,
            //             lastName: lastName,
            //             birthDate: birthDate,
            //             country: country,
            //             city: city,
            //             email: email,
            //             password: password,
            //         }
            //     }).then((response) => {
            //         console.log(response);
            //     });
            // } catch (error) {
            //     console.log(error);
            // }
            //get data from dynamoDB
            try {
                aws_amplify_2.API.get("plannerprojectapi", `/users/${data.userSub}`, {}).then((response) => {
                    console.log(response);
                });
            }
            catch (error) {
                console.log(error);
            }
            //dispatch data to reducer
            dispatch({ type: formReducer_1.ActionType.REGISTER_SUCCESS, payload: data });
        }).catch((err) => {
            let arrErrors = [];
            const error = (0, errorsHandler_1.errorsHandler)(err);
            arrErrors.push(error);
            dispatch({ type: formReducer_1.ActionType.REGISTER_FAIL, payload: arrErrors });
        });
    }
    catch (err) {
        let arrErrors = [];
        const error = (0, errorsHandler_1.errorsHandler)(err);
        arrErrors.push(error);
        dispatch({ type: formReducer_1.ActionType.REGISTER_FAIL, payload: arrErrors });
    }
};
exports.register = register;
// 
//         try {
//             Auth.signUp({
//                 username: email,
//                 password: password,
//                 attributes: {
//                     email: email,
//                     name: firstName,
//                     family_name: lastName,
//                     birthdate: birthDate,
//                     'custom:country': country,
//                     'custom:city': city,
//                 }
//             })
//                 .then((data) => {
//                     dispatch({ type: ActionType.REGISTER_SUCCESS, payload: data });
//                 }).catch((err) => {
//                     console.log(err + "error");
//                     let arrErrors = [];
//                     if (err.response.data.hasOwnProperty('errors')) {
//                         for (let key in err.response.data.errors) {
//                             arrErrors.push(err.response.data.errors[key]);
//                         }
//                     } else {
//                         arrErrors.push(err.data);
//                     }
//                     dispatch({ type: ActionType.REGISTER_FAIL, payload: arrErrors });
//                 }).finally(() => {
//                     setTimeout(() => {
//                          dispatch({ type: ActionType.REGISTER_SUCCESS, payload: response });
//                     }, 1000);
//                 })
//         } catch (err) {
//             console.log(err + "error");
//             let arrErrors = [];
//                 arrErrors.push(err);
//             dispatch({ type: ActionType.REGISTER_FAIL, payload: arrErrors });
//         }
//# sourceMappingURL=register.js.map