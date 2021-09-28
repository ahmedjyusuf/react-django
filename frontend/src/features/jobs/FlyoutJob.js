import { useState, useEffect, useCallback, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { deleteJob, fetchJobs, jobsSelector, jobSelector, fetchoneJob } from './jobsSlice'
import { Button } from "react-bootstrap";
import parse from 'html-react-parser';
import { useParams, useLocation } from 'react-router-dom'
// before changes

import {AiOutlinePrinter, AiOutlineMail, AiOutlineClose, AiOutlineTwitter, AiOutlineFacebook} from 'react-icons/ai'
const FlyoutJob = ( props ) => {
    const { id } = useParams()
    const dispatch = useDispatch()

    // const onDelete = useCallback((id) => {
    //   dispatch(deleteJob(id)) 
    // }, [])

    const job  = useSelector(jobSelector.selectAll)
    // const job = useCallback((id) => {
    //     dispatch(fetchoneJob(id))
    // })
    useEffect(() => {
      dispatch(fetchoneJob(id));
    }, [])

    console.log('jobs', job)

    //const id = pk
    const print = () => {
        window.print()
    }
    console.log('id',id)
    console.log('name', props.location.state)
    const [open, setOpen] = useState(true);
    
    // const location = useLocation()
    // const { name } = location.state
    //props.location.state.jobs
    console.log()
    return (
        <div>
            {open &&
            <div className="flyout-container" id="flyout-container" onClick={() => console.log('hello')} >
                <div className="flyout-header ">
                    <div><AiOutlinePrinter className="flyout-icon" size={25}  onClick={print}  /></div>
                    <div><AiOutlineTwitter className="flyout-icon" size={25} /></div>
                    <div><AiOutlineFacebook className="flyout-icon" size={25} /></div>
                    <div><AiOutlineMail className="flyout-icon" size={25} /></div>
                    <div><a className="flyout-icon apply-button2" >Apply</a></div>
                    <div><AiOutlineClose className="flyout-icon" onClick={() => setOpen(false)} size={25} /></div>
                </div>

                <div className="flyout-title text-uppercase flyout-body">blah {id} prop </div>
                <div className="flyout-body scrollable">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eaque facere maiores eveniet veritatis voluptate nihil ipsum, ut a quae modi rem reiciendis quas cupiditate deserunt tenetur eos dolores vitae voluptatum architecto natus, minima autem? Porro sit quasi voluptatem dolorem at illo rem ad minus, excepturi ea fugiat, corrupti molestias.
                </div>
                
                
                <div className="flyout-footer">
                    <Button className="apply-button">
                        Apply
                    </Button></div>
            </div>
            }
        </div>
       
    )
}

export default FlyoutJob
