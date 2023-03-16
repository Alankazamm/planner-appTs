import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import logo from '/src/assets/svg/icon-link.svg';
import { BgWrapper } from './BgSection.styles';
export const BgSection = () => {
    let navigate = useNavigate();
    return (_jsx(BgWrapper, { children: _jsxs("a", { href: "https://compass.uol/en/home/", target: "_blank", children: [_jsx("img", { src: logo }), " "] }) }));
};
