System.register(["react", "../../../Redirect/Redirect", "./styles", "/src/assets/svg/spinner-uol.svg"], function (exports_1, context_1) {
    "use strict";
    var React, Redirect_1, styles_1, spinner_uol_svg_1, FormButton;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (Redirect_1_1) {
                Redirect_1 = Redirect_1_1;
            },
            function (styles_1_1) {
                styles_1 = styles_1_1;
            },
            function (spinner_uol_svg_1_1) {
                spinner_uol_svg_1 = spinner_uol_svg_1_1;
            }
        ],
        execute: function () {
            exports_1("FormButton", FormButton = (props) => {
                return (React.createElement(styles_1.StyledFormBtn, null,
                    props.isLoading ? React.createElement("img", { alt: "loading spinner", src: spinner_uol_svg_1.default }) : React.createElement("button", { onClick: props.onClick }, props.text),
                    React.createElement(Redirect_1.Redirect, { page: props.page, text: props.redirectText })));
            });
        }
    };
});
//# sourceMappingURL=FormButton.js.map