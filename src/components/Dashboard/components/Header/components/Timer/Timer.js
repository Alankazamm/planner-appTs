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
exports.Timer = void 0;
//description: this component is a timer that shows the current date and time
//format: 12:00 PM, 1st of January, 2021
const React = __importStar(require("react"));
// hooks
const customTimerHook_1 = require("../../../../../../hooks/customTimerHook");
// styles
const styles_1 = require("./styles");
const Timer = () => {
    const time = (0, customTimerHook_1.useTimer)();
    return (React.createElement(styles_1.TimerContainer, null,
        React.createElement("div", { className: "hour" }, time.hoursMin),
        React.createElement("div", { className: "date" },
            React.createElement("span", null, time.month),
            React.createElement("span", null, " "),
            React.createElement("span", null,
                time.day,
                ", "),
            React.createElement("span", null,
                " ",
                time.year))));
};
exports.Timer = Timer;
//# sourceMappingURL=Timer.js.map