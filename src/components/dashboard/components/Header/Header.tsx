//description: This is the header component for the dashboard page
//it contains the header text, timer, weather and the logout button

//components
import { Timer } from './components/Timer';
import { Weather } from './components/Weather';
import { Logout } from './components/Logout';
import { DashHeaderContainer } from './styles';
import { HeaderText } from './../../../common/header/Header';
import React from 'react';
//styles


export const DashboardHeader = () => {
    
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

