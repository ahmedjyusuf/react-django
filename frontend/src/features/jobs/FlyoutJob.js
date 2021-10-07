import { useState, useEffect, useCallback, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { deleteJob, fetchJobs, jobsSelector, jobSelector, fetchoneJob, setOneJob } from './jobsSlice'
import { Button } from "react-bootstrap";
import parse from 'html-react-parser';
import { useParams, useLocation, Redirect } from 'react-router-dom'
import { useGetJobQuery } from './jobApi'
// before changes


import {AiOutlinePrinter, AiOutlineMail, AiOutlineClose, AiOutlineTwitter, AiOutlineFacebook} from 'react-icons/ai'
const FlyoutJob = (  ) => {
    const { id } = useParams()

    const {data: job, isFetching} = useGetJobQuery({id: id})
    console.log('jobc', job?.value, isFetching)
    
    const print = () => {
        window.print()
    }

    const [open, setOpen] = useState(true);
    const [redirect, setRedirect] = useState(false)
    if (redirect) {
        return <Redirect to='/jobs' />
    }
    if (isFetching) {
        return 'loading...'
    }
    return (
        <div>
            {!isFetching ? 
            <div className="flyout-container" id="flyout-container" onClick={() => console.log('hello')} >
                <div className="flyout-header ">
                    <div><AiOutlinePrinter className="flyout-icon" size={25}  onClick={print}  /></div>
                    <div><AiOutlineTwitter className="flyout-icon" size={25} /></div>
                    <div><AiOutlineFacebook className="flyout-icon" size={25} /></div>
                    <div><AiOutlineMail className="flyout-icon" size={25} /></div>
                    <div><a className="flyout-icon apply-button2" >Apply</a></div>
                    <div><AiOutlineClose className="flyout-icon" onClick={() => setRedirect(true)} size={25} /></div>
                </div>
                <div className="flyout-main">
                    <div className="flyout-title text-uppercase flyout-body">{job && job.title}</div>
                    <div className="flyout-body scrollable">
                        {job && job.long_description}
                    </div>
                </div>               
                <div className="flyout-footer">
                    <Button className="apply-button">
                        Apply  
                    </Button></div>
            </div>
            : 'loading..'}
        </div>
       
    )
}

export default FlyoutJob
