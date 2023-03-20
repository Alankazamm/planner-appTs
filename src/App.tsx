import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./components/common/GlobalStyles.styles";
import { UserContextProvider } from "./contexts/userContext";

import { AppRoutes } from "./routes/AppRoutes";
import { useEffect } from "react";
import { Amplify, API } from "aws-amplify";
import awsmobile from "./aws-exports";
Amplify.configure(awsmobile);



function App() {
  useEffect(() => {
   
    try {
      API.get("plannerprojectapi", "/events/filter?userId=79b4ef01-e9f0-4200-b09f-aae9e3ed729f", {}).then(
        (response) => {
          console.log(response);
        }
      );
    } catch (error) {
      console.log(error);
    }
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
  