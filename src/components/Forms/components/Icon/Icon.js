System.register(["/src/assets/svg/icon-user.svg", "/src/assets/svg/icon-password.svg", "/src/assets/svg/icon-user-yellow.svg", "/src/assets/svg/icon-password-yellow.svg", "./styles", "react"], function (exports_1, context_1) {
    "use strict";
    var icon_user_svg_1, icon_password_svg_1, icon_user_yellow_svg_1, icon_password_yellow_svg_1, styles_1, React, Icon;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (icon_user_svg_1_1) {
                icon_user_svg_1 = icon_user_svg_1_1;
            },
            function (icon_password_svg_1_1) {
                icon_password_svg_1 = icon_password_svg_1_1;
            },
            function (icon_user_yellow_svg_1_1) {
                icon_user_yellow_svg_1 = icon_user_yellow_svg_1_1;
            },
            function (icon_password_yellow_svg_1_1) {
                icon_password_yellow_svg_1 = icon_password_yellow_svg_1_1;
            },
            function (styles_1_1) {
                styles_1 = styles_1_1;
            },
            function (React_1) {
                React = React_1;
            }
        ],
        execute: function () {
            exports_1("Icon", Icon = (props) => {
                return (React.createElement(styles_1.IconWrapper, { iconIsInside: props.iconIsInside },
                    React.createElement("img", { alt: "icon", src: props.icon === 'userIcon' ? (props.hasError === true ? icon_user_yellow_svg_1.default : icon_user_svg_1.default) : (props.hasError === true ? icon_password_yellow_svg_1.default : icon_password_svg_1.default), className: 'icon' })));
            });
        }
    };
});
//# sourceMappingURL=Icon.js.map