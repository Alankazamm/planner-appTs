System.register(["react", "../../../../../../contexts/usersContext", "./styles", "/src/assets/svg/icon-logo.svg", "/src/assets/svg/btn-logout.svg"], function (exports_1, context_1) {
    "use strict";
    var React, react_1, usersContext_1, styles_1, icon_logo_svg_1, btn_logout_svg_1, Logout;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
                react_1 = React_1;
            },
            function (usersContext_1_1) {
                usersContext_1 = usersContext_1_1;
            },
            function (styles_1_1) {
                styles_1 = styles_1_1;
            },
            function (icon_logo_svg_1_1) {
                icon_logo_svg_1 = icon_logo_svg_1_1;
            },
            function (btn_logout_svg_1_1) {
                btn_logout_svg_1 = btn_logout_svg_1_1;
            }
        ],
        execute: function () {
            exports_1("Logout", Logout = () => {
                const { signout } = react_1.useContext(usersContext_1.UserContext);
                const logoutHandler = () => {
                    signout();
                };
                return (React.createElement(styles_1.LogoutContainer, null,
                    React.createElement("a", { href: "https://compass.uol/en/home/" },
                        React.createElement("img", { src: icon_logo_svg_1.default, alt: "" })),
                    React.createElement("div", null,
                        React.createElement("img", { src: btn_logout_svg_1.default, alt: "" }),
                        React.createElement("span", { onClick: logoutHandler }, "Logout"))));
            });
        }
    };
});
//# sourceMappingURL=Logout.js.map