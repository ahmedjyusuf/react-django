import './App.css';
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";

import Article from './views/feed/Article';

import UpdateArticle from './views/feed/UpdateArticle';
import Nav from './components/Nav';
import PostArticle from './views/feed/PostArticle';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import NewsHandler from './views/feed/NewsHandler';
import Jobs from './features/jobs/Jobs'
import PostJob from './features/jobs/PostJob';



// from here

import FlyoutJob from './features/jobs/FlyoutJob'
import NotFound from './components/NotFound';

// to here



// before theme changes

function App() {
  document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"))
  
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
            <Route path="**">
              <NotFound />
            </Route>
          </div>
        </Switch>
        {/* <Footer /> */}
        <Footer />
      </div>

    </Router>
  );
}

export default App;
