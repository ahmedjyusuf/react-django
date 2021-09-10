import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import parse from 'html-react-parser';
import '../App.css';

import {AiOutlinePrinter, AiOutlineMail} from 'react-icons/ai'
const Flyout = ({ props }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const handleResize = (e) => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    })
    const myDivStyle = {
        display: 'flex',
        width: `${windowWidth <= 768 ? '100vw' : '90vw'}`,
        justifyContent: 'space-around',
    };
    const print = () => {
        window.print()
    }
    return (
        <div className="flyout-container d-block" id="flyout-container" style={myDivStyle}>
            <div className="flyout-header ">
                <div className="m-2"><AiOutlinePrinter size={25} className="flyout-icon" onClick={print}  /></div>
                <div className="m-2">Email</div>
                <div className="m-2">Email</div>
                <div className="m-2"><AiOutlineMail size={25} className="flyout-icon" /></div>
            </div>

            <div className="flyout-title text-uppercase flyout-body">{props.title}</div>
            <div>Current window width: {windowWidth}</div>
            <div className="flyout-body scrollable">{parse(`${props.long_description}`)}</div>
            
            {(windowWidth <= 768 && windowWidth > 450) &&
            <div className="flyout-footer">
                <Button className="apply-button px-5">
                    Apply
                </Button></div>
            }
        </div>
    )
}

export default Flyout
