export type formItem = { value: string; hasError: boolean };
export type formState = {
    firstName: formItem,
    lastName: formItem,
    birthDate: formItem,
    country: formItem,
    city: formItem,
    email: formItem,
    password: formItem,
    confirmPassword: formItem,
    isFormValid: boolean,
}
export enum ActionType {
    UPDATE_FORM = 'UPDATE_FORM',
    VALIDATE_FORM = 'VALIDATE_FORM',
}
export type action =
    { type: ActionType.UPDATE_FORM, payload: { name: keyof formState; value: string } }
    | { type: ActionType.VALIDATE_FORM }

export const formsReducer = (state: formState, action: action): formState => {

    switch (action.type) {
        // this case updates the value of the input based on the name of the input
        case ActionType.UPDATE_FORM:
            const name = action.payload.name
            const value = action.payload.value
            return {
                ...state,
                [name as keyof formState]: { ...state[name] as formItem, value },
            }
        // this validation checks if the form is valid or not and sets the hasError property for each input
        case 'VALIDATE_FORM':
            for (const key in state) {
                switch (key) {
                    case "firstName":
                        state[key].value.trim() === "" &&
                            (!/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/.test(state[key].value)
                                ? state[key].hasError = true : state[key].hasError = false);
                        state[key].hasError = true;
                        break;
                    case "lastName":
                        state[key].value.trim() === "" &&
                            (!/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/.test(state[key].value)
                                ? state[key].hasError = true : state[key].hasError = false);
                        break;
                    case "birthDate":
                        state[key].value.trim() === "" &&
                            (!/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(state[key].value)
                                ? state[key].hasError = true : state[key].hasError = false);
                        break;
                    case "country":
                        state[key].value.trim() === "" &&
                            (!/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/.test(state[key].value)
                                ? state[key].hasError = true : state[key].hasError = false);
                        break;
                    case "city":
                        state[key].value.trim() === "" &&
                            (!/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/.test(state[key].value)
                                ? state[key].hasError = true : state[key].hasError = false);
                        break;
                    case "email":
                        state[key].value.trim() === "" &&
                            (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(state[key].value)
                                ? state[key].hasError = true : state[key].hasError = false);
                        break;
                    case "password":
                        state[key].value.trim() === "" &&
                            (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(state[key].value)
                                ? state[key].hasError = true : state[key].hasError = false);
                        break;
                    case "confirmPassword":
                        state[key].value.trim() === "" &&
                            (state[key].value !== state.password.value
                                ? state[key].hasError = true : state[key].hasError = false);
                        break;
                }
            }
            // this validation checks if the form is valid or not and sets the isFormValid property
            (state.firstName.hasError || state.lastName.hasError ||
                state.birthDate.hasError || state.country.hasError ||
                state.city.hasError || state.email.hasError ||
                state.password.hasError || state.confirmPassword.hasError) ?
                state.isFormValid = false : state.isFormValid = true;
            return state;
        default: return state;
    }
}



