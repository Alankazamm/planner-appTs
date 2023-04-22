<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import logo from '/src/assets/svg/icon-link.svg';
import { BgWrapper } from './BgSection.styles';
import React from "react";
export const BgSection = () => {
    let navigate = useNavigate();
    return (React.createElement(BgWrapper, null,
        React.createElement("a", { href: "https://compass.uol/en/home/", target: "_blank" },
            React.createElement("img", { alt: "logo", src: logo }),
            " ")));
=======
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import logo from '/src/assets/svg/icon-link.svg';
import { BgWrapper } from './BgSection.styles';
export const BgSection = () => {
    let navigate = useNavigate();
    return (_jsx(BgWrapper, { children: _jsxs("a", { href: "https://compass.uol/en/home/", target: "_blank", children: [_jsx("img", { alt: "logo", src: logo }), " "] }) }));
>>>>>>> 6b210278c6743696ebabf063426a42912cd965c8
};
