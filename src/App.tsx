import { BrowserRouter } from "react-router-dom";

import { UserContextProvider } from "./contexts/userContext";

import { AppRoutes } from "./routes/AppRoutes";
import { useContext, useEffect } from "react";
import { Amplify, API, Auth } from "aws-amplify";
import awsmobile from "./aws-exports";
import { GlobalStyles } from './components/styles/index';
Amplify.configure(awsmobile);



function App() {
  
  
  useEffect(() => {
    
  }, []);


        

	
	return (
		<BrowserRouter>
			<GlobalStyles />
			<UserContextProvider>
				<AppRoutes />
			</UserContextProvider>
		</BrowserRouter>
	);
}

export default App;
  