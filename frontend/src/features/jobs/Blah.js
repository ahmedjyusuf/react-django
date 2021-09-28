import { Link, NavLink, Switch, Route, useParams } from 'react-router-dom'
import Jobs from './Jobs'
import FlyoutJob from './FlyoutJob'
const id = 5;

const alpha = () => {
    return (
        <div>
            Alpha pagge
            <Link to={`/beta/${id}`}>abc Beta</Link>
        </div>
    )
}

//beta
const beta = () => {
    
    return (
        <div>
            blah blah beta
            
        </div>
    )
}

//main
const Blah = () => {
    
    return (
        <div>
            <Jobs /> 
            
            <Link to='/alpha'>Alpha</Link>
            <Link to={`/beta/${id}`}>Beta</Link>
            {/* <Link to={`/topics/${id}`}>{name}</Link> */}
            <Switch>
                <Route  path='/alpha' component={alpha} />
                <Route  path='/beta/:id' component={FlyoutJob} />
            </Switch>
        </div>
    )
}

export default Blah
