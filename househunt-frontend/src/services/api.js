import axios from 'axios';

const api = axios.create({
  baseURL: 'http://https://house-hunt-1-15mw.onrender.com/api', // your backend base URL
});

// Add token to headers if exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

