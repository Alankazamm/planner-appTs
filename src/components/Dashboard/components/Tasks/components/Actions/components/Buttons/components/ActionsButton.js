System.register(["/src/assets/svg/btn-plus.svg", "/src/assets/svg/btn-minus.svg", "../styles", "react"], function (exports_1, context_1) {
    "use strict";
    var btn_plus_svg_1, btn_minus_svg_1, styles_1, React, ActionsButton;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (btn_plus_svg_1_1) {
                btn_plus_svg_1 = btn_plus_svg_1_1;
            },
            function (btn_minus_svg_1_1) {
                btn_minus_svg_1 = btn_minus_svg_1_1;
            },
            function (styles_1_1) {
                styles_1 = styles_1_1;
            },
            function (React_1) {
                React = React_1;
            }
        ],
        execute: function () {
            exports_1("ActionsButton", ActionsButton = ({ onClick, icon, text, }) => {
                return (React.createElement(styles_1.StyledActionButton, { icon: icon },
                    React.createElement("div", { className: "tasksButton", onClick: onClick },
                        React.createElement("img", { src: icon === "plusIcon" ? btn_plus_svg_1.default : btn_minus_svg_1.default, alt: "" }),
                        React.createElement("span", null, text),
                        " ")));
            });
        }
    };
});
//# sourceMappingURL=ActionsButton.js.map