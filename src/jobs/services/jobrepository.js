const axios = require('axios');

export function list_jobs(limit = 10) {
  console.log(process.env);
  return axios.get(process.env.REACT_APP_JOBS_URL);
}
