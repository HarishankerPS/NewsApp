import axios from 'axios';
export const newsApiInstance = axios.create({
    baseURL: `https://newsapi.org/v2`,
    responseType: 'json',
});
