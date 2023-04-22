import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./contexts/usersContext";
import { AppRoutes } from "./routes/AppRoutes";
import { Auth } from "aws-amplify";
import awsmobile from "./aws-exports";
import { GlobalStyle } from './styles';
import * as React from "react";
Auth.configure(awsmobile);
function App() {
    return (React.createElement(BrowserRouter, null,
        React.createElement(GlobalStyle, null),
        React.createElement(UserContextProvider, null,
            React.createElement(AppRoutes, null))));
}
export default App;
