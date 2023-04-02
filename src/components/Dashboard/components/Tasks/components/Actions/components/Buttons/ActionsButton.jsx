import plusIcon from "/src/assets/svg/btn-plus.svg";
import minusIcon from "/src/assets/svg/btn-minus.svg";
import { StyledActionButton } from "./StyledActionButton.styles";
import React from "react";
export const ActionsButton = ({ onClick, icon, text, }) => {
    return (<StyledActionButton icon={icon}>
			<div className="tasksButton" onClick={onClick}>
				<img src={icon === "plusIcon" ? plusIcon : minusIcon} alt=""></img>
				<span>{text}</span>{" "}
			</div>
		</StyledActionButton>);
};
