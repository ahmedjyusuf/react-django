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

import JobsIndex from './views/jobs/JobsIndex';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <JobsIndex />
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
