import plusIcon from "/src/assets/svg/btn-plus.svg";
import minusIcon from "/src/assets/svg/btn-minus.svg";
import { StyledActionButton } from "./StyledActionButton.styles";
import React from "react";
export const ActionsButton = ({ onClick, icon, text, }) => {
    return (React.createElement(StyledActionButton, { icon: icon },
        React.createElement("div", { className: "tasksButton", onClick: onClick },
            React.createElement("img", { src: icon === "plusIcon" ? plusIcon : minusIcon, alt: "" }),
            React.createElement("span", null, text),
            " ")));
};
