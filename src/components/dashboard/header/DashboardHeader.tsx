//description: This is the header component for the dashboard page
//it contains the header text, timer, weather and the logout button

//components
import { useEffect } from "react";
import { HeaderText } from "../../common/header/Header";
import Logout from "../logout/Logout";
import Timer from "../timer/Timer";
import Weather from "../weather/Weather";

//styles
import { DashHeaderContainer } from "../containers/DashHeaderContainer.styles";

const DashboardHeader = () => {
    
	return (
		<DashHeaderContainer>
			<HeaderText
				page="dashboard"
				title="Weekly Planner"
				description="Use this planner to organize your daily issues"
            />
            <Timer />
            <Weather />
            <Logout />
		</DashHeaderContainer>
	);
};

export default DashboardHeader;
