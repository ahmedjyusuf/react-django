import { Link } from 'react-router-dom'
import { useEffect, useState} from 'react'
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

function Nav() {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark" ? true : false);
    const [navCollapse, setNavCollapse] = useState(true)
    const darkOS = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
    // useEffect(() => {
    //   document
    //       .getElementsByTagName("HTML")[0]
    //       .setAttribute("data-theme", localStorage.getItem("theme"))
    //       if (darkOS) {
    //         localStorage.setItem("theme",  "dark")
    //         setIsDarkMode(true)
    //       }
          
    // }, [darkOS]);

    console.log(darkOS)
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


      
    console.log('darkmode', darkOS)
    const icon = isDarkMode ? <CgSun style={{color: "yellow"}} /> : <HiMoon />
    return (
        
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                
                <a className="navbar-brand" href="/">Navbar</a>
                {/* {!darkOS && <div className='theme-selector' onClick={toggleThemeChange}>{icon}</div> } */}
                <div>
                    <input type="checkbox" name="switch" id="switch" checked={isDarkMode}  onClick={toggleThemeChange}/>
                    <label for="switch"></label>
                </div>
                
                <button className="navbar-toggler blah" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/jobs">jobs</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/news">News</a>
                    </li>
                    <li className='nav-item'>
                        <a className="nav-link" href="/news/post_form">Post News</a>
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
