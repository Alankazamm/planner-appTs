import axios from 'axios';


const BaseUrl = import.meta.env.VITE_REACT_API_URL;
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
let axiosInstance = axios.create({
    baseURL: BaseUrl,
    headers,
});
console.log(axiosInstance);
 console.log(localStorage.getItem('token'));
export default axiosInstance;

//replace / to - in 12/12/1999
// const date = '12/12/1999';
// const newDate = date.replace(/\//g, '-');