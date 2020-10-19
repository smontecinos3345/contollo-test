export const LOAD_JOBS_DATA = "LOAD_JOBS_DATA";
export const JOBS_REQUEST = "JOBS_REQUEST";
export const jobsRequest = () => ({ type: JOBS_REQUEST });
export const JOBS_REQUEST_FAILED = "JOBS_REQUEST_FAILED";
export const jobsRequestError = (err) => ({ type: JOBS_REQUEST_FAILED, error: err});

export const loadJobData = (data) => ({ type: LOAD_JOBS_DATA, data});
