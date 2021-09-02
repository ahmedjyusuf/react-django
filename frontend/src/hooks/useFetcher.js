import axios from "axios"
import { useReducer, useEffect } from "react"


const initialState = {
    loading: true,
    error: '',
    data: []
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'MAKE_REQUEST':
            return  { loading: true, data: [], error: 'Loading....' }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false, 
                data: action.payload.data,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        default:
            return state 
    }
}



const useFetcher = (params, url) => {
     console.log(url)
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({type: 'MAKE_REQUEST'})
        axios
            .get(url)
            .then(response => {
                dispatch({type: 'FETCH_SUCCESS', payload: {data: response.data}})
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, [params, url])
    
    console.log(state)
    console.log(state)
    return state
}

export default useFetcher
//   before change