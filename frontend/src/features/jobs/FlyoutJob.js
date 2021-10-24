import { useState, useEffect, useCallback, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { deleteJob, fetchJobs, jobsSelector, jobSelector, fetchoneJob, setOneJob } from './jobsSlice'
import { Button } from "react-bootstrap";
import parse from 'html-react-parser';
import { useParams, useLocation, Redirect } from 'react-router-dom'
import { useGetJobQuery } from './jobApi'
import { Link } from "react-router-dom";
// before changes


import {AiOutlinePrinter, AiOutlineMail, AiOutlineClose, AiOutlineTwitter, AiOutlineFacebook} from 'react-icons/ai'
const FlyoutJob = (  ) => {
    const { id } = useParams()
    const siteName = 'mySite'
    const {data: job, isFetching, error} = useGetJobQuery({id: id})
    console.log('errorCode:', error)
    
    //console.log('jobc', job?.value, isFetching)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const handleResize = (e) => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    })
    const myDivStyle = {
        
        width: `${windowWidth <= 768 ? '100vw' : '90vw'}`,
        
    };

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
            {error && `<div>error</div>`}
         
            <div className="flyout-container" id="flyout-container" style={myDivStyle}>
                <div className="flyout-header ">
                    <div><AiOutlinePrinter className="flyout-icon" size={25}  onClick={print}  /></div>
                    <div><a href={job && `https://twitter.com/share?hashtags=awesome,sharing&url=${window.location.href}&text=${job.title}#010;`} target="_blank" className="flyout-share-link"><AiOutlineTwitter className="flyout-icon" size={25} /></a></div>
                    
                    <div><AiOutlineFacebook className="flyout-icon" size={25} /></div>
                    <div><a target="blank" className="flyout-share-link" href={`mailto:somone@example.com?subject=${job && job.title}&body=Check out this great job ${job && window.location.href}`}><AiOutlineMail className="flyout-icon" size={25} /></a></div>
                    <div><a className="flyout-icon apply-button2" >Apply</a></div>
                    <div><AiOutlineClose className="flyout-icon flyout-close" onClick={() => setRedirect(true)} size={25} /></div>
                </div>
                <div className="flyout-main" onScroll={()=> console.log(window.pageYOffset)}>
                    <h1 className="flyout-title text-uppercase flyout-body">{job && job.title}</h1>
                    {error && `status ${error.originalStatus}  ${error.status}`}
                    {isFetching && 'loading.......'}

                    <div className="flyout-body scrollable">
                        {job &&  parse(`${job.long_description}`)}
                    </div>
                </div>               
                <div className="flyout-footer">
                    <Button className="apply-button">
                        Apply  
                    </Button>
                </div>
            </div>
           
        </div>
       //before change
    )
}

export default FlyoutJob
