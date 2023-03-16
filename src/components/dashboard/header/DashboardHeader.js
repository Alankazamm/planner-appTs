import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HeaderText } from "../../common/header/Header";
import Logout from "./logout/Logout";
import Timer from "./timer/Timer";
import Weather from "./weather/Weather";
//styles
import { DashHeaderContainer } from "./DashHeaderContainer.styles";
const DashboardHeader = () => {
    return (_jsxs(DashHeaderContainer, { children: [_jsx(HeaderText, { page: "dashboard", title: "Weekly Planner", description: "Use this planner to organize your daily issues" }), _jsx(Timer, {}), _jsx(Weather, {}), _jsx(Logout, {})] }));
};
export default DashboardHeader;
