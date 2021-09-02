import { useRef, useEffect } from "react"
import useFetcher from "../../hooks/useFetcher"
import { useState } from 'react'
import Articles from "./Articles"

import { Button, Collapse, Card } from "react-bootstrap"
const NewsHandler = () => {

    const [params, setParams] = useState({})
    const url = 'http://localhost:8000/news/api/article_list/'
    const { loading, error, data : articles} = useFetcher(params, url)
    console.log('the newsss', articles)
    

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
        console.log(body)
    } 
    
    
    return (
        <div class="container-fluid">
            <div class="row ">
                <div className="border row col-md-5 horizontal-scrollable">
                    <div class="col-m-4 " >
                    {articles && articles.map(article => {

                        return (
                                <div class=" ">
                                    {loading && loading}
                                    {error && error}
                                    <Articles key={article.id} article={article} sideBar={sideBar} />
                                </div>  
                                )})}                        
                                                            
                    </div>
                </div>
                <div className="d-sm-none d-md-block  row col-md-7 m-2 position-relative scrollDiv">
                    <Card className="position-relative">
                        <Card.Title>
                        {open &&
                    <Collapse in={open}>
                        <div className="mt-5 mb-5">
                            <div className="card-title h5">{body.article.title}</div>
                            {body.article.long_description}
                        </div>
                    </Collapse >
                    }
                        </Card.Title>
                        <Card.Body>
                            The body
                        </Card.Body>
                    </Card>
                    <div class="col-m-8 p-2 scrollDiv">
                 
                    {console.log('openzx',open)}
                   
                        {/* {body && body} */}
                    </div>
                </div>
                
            </div>
        </div>
        // <div className="container">
        //     <div className="row m-2">
        //         <div className="col-md-6">
        //             {articles && articles.map(article => {
        //                 return (
        //                     <div>
        //                         <Articles article={article}  />
        //                         <Button onClick={() => sideBar(article)}>Button</Button>
        //                     </div>
        //                 )
        //             })}
        //         </div>
        //         <div className="col-md-6">
        //             <Collapse in={open}>
        //                 <div className="mt-2 sidebar">
        //                     <Card>
        //                         <Card.Body>
        //                             <Card.Title>
        //                             {body.title}
        //                             </Card.Title>
        //                             {body.long_description}
                                    
        //                         </Card.Body>
        //                     </Card>
        //                     <div className="h5">{body && body.long_description}</div>
        //                     {/* <ReactMarkdown children={body} escapeHtml={true} /> */}
        //                     {/* <Button variant="secondary" onClick={() => setOPen(false)}>Close</Button> */}
        //                 </div>
        //             </Collapse>
        //         </div>
        //     </div>
        // </div>
    )
}

export default NewsHandler
