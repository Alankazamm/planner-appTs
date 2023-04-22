
import { BrowserRouter } from "react-router-dom";

import { UserContextProvider } from "./contexts/usersContext";

import { AppRoutes } from "./routes/AppRoutes";
import { useContext, useEffect } from "react";
import { Amplify, API, Auth } from "aws-amplify";
import awsmobile from "./aws-exports";
import { GlobalStyle } from './styles';
import * as React from "react";
Auth.configure(awsmobile);
function App() {
  
	
	return (
		<BrowserRouter>
			<GlobalStyle />
			<UserContextProvider>
				<AppRoutes />
			</UserContextProvider>
		</BrowserRouter>
	);
}

export default App;
  