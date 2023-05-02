"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Planner = void 0;
//styles
const react_1 = require("react");
const RenewTokenModal_1 = require("../components/common/modals/RenewTokenModal");
const styles_1 = require("../components/Dashboard/styles");
//components
const react_2 = __importDefault(require("react"));
const userContext_1 = require("./../contexts/userContext");
const Header_1 = require("../components/Dashboard/components/Header/Header");
const TasksSection_1 = require("../components/Dashboard/components/Tasks/TasksSection");
const Planner = () => {
    const { displayRenewAccessTokenModal, setDisplayRenewAccessTokenModal } = (0, react_1.useContext)(userContext_1.UserContext);
    (0, react_1.useEffect)(() => {
        const time = localStorage.getItem('sessionExpires');
        console.log(time);
        const timer = setTimeout(() => {
            setDisplayRenewAccessTokenModal(true);
        }, time ? parseInt(time) - 100000 : 0);
        return () => {
            clearTimeout(timer);
        };
    }, [setDisplayRenewAccessTokenModal, displayRenewAccessTokenModal]);
    return (<styles_1.DashBoardContainer>
            {displayRenewAccessTokenModal === true && <RenewTokenModal_1.RenewTokenModal />}
            <Header_1.DashboardHeader />
          <TasksSection_1.TasksSection />
        </styles_1.DashBoardContainer>);
};
exports.Planner = Planner;
