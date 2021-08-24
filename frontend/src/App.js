// import logo from './logo.svg';
import './App.css';
// import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Articles from './feed/Articles';
import Article from './feed/Article';
import UpdateArticle from './feed/UpdateArticle';
import Nav from './components/Nav';
import PostArticle from './feed/PostArticle';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';

function App() {
  // const [article, setArticle] = useState([]);
  // useEffect(() => {
  //   const getServer = async () => {
  //     const serverData = await fetchArticle()
  //     setArticle(serverData)
  //   }
  //   getServer()
  // }, [])

  // const fetchArticle = async () => {
  //   const res = await fetch('http://localhost:8000/news/article_list/')
  //   const data = await res.json()
  //   return data
  // }

  




  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/news/about/' component={About}/>
          <Route path='/news' exact component={Articles} />
          <Route path='/news/post_form' component={PostArticle} />
          <Route path='/news/update/:pk' exact component={UpdateArticle}/>
          <Route path='/news/article/:id' component={Article} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
