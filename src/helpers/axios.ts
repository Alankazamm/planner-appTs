import axios from 'axios';


export const BaseUrl = import.meta.env.VITE_REACT_API_URL;
console.log(BaseUrl);
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
 console.log(localStorage.getItem('token'));

//replace / to - in 12/12/1999
// const date = '12/12/1999';
// const newDate = date.replace(/\//g, '-');