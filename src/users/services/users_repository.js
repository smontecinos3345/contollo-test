const axios = require('axios');

export function filter_users({ name, page = 1, limit = 10 }) {
  return axios.get(process.env.REACT_APP_USERS_URL, {
    params: { name }
  });
}
