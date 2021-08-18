import { useState } from 'react'
import { Redirect } from 'react-router';
import { csrftoken as token } from "../utils";
const PostArticle = () => {
    let csrftoken = token()

    const [title, setTitle] = useState('')
    const [shortDescription, setShortDescription] = useState('')
    const [longDescription, setLongDescription] = useState('')
    const [redirect, setRedirect] = useState(false)
    const [id, setId] = useState(0)
    const onSubmit = async (e)  => {
        e.preventDefault()
        console.log('Submitted')
        if (!title) {
            alert('please add title')
            return 
        }
        const url = 'http://localhost:8000/news/api/post/'

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify({'title': title, 'short_description': shortDescription, 'long_description': longDescription}) 
        })
        const data = await res.json()
        console.log(data.id)
        setTitle('')
        setShortDescription('')
        setLongDescription('')
        setId(data.id)
        setRedirect(true)
    }
    if (redirect === true && id !== 0) {
        return <Redirect to={`/news/article/${id}`} />
        
    }

    return (
        <div>
            
            <form onSubmit={onSubmit} className='m-3' >
                <div className="form-group">
                    <label>Title </label>
                    <input type='text' className='form-control'  placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                </div>

                <div className="form-group">
                    <label>Short </label>
                    <textarea className="form-control" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div className="form-group">
                    <label>Long</label>
                    <textarea className="form-control" value={longDescription} onChange={(e) => setLongDescription(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                
                <div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default PostArticle
