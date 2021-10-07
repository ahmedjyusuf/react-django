import { Link } from 'react-router-dom'
import { useEffect, useState} from 'react'
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

function Nav() {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark" ? true : false);

    useEffect(() => {
      document
          .getElementsByTagName("HTML")[0]
          .setAttribute("data-theme", localStorage.getItem("theme"))
          if (!isDarkMode) {
            localStorage.setItem("theme",  "dark")
          }
          
    }, []);
  
    const toggleThemeChange = () => {
      if (isDarkMode === false) {
        localStorage.setItem("theme",  "dark")
        document
          .getElementsByTagName("HTML")[0]
          .setAttribute("data-theme", localStorage.getItem("theme"));
          setIsDarkMode(true)
      } else {
        localStorage.setItem("theme",  "light")
        document
          .getElementsByTagName("HTML")[0]
          .setAttribute("data-theme", localStorage.getItem("theme"));
          setIsDarkMode(false)
      }
      
      
    }
    const darkOS = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      
    console.log('darkmode', darkOS)
    const icon = isDarkMode ? <CgSun style={{color: "yellow"}} /> : <HiMoon />
    return (
        
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Navbar</a><div className='theme-selector' onClick={toggleThemeChange}>{icon}</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className='nav-item'>
                        <Link to='/news/post_form' className='nav-link'>Post news</Link>
                    </li>
                    <li className="nav-item">
            
                        <Link to='/news' className="nav-link">NEws</Link>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/">Action</a>
                        <a className="dropdown-item" href="/">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/">Something else here</a>
                        </div>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/">Disabled</a>
                        
                    </li>
                    </ul>
                    
                    
                </div>
            </nav> 
        </div>
    )
}

export default Nav



// import { useEffect, useState} from 'react'
// import { CgSun } from "react-icons/cg";
// import { HiMoon } from "react-icons/hi";

// function Nav() {
//     const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark" ? true : false);

//     useEffect(() => {
//       document
//           .getElementsByTagName("HTML")[0]
//           .setAttribute("data-theme", localStorage.getItem("theme"))
//     }, []);
  
//     const toggleThemeChange = () => {
//       if (isDarkMode === false) {
//         localStorage.setItem("theme",  "dark")
//         document
//           .getElementsByTagName("HTML")[0]
//           .setAttribute("data-theme", localStorage.getItem("theme"));
//           setIsDarkMode(true)
//       } else {
//         localStorage.setItem("theme",  "light")
//         document
//           .getElementsByTagName("HTML")[0]
//           .setAttribute("data-theme", localStorage.getItem("theme"));
//           setIsDarkMode(false)
//       }
      
      
//     }
//     const icon = isDarkMode ? <CgSun style={{color: "yellow"}} /> : <HiMoon />
//     return (
//        <div className='the-nav'>
//            <nav>
//             <div className='nav'>
//               <div>the logo</div>
//               <div className='theme-selector' onClick={toggleThemeChange}>{icon}</div>
//             </div>
//           </nav>
//        </div>
//     )
// }
