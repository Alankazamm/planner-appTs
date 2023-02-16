import React from "react";
import plusIcon from "/src/assets/svg/btn-plus.svg";
import minusIcon from "/src/assets/svg/btn-minus.svg";
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
