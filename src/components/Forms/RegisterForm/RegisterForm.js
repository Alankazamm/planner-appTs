System.register(["react", "../components/Input/Input.styles", "../components/Input/Label.styles", "../components/Input/InputWrapper.styles", "../styles", "../../../reducers/formReducer", "../../../contexts/usersContext", "../../../styles"], function (exports_1, context_1) {
    "use strict";
    var react_1, React, Input_styles_1, Label_styles_1, InputWrapper_styles_1, styles_1, formReducer_1, usersContext_1, styles_2, RegisterForm;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (react_1_1) {
                react_1 = react_1_1;
                React = react_1_1;
            },
            function (Input_styles_1_1) {
                Input_styles_1 = Input_styles_1_1;
            },
            function (Label_styles_1_1) {
                Label_styles_1 = Label_styles_1_1;
            },
            function (InputWrapper_styles_1_1) {
                InputWrapper_styles_1 = InputWrapper_styles_1_1;
            },
            function (styles_1_1) {
                styles_1 = styles_1_1;
            },
            function (formReducer_1_1) {
                formReducer_1 = formReducer_1_1;
            },
            function (usersContext_1_1) {
                usersContext_1 = usersContext_1_1;
            },
            function (styles_2_1) {
                styles_2 = styles_2_1;
            }
        ],
        execute: function () {
            exports_1("RegisterForm", RegisterForm = () => {
                const { formState, dispatch } = react_1.useContext(usersContext_1.UserContext);
                //send the input value to the reducer on change
                const inputHandler = (e) => {
                    dispatch({ type: formReducer_1.ActionType.UPDATE_FORM, payload: { name: e.target.name, value: e.target.value } });
                };
                return (React.createElement(styles_1.Form, { page: "signup" },
                    React.createElement(InputWrapper_styles_1.InputWrapper, null,
                        React.createElement(Label_styles_1.Label, { htmlFor: "firstName" }, "first name"),
                        React.createElement(Input_styles_1.Input, { type: "text", name: "firstName", onChange: inputHandler, value: formState.firstName.value, placeholder: "Your first name", hasError: formState.firstName.hasError }),
                        formState.firstName.hasError && React.createElement(styles_2.TooltipError, null, formState.firstName.error)),
                    React.createElement(InputWrapper_styles_1.InputWrapper, null,
                        React.createElement(Label_styles_1.Label, { htmlFor: "lastName" }, "last name"),
                        React.createElement(Input_styles_1.Input, { type: "text", name: "lastName", onChange: inputHandler, value: formState.lastName.value, placeholder: "Your last name", hasError: formState.lastName.hasError }),
                        formState.lastName.hasError && React.createElement(styles_2.TooltipError, null, formState.lastName.error)),
                    React.createElement(InputWrapper_styles_1.InputWrapper, null,
                        React.createElement(Label_styles_1.Label, { htmlFor: "birthDate" }, "birth date"),
                        React.createElement(Input_styles_1.Input, { type: "date", name: "birthDate", onChange: inputHandler, value: formState.birthDate.value, placeholder: "MM/DD/YYYY", hasError: formState.birthDate.hasError }),
                        formState.birthDate.hasError && React.createElement(styles_2.TooltipError, null, formState.birthDate.error)),
                    React.createElement(InputWrapper_styles_1.InputWrapper, null,
                        React.createElement(Label_styles_1.Label, { htmlFor: "country" }, "Country"),
                        React.createElement(Input_styles_1.Input, { type: "text", name: "country", onChange: inputHandler, value: formState.country.value, placeholder: "Your Country", hasError: formState.country.hasError }),
                        formState.country.hasError && React.createElement(styles_2.TooltipError, null, formState.country.error)),
                    React.createElement(InputWrapper_styles_1.InputWrapper, null,
                        React.createElement(Label_styles_1.Label, { htmlFor: "city" }, "City"),
                        React.createElement(Input_styles_1.Input, { type: "city", name: "city", onChange: inputHandler, value: formState.city.value, placeholder: "Your City", hasError: formState.city.hasError }),
                        formState.city.hasError && React.createElement(styles_2.TooltipError, null, formState.city.error)),
                    React.createElement(InputWrapper_styles_1.InputWrapper, null,
                        React.createElement(Label_styles_1.Label, { htmlFor: "email" }, "e-mail"),
                        React.createElement(Input_styles_1.Input, { type: "email", name: "email", onChange: inputHandler, value: formState.email.value, placeholder: "A valid e-mail here", hasError: formState.email.hasError }),
                        formState.email.hasError && React.createElement(styles_2.TooltipError, null, formState.email.error)),
                    React.createElement(InputWrapper_styles_1.InputWrapper, null,
                        React.createElement(Label_styles_1.Label, { htmlFor: "password" }, "password"),
                        React.createElement(Input_styles_1.Input, { type: "password", name: "password", onChange: inputHandler, value: formState.password.value, placeholder: "Your password", hasError: formState.password.hasError }),
                        formState.password.hasError && React.createElement(styles_2.TooltipError, null, formState.password.error)),
                    React.createElement(InputWrapper_styles_1.InputWrapper, null,
                        React.createElement(Label_styles_1.Label, { htmlFor: "confirmPassword" }, "password"),
                        React.createElement(Input_styles_1.Input, { type: "password", name: "confirmPassword", onChange: inputHandler, value: formState.confirmPassword.value, placeholder: "Comfirm your password", hasError: formState.confirmPassword.hasError || formState.password.hasError }),
                        (formState.confirmPassword.hasError) && React.createElement(styles_2.TooltipError, null, formState.confirmPassword.error))));
            });
        }
    };
});
//# sourceMappingURL=RegisterForm.js.map