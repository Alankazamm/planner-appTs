import axios from 'axios';


export const BaseUrl = import.meta.env.VITE_REACT_API_URL;
let headers = {
    'Authorization': `Bearer 1234567`
}

if (localStorage.getItem('token')) {
    headers.Authorization = `Bearer ${localStorage.getItem('token')}`
}
export const updateToken = (token: string) => {
    headers.Authorization = `Bearer ${token}`
    console.log(headers.Authorization);
}
export const axiosInstance = axios.create({
    baseURL: BaseUrl,
    headers,
});
