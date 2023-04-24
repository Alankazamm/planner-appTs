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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Planner = void 0;
//hooks
const React = __importStar(require("react"));
const react_1 = require("react");
//styles
const styles_1 = require("../components/Dashboard/styles");
//components
const Dashboard_1 = require("../components/Dashboard");
const RenewTokenModal_1 = require("../components/common/Modals/components/RenewTokenModal");
//context
const usersContext_1 = require("../contexts/usersContext");
const Planner = () => {
    const { displayRenewAccessTokenModal, setDisplayRenewAccessTokenModal } = (0, react_1.useContext)(usersContext_1.UserContext);
    (0, react_1.useEffect)(() => {
        const time = localStorage.getItem('sessionExpires');
        const timer = setTimeout(() => {
            setDisplayRenewAccessTokenModal(true);
        }, time ? parseInt(time) - 100000 : 100000);
        return () => clearTimeout(timer);
    }, [setDisplayRenewAccessTokenModal, displayRenewAccessTokenModal]);
    return (React.createElement(styles_1.DashBoardContainer, null,
        displayRenewAccessTokenModal === true && React.createElement(RenewTokenModal_1.RenewTokenModal, null),
        React.createElement(Dashboard_1.DashboardHeader, null),
        React.createElement(Dashboard_1.TasksSection, null)));
};
exports.Planner = Planner;
//# sourceMappingURL=Planner.js.map