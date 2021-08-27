import { useState } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
const Part = () => {
    const link = 'http://www.world.blankjobs.com/fullstack-software-remote-this-is-a-fulltime-posistion-remote-fullstack'
    const desc = "Hello&nbsp;wold \r\n\r\nplease \r\n\r\nlike\r\n\r\nshare \r\n\r\nand \r\n\r\nsubscribe"

    const [open, setOPen] = useState(false)
    return (
        <div className="m-4">
            <Card className="mb-3">
                <Card.Body>
                    <div className="d-flex justify-content-between">
                        <div>
                            <Card.Title>
                                This is the title for a job - <span className="text-muted 
                                font-weight-light">The company</span>
                            </Card.Title>
                            <Card.Subtitle className="text-muted mb-2">
                                02/202021
                            </Card.Subtitle>
                            <Badge variant="secondary" className="mr-2">Remote type</Badge>
                            <Badge variant="secondary">Mogadishu</Badge>
                            <div style={{ wordBreak:'break-all' }}>
                                <ReactMarkdown children={link} />
                            </div>
                        </div>
                        <img className="d-none d-md-block" src="http://placehold.jp/150x150.png" height="50" />   
                    </div>
                    <Card.Text>
                        <Button onClick={() => setOPen(popen => !popen)} variant={open ? 'danger' : 'primary'}>{open ? 'Close Details' : 'View Details'}</Button>
                    </Card.Text>
                    <Collapse in={open}>
                        <div className="mt-4">
                            <ReactMarkdown children={desc}  />
                        </div>
                    </Collapse>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Part
