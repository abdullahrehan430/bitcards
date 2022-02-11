import axios from 'axios';

// TODO Should be fetched form the env file
const baseURL = 'https://devapp.bitcards.com/api/v2/';

export const instance = axios.create({
  baseURL,
  timeout: 100000,
});

instance.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export default instance;
