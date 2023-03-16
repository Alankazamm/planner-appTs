import axios from 'axios';


export const BaseUrl = "https://latam-challenge-2.deta.dev/api/v1/";
let headers = {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
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
