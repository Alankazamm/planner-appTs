import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./components/common/GlobalStyles.styles";
import { UserContextProvider } from "./contexts/userContext";

import { AppRoutes } from "./routes/AppRoutes";
import { useEffect } from "react";



function App() {
  useEffect(() => {
   
    // try {
    //   API.post("plannerprojectapi", "/users", {
    //     body: {
          
    //       firstName: "test",
    //     }
    //   }).then((response) => {
    //     console.log(response);
    //   })
      
    // } catch (error) {
    //   console.log(error);
    // }
     

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
  