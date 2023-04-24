System.register([], function (exports_1, context_1) {
    "use strict";
    var getUser;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("getUser", getUser = () => {
                const user = JSON.parse(localStorage.getItem('user') || '{}');
                const city = user.city;
                const country = user.country;
                return { city, country };
            });
        }
    };
});
//# sourceMappingURL=getUser.js.map