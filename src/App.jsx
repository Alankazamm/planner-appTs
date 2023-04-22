import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./contexts/usersContext";
import { AppRoutes } from "./routes/AppRoutes";
import { Amplify, Auth } from "aws-amplify";
import awsmobile from "./aws-exports";
import { GlobalStyle } from './styles';
Amplify.configure(awsmobile);
Auth.configure(awsmobile);
function App() {
    //   useEffect(() => {
    //   }, []);
    return (<BrowserRouter>
			<GlobalStyle />
			<UserContextProvider>
				<AppRoutes />
			</UserContextProvider>
		</BrowserRouter>);
}
export default App;
