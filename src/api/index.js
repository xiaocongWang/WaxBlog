import axios from 'axios';

const baseUrl = process.env.baseUrl;
axios.defaults.baseURL = baseUrl;

export const fetchArticalList = params => axios.get('/api/v1/articals', params).then(res => res.data);
