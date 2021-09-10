import { useRef,useState, useEffect } from "react"
import useFetcher from "../../hooks/useFetcher"
// import Articles from "./Articles"
import Jobs from "./Jobs"
import parse from 'html-react-parser'
import Search from "../../components/Search"
import {Flyout} from 'pivotal-ui/react/flyout';
import styled from 'styled-components'

import Flying from "../../components/Flying"

import { Button, Badge, Collapse, Card } from "react-bootstrap"


import {useComponentVisible} from '../../utils'

const Thing = styled.div`
  color: blue;
  margin: 2px;
  @media {max-width: 768px} { 
    width: 100%;
  }

  .pui-flyout-dialog-backdrop {
    border: 1px solid; // an element labeled ".something" inside <Thing>
    display: flex;
    width: 100px;

  }
`


const JobIndex = () => {

    const [params, setParams] = useState({})
    // const url = 'http://127.0.0.1:8000/jobs/job_list/'
    const url = 'http://localhost:8000/news/api/article_list/'
    const { loading, error, data : jobs} = useFetcher(params, url)
    console.log('the newsss', jobs)
    

    const [open, setOpen] = useState(false)
    const [body, setbody] = useState([])
    const [wwidth, setWwidth] = useState(window.innerWidth - 10)
    const sideBar = (value, op) => {
        setOpen(!op)
        console.log('clicked', value)
        if (value) {
            setbody(value)
        }
        else {
            setbody([])
        }
        // console.log('bodyyy..', body)
    } 
    
    // if (open) {
    //     Flyout.classList.add('Fuadddxxxxxxx');
    // }
    // if (window.innerWidth < 768) {
    //     setWwidth('100vw')
    // } else {
    //     setWwidth('90vw')
    // }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const handleResize = (e) => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    },[handleResize])

    const myDivStyle = {
        width: `${windowWidth < 750 ? '100vw' : '90vw'}`,

    };


    const [showFlyOut, setFlyOut] = useState(false)
    const openFlyOut = () => {
        setFlyOut(prev => !prev)
    }
    return (
        <div className="main-container">
            <Search />
            <div>
            {/* <Flyout dialogClassName="" show={open} onHide={!open} 
                buttonAriaLabel="<Button>hello<Button>"
                header={parse(`<h2>${body.title}</h2>`)} 
                // width={`calc(100vw - 100px)`}
                width={`${windowWidth < 750 ? '100vw' : '80vw'}`}
                
                bodyClassName="m-5 pb-5"
                headerClassName=""
                onHide={openFlyOut}
                dialogClassName="fly-out-content"
                children={parse(`${body.long_description}`)}
                
                ><div className="p-5">{parse(`${body.long_description}`)}</div><Button className="mb-5">Button</Button>
            </Flyout>  */}
            <Flying prop={body} />
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


