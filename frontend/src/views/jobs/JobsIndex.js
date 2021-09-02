import useFetcher from "../../hooks/useFetcher"
import { useState } from "react"
import JobBody from "./JobBody"
import Jobs from "./Jobs"
const JobsIndex = () => {
    // before changing
    const [params, setParams] = useState({})
    const url = 'http://127.0.0.1:8000/jobs/job_list/'
    const { loading, error, data : jobs } = useFetcher(params, url)
    console.log('the jobs', jobs, typeof(jobs))
    
    return (
        <div>
            
            rafcexx
            {error && error}
            {loading && loading}
            {/* <JobBody jobs={jobs}/> */}
            {/* <Jobs jobs={jobs} /> */}
            {/* {jobs.map(job => {return <h1>{job.title}</h1>})} */}
            {/* {jobs && jobs.map(job => <Jobs job={job} />)} */}

            {jobs && jobs.map(job => <Jobs key={job.id} job={job} />)}
 
        </div>
    )
}

export default JobsIndex
