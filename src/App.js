"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const usersContext_1 = require("./contexts/usersContext");
const AppRoutes_1 = require("./routes/AppRoutes");
const aws_amplify_1 = require("aws-amplify");
const aws_exports_1 = __importDefault(require("./aws-exports"));
const styles_1 = require("./styles");
const React = __importStar(require("react"));
aws_amplify_1.Auth.configure(aws_exports_1.default);
function App() {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(styles_1.GlobalStyle, null),
        React.createElement(usersContext_1.UserContextProvider, null,
            React.createElement(AppRoutes_1.AppRoutes, null))));
}
exports.default = App;
//# sourceMappingURL=App.js.map