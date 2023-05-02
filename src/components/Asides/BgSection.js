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
};
