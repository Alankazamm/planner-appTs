import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./components/common/GlobalStyles.styles";
import { UserContextProvider } from "./contexts/userContext";

import { AppRoutes } from "./routes/AppRoutes";
import { useEffect } from "react";
import { Amplify, API, Auth } from "aws-amplify";
import awsmobile from "./aws-exports";
Amplify.configure(awsmobile);



function App() {
  useEffect(() => {
   
    try {
      Auth.currentSession().then((session) => {
        localStorage.setItem("sessionToken", session.getIdToken().getJwtToken());
        localStorage.setItem("sessionRefreshToken", session.getRefreshToken().getToken());
        localStorage.setItem("sessionAccessToken", session.getAccessToken().getJwtToken());
        localStorage.setItem("sessionExpires", session.getIdToken().getExpiration().toString());
      }
       
      );
    } catch (error) {
      console.log(error);//criar modal aqui para usuario renovar o token
    }
    console.log(localStorage.getItem("sessionToken"));
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
  