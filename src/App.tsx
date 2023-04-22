
import { BrowserRouter } from "react-router-dom";

import { UserContextProvider } from "./contexts/UserContext";

import { AppRoutes } from "./routes/AppRoutes";
import { useContext, useEffect } from "react";
import { Amplify, API, Auth } from "aws-amplify";
import awsmobile from "./aws-exports";
import { GlobalStyle } from './styles';
Amplify.configure(awsmobile);
Auth.configure(awsmobile);
function App() {
  
  
//   useEffect(() => {
    
//   }, []);


        

	
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
  