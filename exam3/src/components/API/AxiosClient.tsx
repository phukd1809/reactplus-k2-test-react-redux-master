import axios from 'axios';
export const axiosClient = axios.create({
    baseURL: 'https://61b75f1864e4a10017d18ada.mockapi.io/api',
    headers: {
        'Content-Type': 'application/json',
    },
});
export default axiosClient