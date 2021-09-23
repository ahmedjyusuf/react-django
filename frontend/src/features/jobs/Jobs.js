
import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { deleteJob, fetchJobs, jobsSelector,  } from './jobsSlice'

const Jobs = () => {

    const dispatch = useDispatch()

    const onDelete = useCallback((id) => {
      dispatch(deleteJob(id)) 
    }, [])

    const jobs  = useSelector(jobsSelector.selectAll)
    
    useEffect(() => {
      dispatch(fetchJobs());
    }, [])

    return (
        <div>
           {jobs && jobs.map((job) => 
            <div>
                {job.title}
                {/* {job.long_description}
                {job.published_date} */}
            </div>)}
        </div>
    )
}
// <a href="" onClick={() => onDelete(job.id)}>delete {job.id}</a>
export default Jobs
