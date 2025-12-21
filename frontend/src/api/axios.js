import axios from 'axios';

const api = axios.create({
    baseURL: (() => {
        const envUrl = import.meta.env.VITE_API_URL;
        if (!envUrl) return 'http://localhost:8000/api';

        // If it comes from Render's "host" property, it won't have protocol
        if (!envUrl.startsWith('http')) {
            return `https://${envUrl}/api`;
        }
        return envUrl;
    })(),
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to add the JWT token to headers
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Add a response interceptor to handle token expiration (optional for now)
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle 401 errors (e.g., redirect to login)
        return Promise.reject(error);
    }
);

export default api;
