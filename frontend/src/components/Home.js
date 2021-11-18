import {useState} from 'react'

import {AiOutlineExpandAlt} from 'react-icons/ai'
import {BsArrowsCollapse} from 'react-icons/bs'
const Home = () => {
    const [showingJobs, setShowingJobs] = useState(true)

    const text = () => {
        return showingJobs ? 'QARI' : 'I TUS'
    }
    return (
        <div>
            {/* {showingJobs ? `${text()} wa kaas` : `${text()} `} */}
            
            
            {/* onClick={() => setShowingJobs(!showingJobs)} */}
            <div className="jobs-index">
                
                

                <div className="toggle-theme">
                    <div className="round">Round</div>
                </div>
                <div className="collapse-jobs" >
                    <span>Jobs</span> 
                    <span onClick={() => setShowingJobs(!showingJobs)}>
                        {showingJobs ? <BsArrowsCollapse /> : <AiOutlineExpandAlt />}
                    </span>
                </div>
                
            {showingJobs &&
                <div id="home-jobs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro assumenda harum sapiente eos neque rem consectetur odit rerum repellendus nesciunt?
                </div>
            }
            </div>
            

            {/* {!showingJobs &&
            <div>
                <AiOutlineExpandAlt size={25}/>
                {console.log(showingJobs)} show jobs?
            </div>
            } */}
        </div>
    )
}

export default Home
