import useFetchJobs from "../../hooks/useFetchJobs"
import { useState } from "react"
import JobBody from "./JobBody"
import Jobs from "./Jobs"
const JobsIndex = () => {
    // before changing
    const [params, setParams] = useState({})
    const { loading, error, jobs} = useFetchJobs(params)
    console.log('the jobs', jobs, typeof(jobs))
    
    return (
        <div>
            
            rafcexx
            {error && error}
            {/* <JobBody jobs={jobs}/> */}
            {/* <Jobs jobs={jobs} /> */}
            {/* {jobs.map(job => {return <h1>{job.title}</h1>})} */}
            {/* {jobs && jobs.map(job => <Jobs job={job} />)} */}

            {jobs && jobs.map(job => <Jobs key={job.id} job={job} />)}
 
        </div>
    )
}

export default JobsIndex
