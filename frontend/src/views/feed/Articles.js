import { useState } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import HTMLReactParser from 'html-react-parser'
const Articles = ({ article, sideBar }) => {
    const link = 'http://www.world.blankjobs.com/fullstack-software-remote-this-is-a-fulltime-posistion-remote-fullstack'
    const desc = "Hello&nbsp;wold \r\n\r\nplease \r\n\r\nlike\r\n\r\nshare \r\n\r\nand \r\n\r\nsubscribe"

    const [open, setOPen] = useState(false)
    // console.log('inner', jobs)
    return (
        <div className="">

            <Card className="mb-3">
                <Card.Body className="" onClick={() => sideBar(article)}>
                    <div className="d-flex justify-content-between">
                        <div>
                            <Card.Title>
                                <span className="title">{article.title}</span> - <span className="text-muted 
                                font-weight-light">the company</span>
                            </Card.Title>

                            <Card.Subtitle className="text-muted mb-2">
                                left div
                            </Card.Subtitle>
                            <Badge variant="secondary" className="mr-2">article type</Badge>
                            <Badge variant="secondary">city</Badge>
                            <div style={{ wordBreak:'break-all' }}>
                                <ReactMarkdown children={link} />
                            </div>
                        </div>
                        <img className="d-none d-md-block" src="" height="50" />   
                    </div>
                    <Card.Text>
                    {/* <Button onClick={() => sideBar({article}, open)} > click me</Button> */}
                    
                        {/* <Button onClick={() => setOPen(popen => !popen)} variant={open ? 'secondary' : 'primary'}>{open ? 'Close Details' : 'View Details'}</Button> */}
                    </Card.Text>
                    {/* <Collapse in={open}>
                        <div className="mt-5">
                            <div className="h5">{article.title}</div>
                            <ReactMarkdown children={article.long_description} escapeHtml={true} />
                            <Button variant="secondary" onClick={() => setOPen(false)}>Close</Button>
                        </div>
                    </Collapse> */}
                </Card.Body>
            </Card>
            <div className="">
                <Collapse in={open}>
                    <div className="mt-5">
                        <div className="h5">{article.title}</div>
                        <ReactMarkdown children={article.long_description} escapeHtml={true} />
                        <Button variant="secondary" onClick={() => setOPen(false)}>Close</Button>
                    </div>
                </Collapse>
            </div>
        </div>
    )
}

export default Articles
