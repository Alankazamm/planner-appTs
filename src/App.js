import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./contexts/userContext";
import { AppRoutes } from "./routes/AppRoutes";
import { useEffect } from "react";
import { Amplify } from "aws-amplify";
import awsmobile from "./aws-exports";
import { GlobalStyles } from './components/styles/index';
Amplify.configure(awsmobile);
function App() {
    useEffect(() => {
    }, []);
    return (_jsxs(BrowserRouter, { children: [_jsx(GlobalStyles, {}), _jsx(UserContextProvider, { children: _jsx(AppRoutes, {}) })] }));
}
export default App;
