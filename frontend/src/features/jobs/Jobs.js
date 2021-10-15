
import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { deleteJob, fetchJobs, jobSelector, jobsSelector,  } from './jobsSlice'
import  { useRouteMatch, useLocation } from 'react-router-dom'
import { Link, NavLink, Switch, Route, useParams } from 'react-router-dom'
import FlyoutJob from './FlyoutJob';
import {AiOutlinePrinter, AiOutlineMail, AiOutlineClose, AiOutlineShareAlt, AiOutlineTwitter, AiOutlineFacebook} from 'react-icons/ai'
import parse from 'html-react-parser';

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
            <div className='search'>
                <form action='/' method='GET' className='search-form'>
                    <input type="search"  className='job-search' placeholder="search"/>
                </form>
                
               
                <div className='light-text job-count-search'>{jobs.length} Jobs found</div>
                <div>righ area</div>

            </div>
            <div className="job-count light-text mb-3">{jobs.length} Job Postings found</div>
           {jobs && jobs.map((job) => 
            <div>
                <ul className="job-listing-container">
                    <li><h3 className="job-title"><Link className="job-title" to={{pathname: `/jobs/${job.id}/`, key: job.id }}  >{job.title}</Link></h3><span className="if-new">{job.time_since < 14 && 'NEW'}</span></li>
                    
                    <li className="list-item list-items list-item-uno">Job type: {job.job_type}</li>
                    <li className="list-item list-items">Location: {job.city}</li>
                    <li className="list-item list-items">Company: {job.company_name}</li>
                    <li className="list-item short-description"><p>{job.short_description ? job.short_description : parse(`${job.long_description.slice(0,200)}...`)}</p></li>
                    <div className="jobs-info">
                        <div className="jobs-icons">
                            <div><a href={`https://twitter.com/share?hashtags=awesome,sharing&url=${window.location.href}&text=${job.title}#010;`} target="_blank" className="flyout-share-link"><AiOutlineTwitter className="flyout-icon" size={20} /></a></div>
                            <div><AiOutlineFacebook className="flyout-icon" size={20} /></div>
                            <div><a target="blank" className="flyout-share-link" href={`mailto:somone@example.com?subject=${job && job.title}&body=Check out this great job ${job && window.location.href}/${job.id}/`}><AiOutlineMail className="flyout-icon" size={20} /></a></div>
                            <div><AiOutlineShareAlt className="flyout-icon" size={20} /></div>
                            
                        </div>
                        <div className="ending-date light-text">
                            { job.time_since > 1 ? `Posted more than ${job.time_since} ago` : `Posted today` } 
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

