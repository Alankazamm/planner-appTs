import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HeaderTextStyle } from "./Header.styles";
export const HeaderText = ({ page, title, description }) => {
    return (_jsxs(HeaderTextStyle, { page: page, title: title, description: description, children: [_jsx("h1", { children: title }), _jsx("p", { children: description })] }));
};
