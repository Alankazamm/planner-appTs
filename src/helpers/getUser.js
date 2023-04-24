"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const getUser = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const city = user.city;
    const country = user.country;
    return { city, country };
};
exports.getUser = getUser;
//# sourceMappingURL=getUser.js.map