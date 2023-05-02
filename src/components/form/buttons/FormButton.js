//description: this burron is used in login and register forms
import React from "react";
//components
import { Redirect } from "../../redirects/form/Redirect";
//styles
import { StyledFormBtn } from "./FormButton.styles";
//assets
import spinner from '/src/assets/svg/spinner-uol.svg';
export const FormButton = (props) => {
    return (React.createElement(StyledFormBtn, null,
        props.isLoading ? React.createElement("img", { alt: "loading spinner", src: spinner }) : React.createElement("button", { onClick: props.onClick }, props.text),
        React.createElement(Redirect, { page: props.page, text: props.redirectText })));
};
