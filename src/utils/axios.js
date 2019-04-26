import axios from 'axios';
import { Env } from './config';
import Storage from './storage';

axios.defaults.baseURL = Env.SERVER_API;
axios.defaults.headers['Content-Type'] = 'application/json'

/** Bind accessToken */
axios.interceptors.request.use(function (config) {
  const accessToken = Storage.getAccessToken();
  if (accessToken) {
    config.headers['Authorization'] = Storage.getAccessToken()
  }

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default axios;

