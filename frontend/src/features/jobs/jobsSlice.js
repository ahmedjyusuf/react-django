import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getJobs = createAsyncThunk(
    'jobs/getJobs',
    async (dispatch, getState) => {
        return await fetch('http://localhost:8000/news/api/article_list/').then(
            (res) => res.json()
        )
    }
)

const jobsSlice = createSlice({
    name: 'job',
    initialState: {
        jobs: [],
        status: null,
    },
    extraReducers: {
        [getJobs.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getJobs.fulfilled]: (state, action) => {
            state.status = 'success';
            state.jobs = action.payload;
        },
        [getJobs.rejected]: (state, action) => {
            state.status = 'failed';
        }
    }
})

export default jobsSlice.reducer;