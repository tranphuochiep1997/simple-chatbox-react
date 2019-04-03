import axios from 'axios';
import { SERVER_API } from './config';
import Storage from './storage';

export default axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': Storage.getAccessToken()
  },
  baseURL: SERVER_API
});

