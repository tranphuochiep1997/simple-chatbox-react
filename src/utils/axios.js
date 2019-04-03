import axios from 'axios';
import { SERVER_API } from './config';
import Storage from './storage';

axios.interceptors.request.use(config => {
  config.headers['Authorization'] = Storage.getAccessToken();
});

export default axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  baseURL: SERVER_API
});

