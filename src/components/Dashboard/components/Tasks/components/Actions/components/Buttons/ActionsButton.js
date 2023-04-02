import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import plusIcon from "/src/assets/svg/btn-plus.svg";
import minusIcon from "/src/assets/svg/btn-minus.svg";
import { StyledActionButton } from "./StyledActionButton.styles";
export const ActionsButton = ({ onClick, icon, text, }) => {
    return (_jsx(StyledActionButton, { icon: icon, children: _jsxs("div", { className: "tasksButton", onClick: onClick, children: [_jsx("img", { src: icon === "plusIcon" ? plusIcon : minusIcon, alt: "" }), _jsx("span", { children: text }), " "] }) }));
};
