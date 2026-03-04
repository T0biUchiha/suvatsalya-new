import axios from 'axios';

// 1. Create the custom axios instance
const api = axios.create({
  // 2. Define the Base URL for all API requests
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001',
});

// 3. (Optional but recommended) Add a request interceptor
// This will automatically add the admin auth token to every request
api.interceptors.request.use(
  (config) => {
    // Get the token from local storage
    const token = localStorage.getItem('adminToken');
    
    // If the token exists, add it to the Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;