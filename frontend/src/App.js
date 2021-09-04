// import logo from './logo.svg';
import './App.css';
// import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



import Articles from './views/feed/Articles';
import Article from './views/feed/Article';

import UpdateArticle from './views/feed/UpdateArticle';
import Nav from './components/Nav';
import PostArticle from './views/feed/PostArticle';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import NewsHandler from './views/feed/NewsHandler';
import JobsIndex from './views/jobs/JobsIndex';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
function App() {

  const [dark, setDark] = useState(localStorage.getItem('dark-mode') === 'true')
  console.log('darkksss', dark)

  useEffect(() => {
    localStorage.setItem('dark-mode', dark)
  }, [dark])
  
  const toggleDarkMode = () => {
    setDark(!dark)
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Button onClick={() => setDark(!dark)}>bittpm</Button>
       {/* <NewsHandler /> */}
        {/* <JobsIndex /> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/news/about/' component={About}/>
          <Route path='/news' exact component={NewsHandler} />
          <Route path='/news/post_form' component={PostArticle} />
          <Route path='/news/update/:pk' exact component={UpdateArticle}/>
          <Route path='/news/article/:id' component={Article} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
