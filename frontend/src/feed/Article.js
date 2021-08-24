import parse from 'html-react-parser'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'


function Article() {
  const [redirect, setRedirect] = useState(false)

  const [article, setArticle] = useState([]);
  const { id } = useParams()

  const fetchArticle = async () => {
    
    const res = await fetch(`http://localhost:8000/news/api/article/${id}/`)
    const data = await res.json()
    return data
  }

  useEffect(() => {
    const fetchArticle = async () => {

      const res = await fetch(`http://localhost:8000/news/api/article/${id}/`)
      const data = await res.json()
      return data
    }
    const getServer = async () => {

      const serverData = await fetchArticle()
      setArticle(serverData)
    }
    getServer()
  }, []);

  const deleteArticle = async (id) => {
    const fetchAndDelete = await fetch(`http://localhost:8000/news/api/delete/${id}/`, {
      method: 'DELETE'
    })
    setRedirect(true)
  }

  if (redirect) {
    return <Redirect to='/news' />
  }
    
    return (
        <div className='container'>
            <div>
                <h2 className=''>{parse(`${article.title}`)}</h2>
            </div>
            <hr className='mt-5' />
            
            <div className='mt-5'>
                <p>By <Link to='/'>User</Link> | <Link to={`/news/update/${id}`}>Updatez</Link> | {article.published_date} <Link onClick={() => (deleteArticle(article.id))} href='#'>Delete</Link> </p>
            </div>
            
                
            <div className='mt-5 mb-5'>
            {parse(`${article.long_description}`)}
            </div>
            {/* {redirect && <Redirect to='/' />} */}
            {/* deleteArticle(article.id) */}
        </div>
    )
}

export default Article
