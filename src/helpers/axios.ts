import axios from 'axios';


const BaseUrl = import.meta.env.VITE_REACT_API_URL;
console.log(BaseUrl);
let headers = {
    'Authorization': `Bearer 1234567`
}

if (localStorage.token) {
    headers.Authorization = `Bearer 1234567`
}
const axiosInstance = axios.create({
    baseURL: BaseUrl,
    headers,
});

export default axiosInstance;

//replace / to - in 12/12/1999
// const date = '12/12/1999';
// const newDate = date.replace(/\//g, '-');