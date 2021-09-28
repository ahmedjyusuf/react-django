import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";



export const fetchJobs = createAsyncThunk(
    'jobs/fetchJobs',
    async () => {
        const data = await fetch('http://127.0.0.1:8000/jobs/job_list/').then((res) => 
         res.json()
        )
        const mappedData = data.map((job) =>({
            ...job,
        }))
        const jobs = data.map((job) => ({
            ...job
        }))
        return { jobs }
    }
)
export const fetchoneJob =  createAsyncThunk(
    'jobs/fetchoneJob',
    async (id) => {
        const data = await fetch(`http://localhost:8000/jobs/api/job/${id}/`).then((res) => 
        res.json()
        )
        const job = data
        console.log(job)
        return { job }
    }
)

export const deleteJob = createAsyncThunk(
    'jobs/deletejob',
    async (id) => {
        await fetch(`http://localhost:8000/jobs/api/delete/${id}/`, {
            method: 'DELETE',
        })
        return id
    }
)


const jobsAdapter = createEntityAdapter({
    selectId: (job) => job.id,
})

const jobsSlice = createSlice({
    name: 'jobs',
    initialState: jobsAdapter.getInitialState({
        loading: false,
    }),
    reducers: {
        setAllJobs: jobsAdapter.setAll,
        setOneJob: jobsAdapter.setOne,
        deleteOneJob: jobsAdapter.removeOne,
        addManyJobs: jobsAdapter.addMany,
        updateOneJob: jobsAdapter.updateOne,

    },
    extraReducers: {
        [fetchJobs.pending]: (state) => {
            state.loading = true;
        },
        [fetchJobs.fulfilled]: (state, { payload }) => {
            state.loading = false;
            jobsAdapter.setAll(state, payload.jobs)
            // state.jobs = action.payload;
        },
        [fetchJobs.rejected]: (state, action) => {
            state.loading = false;
        },
        // single job
        [fetchoneJob.pending]: (state) => {
            state.loading = true;
        },
        [fetchoneJob.fulfilled]: (state, { payload }) => {
            state.loading = false;
            jobsAdapter.setOne(state, payload.job)
        },
        [fetchoneJob.rejected]: (state) => {
            state.loading = false;
        },
        // deleting jobs
        [deleteJob.pending]: (state) => {
            state.loading = true;
        },
        [deleteJob.fulfilled]: (state, { payload: id }) => {
            state.loading = false;
            jobsAdapter.removeOne(state, id)
        },
        [deleteJob.rejected]: (state) => {
            state.loading = false;
        },
    }
})
export const jobsSelector = jobsAdapter.getSelectors(
    (state) => state.jobs
)
export const jobSelector = jobsAdapter.getSelectors(
    (state) => state.job
)
export default jobsSlice.reducer;