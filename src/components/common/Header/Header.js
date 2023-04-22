import { HeaderTextStyle } from "./styles";
import * as React from "react";
export const HeaderText = ({ page, title, description }) => {
    return (React.createElement(HeaderTextStyle, { page: page, title: title, description: description },
        React.createElement("h1", null, title),
        React.createElement("p", null, description)));
};
