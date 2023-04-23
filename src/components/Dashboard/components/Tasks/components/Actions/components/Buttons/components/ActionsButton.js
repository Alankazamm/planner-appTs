//assets
import plusIcon from "/src/assets/svg/btn-plus.svg";
import minusIcon from "/src/assets/svg/btn-minus.svg";
//styles
import { StyledActionButton } from "../styles";
import * as React from "react";
export const ActionsButton = ({ onClick, icon, text, }) => {
    return (React.createElement(StyledActionButton, { icon: icon },
        React.createElement("div", { className: "tasksButton", onClick: onClick },
            React.createElement("img", { src: icon === "plusIcon" ? plusIcon : minusIcon, alt: "" }),
            React.createElement("span", null, text),
            " ")));
};
//# sourceMappingURL=ActionsButton.js.map