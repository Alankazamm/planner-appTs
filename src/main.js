System.register(["react-dom/client", "./App", "react"], function (exports_1, context_1) {
    "use strict";
    var ReactDOM, App_1, React;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (ReactDOM_1) {
                ReactDOM = ReactDOM_1;
            },
            function (App_1_1) {
                App_1 = App_1_1;
            },
            function (React_1) {
                React = React_1;
            }
        ],
        execute: function () {
            ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App_1.default, null));
        }
    };
});
//# sourceMappingURL=main.js.map