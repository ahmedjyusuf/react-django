import { Button } from "react-bootstrap"
// const style = {
//     color: 'green',
//     backgroundColor: '#202124',
  

// }
const Search = () => {
    return (
        <div className="search-bar">
            
            <div><input type="text" className="search" placeholder="Start your job search here" /></div>
            <Button variant="primary">Search</Button>
        </div>
    )
}

export default Search
