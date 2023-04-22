import { RedirectWrapper } from './styles';
import * as React from "react";
export const Redirect = ({ page, text }) => {
    return (React.createElement(RedirectWrapper, null,
        React.createElement("p", null,
            text,
            "  ",
            React.createElement("a", { href: `/${page}` }, page))));
};
//Already have an account?
