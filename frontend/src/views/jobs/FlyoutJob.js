import { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import parse from 'html-react-parser';


import {AiOutlinePrinter, AiOutlineMail, AiOutlineClose, AiOutlineTwitter, AiOutlineFacebook} from 'react-icons/ai'
const FlyoutJob = ({ props, setOpen, open }) => {

    const print = () => {
        window.print()
    }

    return (
        <div className="flyout-container" id="flyout-container" onClick={() => console.log('hello')} >
            <div className="flyout-header ">
                <div><AiOutlinePrinter className="flyout-icon" size={25}  onClick={print}  /></div>
                <div><AiOutlineTwitter className="flyout-icon" size={25} /></div>
                <div><AiOutlineFacebook className="flyout-icon" size={25} /></div>
                <div><AiOutlineMail className="flyout-icon" size={25} /></div>
                <div><a className="flyout-icon apply-button2" onClick={() =>  navigator.clipboard.writeText(props.long_description)}>Apply</a></div>
                <div><AiOutlineClose className="flyout-icon" size={25} onClick={() => setOpen(false)} /></div>
            </div>

            <div className="flyout-title text-uppercase flyout-body">{props.title}</div>
            <div className="flyout-body scrollable">{parse(`${props.long_description}`)}</div>
            
            
            <div className="flyout-footer">
                <Button className="apply-button">
                    Apply
                </Button></div>
        </div>
    )
}

export default FlyoutJob
