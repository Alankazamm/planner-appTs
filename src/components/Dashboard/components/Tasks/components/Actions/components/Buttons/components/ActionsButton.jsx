//assets
import plusIcon from "/src/assets/svg/btn-plus.svg";
import minusIcon from "/src/assets/svg/btn-minus.svg";
//styles
import { StyledActionButton } from "../styles";
export const ActionsButton = ({ onClick, icon, text, }) => {
    return (<StyledActionButton icon={icon}>
			<div className="tasksButton" onClick={onClick}>
				<img src={icon === "plusIcon" ? plusIcon : minusIcon} alt=""></img>
				<span>{text}</span>{" "}
			</div>
		</StyledActionButton>);
};
