System.register(["../styles", "/src/assets/svg/icon-warning.svg", "react"], function (exports_1, context_1) {
    "use strict";
    var styles_1, icon_warning_svg_1, React, ConfirmDeleteModal;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styles_1_1) {
                styles_1 = styles_1_1;
            },
            function (icon_warning_svg_1_1) {
                icon_warning_svg_1 = icon_warning_svg_1_1;
            },
            function (React_1) {
                React = React_1;
            }
        ],
        execute: function () {
            exports_1("ConfirmDeleteModal", ConfirmDeleteModal = ({ actionFunction, value, showModal }) => {
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
            });
        }
    };
});
//# sourceMappingURL=ConfirmDeleteModal.js.map