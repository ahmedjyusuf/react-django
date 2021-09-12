// import logo from './logo.svg';
import './App.css';
// import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { ThemeProvider } from "styled-components";

import Articles from './views/feed/Articles';
import Article from './views/feed/Article';
import FlyoutJob from './views/jobs/FlyoutJob';
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



const LightTheme = {
  body: 'blue',
  text: '#363537',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
}

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
  tagLineColor: "lavender"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}



function App() {

  const [dark, setDark] = useState(localStorage.getItem('dark-mode') === 'true')
  console.log('darkksss', dark)
  const icon = dark ? <CgSun /> : <HiMoon />
  useEffect(() => {
    localStorage.setItem('dark-mode', dark)
  }, [dark])
  
  const toggleDarkMode = () => {
    setDark(!dark)
  }

  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={LightTheme}>
          <Nav />
        </ThemeProvider>

        {/* {icon}
        <Button onClick={() => setDark(!dark)}>bittpm</Button> */}
 
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/jobs/:id' component={FlyoutJob} />
          <Route path='/jobs' component={JobsIndex} />
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
