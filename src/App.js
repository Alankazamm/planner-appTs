import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./contexts/userContext";
import React from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { useEffect } from "react";
import awsmobile from "./aws-exports";
import { GlobalStyles } from './components/styles/index';
import { Amplify } from 'aws-amplify';
Amplify.configure(awsmobile);
function App() {
    useEffect(() => {
    }, []);
    return (React.createElement(BrowserRouter, null,
        React.createElement(GlobalStyles, null),
        React.createElement(UserContextProvider, null,
            React.createElement(AppRoutes, null))));
}
export default App;
