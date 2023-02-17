
export const storeToken = (token: string) => {
    sessionStorage.setItem('token', token);
}

export const getToken = () => {
    if (sessionStorage.getItem('token')) {
        return sessionStorage.getItem('token');
    }
    return null;
}