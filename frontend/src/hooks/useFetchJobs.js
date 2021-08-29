import axios from "axios"
import { useReducer, useEffect } from "react"


const initialState = {
    loading: true,
    error: '',
    jobs: []
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false, 
                jobs: action.payload.jobs,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                jobs: [],
                error: action.payload
            }
        default:
            return state 
    }
}



const useFetchJobs = (params) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/jobs/job_list/')
            .then(response => {
                dispatch({type: 'FETCH_SUCCESS', payload: {jobs: response.data}})
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, [params])
    
    console.log(state)
    console.log(state)
    return state
}

export default useFetchJobs
//   before change