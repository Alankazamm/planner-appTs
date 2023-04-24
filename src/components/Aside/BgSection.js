System.register(["/src/assets/svg/icon-link.svg", "./styles", "react"], function (exports_1, context_1) {
    "use strict";
    var icon_link_svg_1, styles_1, React, BgSection;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (icon_link_svg_1_1) {
                icon_link_svg_1 = icon_link_svg_1_1;
            },
            function (styles_1_1) {
                styles_1 = styles_1_1;
            },
            function (React_1) {
                React = React_1;
            }
        ],
        execute: function () {
            exports_1("BgSection", BgSection = () => {
                return (React.createElement(styles_1.BgWrapper, null,
                    React.createElement("a", { href: "https://compass.uol/en/home/", target: "_blank" },
                        React.createElement("img", { alt: "logo", src: icon_link_svg_1.default }),
                        " ")));
            });
        }
    };
});
//# sourceMappingURL=BgSection.js.map