
import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { deleteJob, fetchJobs, jobsSelector,  } from './jobsSlice'
import { useRouteMatch, Link, Route } from 'react-router-dom'
import {AiOutlinePrinter, AiOutlineMail, AiOutlineClose, AiOutlineShareAlt, AiOutlineTwitter, AiOutlineFacebook} from 'react-icons/ai'
const Jobs = () => {

    const dispatch = useDispatch()

    const onDelete = useCallback((id) => {
      dispatch(deleteJob(id)) 
    }, [])

    const jobs  = useSelector(jobsSelector.selectAll)
    
    useEffect(() => {
      dispatch(fetchJobs());
    }, [])

    const { url, path } = useRouteMatch()
    console.log(url)
    return (
        <div className="jobs-page">
            <div className="job-count light-text mb-3">{jobs.length} Job Postings found</div>
           {jobs && jobs.map((job) => 
            <div>
                <ul className="job-listing-container"><Link to={`home${url}${job.id}s`}>linkss</Link>
                    <li><h3 className="job-title">{job.title}</h3></li>
                    
                    <li className="list-item list-items">Job type: {job.job_type}</li>
                    <li className="list-item list-items">Location: {job.city}</li>
                    <li className="list-item list-items">Company: {job.company_name}</li>
                    <li className="list-item short-description"><p>{job.short_description}...</p></li>
                    <div className="jobs-info">
                        <div className="jobs-icons">
                            <div><AiOutlineTwitter className="flyout-icon" size={20} /></div>
                            <div><AiOutlineFacebook className="flyout-icon" size={20} /></div>
                            <div><AiOutlineMail className="flyout-icon" size={20} /></div>
                            <div><AiOutlineShareAlt className="flyout-icon" size={20} /></div>
                            
                        </div>
                        <div className="ending-date light-text">
                            Posted more than 30 days ago
                        </div>
                </div>
                </ul>
                
                

                
                {/* {job.long_description}
                {job.published_date} */}
            </div>)}
            <Route path={`${path}/:id`}></Route>
        </div>
    )
}
// <a href="" onClick={() => onDelete(job.id)}>delete {job.id}</a>
export default Jobs
