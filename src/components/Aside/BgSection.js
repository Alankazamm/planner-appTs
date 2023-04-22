import logo from '/src/assets/svg/icon-link.svg';
import { BgWrapper } from './styles';
import * as React from "react";
export const BgSection = () => {
    return (React.createElement(BgWrapper, null,
        React.createElement("a", { href: "https://compass.uol/en/home/", target: "_blank" },
            React.createElement("img", { alt: "logo", src: logo }),
            " ")));
};
