
import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { deleteJob, fetchJobs, jobsSelector,  } from './jobsSlice'
import  { useRouteMatch, useLocation } from 'react-router-dom'
import { Link, NavLink, Switch, Route, useParams } from 'react-router-dom'
import FlyoutJob from './FlyoutJob';
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

    const { url } = useRouteMatch()
    console.log('availble?', jobs)
    return (
        <div className="jobs-page">
            <div className="job-count light-text mb-3">{jobs.length} Job Postings found</div>
           {jobs && jobs.map((job) => 
            <div>
                <ul className="job-listing-container">
                    <li><h3 className="job-title"><Link className="job-title" to={{pathname: `/jobs/${job.id}/`, key: job.id }}  >{job.title}</Link></h3><span className="if-new">{job.time_since < 12 && 'NEW'}</span></li>
                    
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
                            Posted more than {job.time_since } days ago 
                        </div>
                </div>
                </ul>
            </div>)}
            <Switch>
                <Route  path='/jobs/:id'  component={FlyoutJob} name={() =>'ahmed'} />
            </Switch>
        </div>
    )
}

// const Jobs = () => {
//     return (
//         <div>
//             <JobsMain>hello</JobsMain>
//             <Switch>
//                 {/* <Route  path='/jobs' component={JobsMain} /> */}
//                 <Route  path='/jobs/:id' component={FlyoutJob} />
//             </Switch>
//         </div>
//     )
// }

export default Jobs

