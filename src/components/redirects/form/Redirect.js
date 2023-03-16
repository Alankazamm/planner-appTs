import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { RedirectWrapper } from './RedirectWrapper';
export const Redirect = ({ page, text }) => {
    return (_jsx(RedirectWrapper, { children: _jsxs("p", { children: [text, "  ", _jsx("a", { href: `/${page}`, children: page })] }) }));
};
