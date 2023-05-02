"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const userContext_1 = require("./contexts/userContext");
const AppRoutes_1 = require("./routes/AppRoutes");
const react_1 = require("react");
const aws_exports_1 = __importDefault(require("./aws-exports"));
const index_1 = require("./components/styles/index");
const aws_amplify_1 = require("aws-amplify");
aws_amplify_1.Amplify.configure(aws_exports_1.default);
function App() {
    (0, react_1.useEffect)(() => {
    }, []);
    return (<react_router_dom_1.BrowserRouter>
			<index_1.GlobalStyles />
			<userContext_1.UserContextProvider>
				<AppRoutes_1.AppRoutes />
			</userContext_1.UserContextProvider>
		</react_router_dom_1.BrowserRouter>);
}
exports.default = App;
