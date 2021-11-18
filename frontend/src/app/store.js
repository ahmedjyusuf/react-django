import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from '../features/jobs/jobsSlice';
import {jobApi} from '../features/jobs/jobApi'

const store = configureStore({
    reducer: {
        jobs: jobsReducer,
        [jobApi.reducerPath]: jobApi.reducer,
    }
})

export default store