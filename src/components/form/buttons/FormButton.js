import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//description: this burron is used in login and register forms
//components
import { Redirect } from "../../redirects/form/Redirect";
//styles
import { StyledFormBtn } from "./FormButton.styles";
//assets
const spinner = require('/src/assets/svg/spinner-uol.svg');
export const FormButton = (props) => {
    return (_jsxs(StyledFormBtn, { children: [props.isLoading ? _jsx("img", { src: spinner }) : _jsx("button", { onClick: props.onClick, children: props.text }), _jsx(Redirect, { page: props.page, text: props.redirectText })] }));
};
