import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

import Article from './views/feed/Article';
import FlyoutJob from './views/jobs/FlyoutJob';
import UpdateArticle from './views/feed/UpdateArticle';
import Nav from './components/Nav';
import PostArticle from './views/feed/PostArticle';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import NewsHandler from './views/feed/NewsHandler';
import Jobs from './features/jobs/Jobs'
import { useState } from 'react';
// from here
import {Typography, Paper} from '@mui/material'
import {ThemeProvider, createTheme} from '@mui/material'
// to here





function App() {

  const [dark, setDark] = useState(localStorage.getItem('dark-mode') === 'true')
  console.log('darkksss', dark)
  const icon = dark ? <CgSun /> : <HiMoon />
  // useEffect(() => {
  //   localStorage.setItem('dark-mode', dark)
  // }, [dark])
  
  // const toggleDarkMode = () => {
  //   setDark(!dark)
  // }


  return (
    <Router>
      <div className="App">
          <Nav />
        {/* {icon}
        <Button onClick={() => setDark(!dark)}>bittpm</Button> */}
 
        <Switch>
          <Route path='/' exact component={Home} />

          <Route path='/jobs' component={Jobs} />
          <Route path='/news/about/' component={About}/>
          <Route path='/news' exact component={NewsHandler} />
          <Route path='/news/post_form' component={PostArticle} />
          <Route path='/news/update/:pk' exact component={UpdateArticle}/>
          <Route path='/news/article/:id' component={Article} />
          <Route path='/jobs/:id' component={FlyoutJob} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
