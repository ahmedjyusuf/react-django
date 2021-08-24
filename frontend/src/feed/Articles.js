import parse from 'html-react-parser'
import { useState, useEffect } from 'react'

import { Link } from "react-router-dom";



function Articles() {
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
      const getServer = async () => {
        const serverData = await fetchArticles()
        setArticles(serverData)
      }
      getServer()
    }, [])
  
    const fetchArticles = async () => {
      const res = await fetch('http://localhost:8000/news/api/article_list/')
      const data = await res.json()
      return data
    }


    return (
        <div className='container draft'>
            <p>Hello from articles</p>  

            {articles.map((article) => 
                <Link key={article.id} to={`/news/article/${article.id}`}> <h2 className='bg-light'>{parse(article.title)}</h2></Link> 
            )}
        </div>
    )
}

export default Articles
