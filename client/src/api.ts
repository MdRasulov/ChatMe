import axios from 'axios';

export const createRequest = axios.create({
  baseURL: 'http://localhost:8800/api',
  withCredentials: true,
});
