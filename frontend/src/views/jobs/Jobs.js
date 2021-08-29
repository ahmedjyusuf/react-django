import { useState } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import HTMLReactParser from 'html-react-parser'
const Jobs = ({ job }) => {
    const link = 'http://www.world.blankjobs.com/fullstack-software-remote-this-is-a-fulltime-posistion-remote-fullstack'
    const desc = "Hello&nbsp;wold \r\n\r\nplease \r\n\r\nlike\r\n\r\nshare \r\n\r\nand \r\n\r\nsubscribe"

    const [open, setOPen] = useState(false)
    // console.log('inner', jobs)
    return (
        <div className="m-4">
           
            <Card className="mb-3">
                <Card.Body>
                    <div className="d-flex justify-content-between">
                        <div>
                            <Card.Title>
                            
                                {job.title} - <span className="text-muted 
                                font-weight-light">{job.company_name}</span>
                            </Card.Title>
                            <Card.Subtitle className="text-muted mb-2">
                                {job.created_date}
                            </Card.Subtitle>
                            <Badge variant="secondary" className="mr-2">{job.job_type}</Badge>
                            <Badge variant="secondary">{job.city}</Badge>
                            <div style={{ wordBreak:'break-all' }}>
                                <ReactMarkdown children={link} />
                            </div>
                        </div>
                        <img className="d-none d-md-block" src={`http://localhost:8000${job.photo}`} height="50" />   
                    </div>
                    <Card.Text>
                        <Button onClick={() => setOPen(popen => !popen)} variant={open ? 'secondary' : 'primary'}>{open ? 'Close Details' : 'View Details'}</Button>
                    </Card.Text>
                    <Collapse in={open}>
                        <div className="mt-5">
                            <div className="h5">{job.title}</div>
                            <ReactMarkdown children={job.long_description} escapeHtml={true} />
                            <Button variant="secondary" onClick={() => setOPen(false)}>Close</Button>
                        </div>
                    </Collapse>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Jobs
