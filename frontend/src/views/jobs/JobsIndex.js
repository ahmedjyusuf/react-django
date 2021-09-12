import { useRef,useState, useEffect } from "react"
import useFetcher from "../../hooks/useFetcher"
// import Articles from "./Articles"
import Jobs from "./Jobs"
import parse from 'html-react-parser'
import Search from "../../components/Search"

import styled from 'styled-components'

import Flyout from "../../components/Flyout"

import { Button, Badge, Collapse, Card } from "react-bootstrap"


import {useComponentVisible} from '../../utils'
import { icons } from "react-icons"




const JobIndex = () => {

    const [params, setParams] = useState({})
    // const url = 'http://127.0.0.1:8000/jobs/job_list/'
    const url = 'http://localhost:8000/news/api/article_list/'
    const { loading, error, data : jobs} = useFetcher(params, url)
    console.log('the newsss', jobs)
    

    const [open, setOpen] = useState(false)
    const [body, setbody] = useState([])

    
    const sideBar = (value, op) => {
        setOpen(!op)
        console.log('clicked', value)
        if (value) {
            setbody(value)
        }
        else {
            setbody([])
        }
    } 
    



    console.log('the opening', open)
    return (
        <div className="main-container">
            <Search />
            <div>
            {open &&
                <Flyout props={body} setOpen={setOpen} open={open} />
            }
            </div>
            <div className="content-row ">
                
                <div className="left">
                    
                    {/* this is the left side */}

                    {jobs && jobs.map(job => {
                    
                        return (
                            <div>
                                <Jobs job={job}  sideBar={sideBar} error={error} />
                                
                            </div>
                        )
                    })}
                    
                </div>
                <div>
                    
                </div>
                <div className="right div">
                
                {/* <Collapse in={open}>                    
                    <div className="mt-2 content-scroll">
                        <Card>
                            <Card.Body>
                                <Card.Title>
                            <span className="title text-uppercase">{body.title}</span>
                                </Card.Title>
                                {parse(`${body.long_description}`)}
                            
                            </Card.Body>
                        </Card>
                        
                        {/* <ReactMarkdown children={body} escapeHtml={true} /> */}
                        {/* <Button variant="secondary" onClick={() => setOPen(false)}>Close</Button> */}
                    {/* </div> */}
                {/* </Collapse>
                <Collapse in={!open}>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>
                                <span className="title">Welcome to Blah Job site</span>
                            </Card.Title>
                                {body.long_description}
                        </Card.Body>
                    </Card>
                </Collapse>  */}
                    {/* right div */}
                </div>
                
             
            </div>
        </div>
    )
}

export default JobIndex

// export default NewsHandler


