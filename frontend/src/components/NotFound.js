import { useLocation } from "react-router"
const NotFound = () => {
    const location = useLocation()
    return (
        <div>
            <h1>404 sorry not found</h1>
            
        </div>
    )
}

export default NotFound
