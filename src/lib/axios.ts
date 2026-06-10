import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "/api",
  timeout: 10_000,
  headers: { "Content-Type": "application/json" },
});

// Request interceptor – attach auth token if present
api.interceptors.request.use((config) => {
  // const token = getToken(); // plug your auth store here
  // if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Response interceptor – handle global errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // e.g. redirect to /login or clear auth store
    }
    return Promise.reject(error);
  }
);

export default api;
