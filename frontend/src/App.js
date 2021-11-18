import './App.css';
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";

import Article from './views/feed/Article';

import UpdateArticle from './views/feed/UpdateArticle';
import Nav from './components/Nav';
import PostArticle from './views/feed/PostArticle';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Jobs from './features/jobs/Jobs'
import PostJob from './features/jobs/PostJob';


import FlyoutJob from './features/jobs/FlyoutJob'
import NotFound from './components/NotFound';

function App() {
  document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"))
  
  return (
    <Router>
      <div className="App">
          <Nav />
          <div className='content'>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/jobs/post_job' exact component={PostJob} />
            <Route path='/jobs'  component={Jobs} />
            <Route path='/news/about/' component={About}/>
            <Route path='/news' >
              <div>hello</div>
            </Route>
            <Route path='/news/post_form' component={PostArticle} />
            <Route path='/news/update/:pk' exact component={UpdateArticle}/>
            <Route path='/news/article/:id' component={Article} />
            <Route path='/jobs/:id' component={FlyoutJob} />
            <Route path="*">
              <NotFound />
            </Route>
        </Switch>
          </div>
        <Footer />
      </div>

    </Router>
  );
}

export default App;
