import './App.css';
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

import Article from './views/feed/Article';
// import FlyoutJob from './views/jobs/FlyoutJob';
import UpdateArticle from './views/feed/UpdateArticle';
import Nav from './components/Nav';
import PostArticle from './views/feed/PostArticle';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import NewsHandler from './views/feed/NewsHandler';
import Jobs from './features/jobs/Jobs'
import PostJob from './features/jobs/PostJob';
import { useState, useEffect } from 'react';


// from here
import {Button} from 'react-bootstrap'
import FlyoutJob from './features/jobs/FlyoutJob'
import Blah from './features/jobs/Blah';
// to here



// before theme changes

function App() {
  document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"))
  // const [dark, setDark] = useState(localStorage.getItem('dark-mode') === 'true')
  // console.log('darkksss', dark)
  // const icon = dark ? <CgSun /> : <HiMoon />
  // // useEffect(() => {
  // //   localStorage.setItem('dark-mode', dark)
  // // }, [dark])
  
  // const toggleDarkMode = () => {
  //   setDark(!dark)
  //   document
  //       .getElementsByTagName("HTML")[0]
  //       .setAttribute("data-theme", "dark");
  //   if (dark) {
  //     document.getElementsByTagName("HTML")[0].setAttribute("data-theme", "dark");
  //   }
  // }

  // useEffect(() => {
  //   localStorage.setItem('dark-mode', dark)
  // }, [dark])
  //before changes2
  
  
  return (
    <Router>
      <div className="App">
          <Nav />

        <Switch>
          <div className='content'>
            <Route path='/' exact component={Home} />
            {/* <Route paht='/blah' component={Blah} /> */}
            <Route path='/jobs/post_job' exact component={PostJob} />
            <Route path='/jobs'  component={Jobs} />
            {/* <Route path='/jobs/job/:id' component={FlyoutJob} /> */}
            <Route path='/news/about/' component={About}/>
            <Route path='/news' exact component={NewsHandler} />
            <Route path='/news/post_form' component={PostArticle} />
            <Route path='/news/update/:pk' exact component={UpdateArticle}/>
            <Route path='/news/article/:id' component={Article} />
            <Route path='/jobs/:id' component={FlyoutJob} />
          </div>
        </Switch>
        {/* <Footer /> */}
        <Footer />
      </div>

    </Router>
  );
}

export default App;
