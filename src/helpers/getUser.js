export const getUser = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const city = user.city;
    const country = user.country;
    return { city, country };
};
//# sourceMappingURL=getUser.js.map