import { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom'
// before changes

import {AiOutlinePrinter, AiOutlineMail, AiOutlineClose, AiOutlineTwitter, AiOutlineFacebook} from 'react-icons/ai'
const FlyoutJob = () => {

const { pk } = useParams()
  const id = pk
    const print = () => {
        window.print()
    }

    const [open, setOpen] = useState(true);

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

                <div className="flyout-title text-uppercase flyout-body">blah</div>
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
