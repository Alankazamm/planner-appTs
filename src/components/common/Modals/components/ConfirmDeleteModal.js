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
exports.ConfirmDeleteModal = void 0;
const styles_1 = require("../styles");
const icon_warning_svg_1 = __importDefault(require("/src/assets/svg/icon-warning.svg"));
const React = __importStar(require("react"));
const ConfirmDeleteModal = ({ actionFunction, value, showModal }) => {
    const actionHandler = () => {
        value.id ? actionFunction(value.id) : actionFunction(value.dayOfWeek);
        value.id ? showModal({ show: false, id: '' }) : showModal({ show: false, dayOfWeek: '' });
    };
    const cancelHandler = () => {
        value.id ? showModal({ show: false, id: '' }) : showModal({ show: false, dayOfWeek: '' });
    };
    return (React.createElement(styles_1.ConfirmModal, null,
        React.createElement("div", { className: "confirmModalContent" },
            React.createElement("div", { className: "confirmModalTitle" },
                React.createElement("img", { src: icon_warning_svg_1.default, alt: "warning icon" }),
                value.id && React.createElement("h2", null, "Are you sure you want to delete this task?"),
                value.dayOfWeek && React.createElement("h3", null,
                    "Are you sure you want to delete all tasks for ",
                    value.dayOfWeek,
                    "?")),
            React.createElement("div", { className: "confirmModalText" },
                React.createElement("p", null, "This action cannot be undone.")),
            React.createElement("div", { className: "confirmModalButtons" },
                React.createElement("button", { className: "closeButton", onClick: cancelHandler }, "Cancel"),
                React.createElement("button", { className: "confirmDeleteButton", onClick: actionHandler }, "Delete")))));
};
exports.ConfirmDeleteModal = ConfirmDeleteModal;
//# sourceMappingURL=ConfirmDeleteModal.js.map