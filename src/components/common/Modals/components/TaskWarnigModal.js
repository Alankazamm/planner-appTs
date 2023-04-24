System.register(["../styles", "/src/assets/svg/icon-warning.svg", "react"], function (exports_1, context_1) {
    "use strict";
    var styles_1, icon_warning_svg_1, React, TaskWarnigModal;
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
            exports_1("TaskWarnigModal", TaskWarnigModal = ({ toggleModal }) => {
                return (React.createElement(styles_1.WarningModal, null,
                    React.createElement("div", { className: "warningModalContent" },
                        React.createElement("div", { className: "warnigModalTitle" },
                            React.createElement("img", { src: icon_warning_svg_1.default, alt: "warning icon" }),
                            React.createElement("h2", null, "Warning")),
                        React.createElement("div", { className: "warningModalText" },
                            React.createElement("p", null, "Maybe there is more tasks than the display limit. Please, try to filter the tasks by desciption if you are not able to find the task you are looking for.")),
                        React.createElement("div", { className: "warningModalButtons" },
                            React.createElement("button", { className: "closeButton", onClick: e => toggleModal(false) }, "Ok")))));
            });
        }
    };
});
//# sourceMappingURL=TaskWarnigModal.js.map