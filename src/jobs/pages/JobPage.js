import * as React from "react";
import { useService } from "../../shared/hooks";
import { list_jobs } from "../services/jobrepository";
import JobCard from "../components/JobCard";

import {
  jobsRequest,
  loadJobData,
  jobsRequestError,
} from "../actions";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";

function useJobsService(count) {
  return useService({
    start: jobsRequest,
    effect: loadJobData,
    error: jobsRequestError,
  }, () => list_jobs(count), [count]);
}

function JobPage({ count = 10, loading, error, data }) {
  useJobsService(count);
  if (loading) {
    return "Loading...";
  } else if (error) {
    return "Ooops!";
  }
  return <Grid
    container
    direction="row"
    justify="center"
    spacing={10}
    alignItems="flex-start"
  >  {data.map(job => <JobCard key={job.id} {...job} />)}
  </Grid>

}

const mapStateToProps = ({ jobs }) => jobs;

export default connect(mapStateToProps)(JobPage);
