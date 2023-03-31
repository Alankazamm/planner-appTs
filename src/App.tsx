import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./components/styles/globalStyles.styles";
import { UserContext, UserContextProvider } from "./contexts/userContext";

import { AppRoutes } from "./routes/AppRoutes";
import { useContext, useEffect } from "react";
import { Amplify, API, Auth } from "aws-amplify";
import awsmobile from "./aws-exports";
Amplify.configure(awsmobile);



function App() {
  
  
  useEffect(() => {
    
  }, []);


        

	
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
  