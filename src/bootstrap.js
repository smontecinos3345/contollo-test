const axios = require('axios');

function jwt(config) {
  const token = localStorage.getItem("__session");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}

axios.interceptors.request.use(jwt);
