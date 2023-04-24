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
exports.TaskWarnigModal = void 0;
const styles_1 = require("../styles");
const icon_warning_svg_1 = __importDefault(require("/src/assets/svg/icon-warning.svg"));
const React = __importStar(require("react"));
const TaskWarnigModal = ({ toggleModal }) => {
    return (React.createElement(styles_1.WarningModal, null,
        React.createElement("div", { className: "warningModalContent" },
            React.createElement("div", { className: "warnigModalTitle" },
                React.createElement("img", { src: icon_warning_svg_1.default, alt: "warning icon" }),
                React.createElement("h2", null, "Warning")),
            React.createElement("div", { className: "warningModalText" },
                React.createElement("p", null, "Maybe there is more tasks than the display limit. Please, try to filter the tasks by desciption if you are not able to find the task you are looking for.")),
            React.createElement("div", { className: "warningModalButtons" },
                React.createElement("button", { className: "closeButton", onClick: e => toggleModal(false) }, "Ok")))));
};
exports.TaskWarnigModal = TaskWarnigModal;
//# sourceMappingURL=TaskWarnigModal.js.map