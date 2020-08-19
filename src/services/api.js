import axios from 'axios';

const url = 'https://randomuser.me';

const api = axios.create({
  baseURL: url,
  headers: { 'Content-Type': 'application/json' },
});

// api.interceptors.request.use((config) => {
//   /* apply HTTP headers on request if necessary */
//   config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    /* apply error handling on response */
  },
);

export default api;
