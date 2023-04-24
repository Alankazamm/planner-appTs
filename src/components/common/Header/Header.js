System.register(["./styles", "react"], function (exports_1, context_1) {
    "use strict";
    var styles_1, React, HeaderText;
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
            exports_1("HeaderText", HeaderText = ({ page, title, description }) => {
                return (React.createElement(styles_1.HeaderTextStyle, { page: page, title: title, description: description },
                    React.createElement("h1", null, title),
                    React.createElement("p", null, description)));
            });
        }
    };
});
//# sourceMappingURL=Header.js.map