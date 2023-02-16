import React from "react";
import plusIcon from "/src/assets/plus.svg";
import minusIcon from "/src/assets/minus.svg";
import { StyledActionButton } from "./StyledActionButton.styles";

export const ActionsButton = ({
	onClick,
	icon,
	text,
}: {
	onClick: React.MouseEventHandler<HTMLDivElement>;
	icon: string;
	text: string;
}) => {
	return (
		<StyledActionButton icon={icon}>
			<div className="tasksButton" onClick={onClick}>
				<img src={icon === "plusIcon" ? plusIcon : minusIcon} alt=""></img>
				<span>{text}</span>{" "}
			</div>
		</StyledActionButton>
	);
};
