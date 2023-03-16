import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./components/common/GlobalStyles.styles";
import { UserContextProvider } from "./contexts/userContext";
import { Amplify, API } from "aws-amplify";
import awsmobile from "./aws-exports";
import { AppRoutes } from "./routes/AppRoutes";
import { useEffect } from "react";

Amplify.configure(awsmobile);

function App() {
  useEffect(() => {
    try {
      API.get("plannerprojectapi", "/users/eed8066f-3ee1-4f15-9b2c-0542017e46a0", {}).then((response) => {
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
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
  