System.register(["./styles", "react"], function (exports_1, context_1) {
    "use strict";
    var styles_1, React, Redirect;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styles_1_1) {
                styles_1 = styles_1_1;
            },
            function (React_1) {
                React = React_1;
            }
        ],
        execute: function () {
            exports_1("Redirect", Redirect = ({ page, text }) => {
                return (React.createElement(styles_1.RedirectWrapper, null,
                    React.createElement("p", null,
                        text,
                        "  ",
                        React.createElement("a", { href: `/${page}` }, page))));
            });
        }
    };
});
//# sourceMappingURL=Redirect.js.map