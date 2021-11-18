//import { builder } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/cacheLifecycle';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { buildQueries } from '@testing-library/dom';
import axios from 'axios'


const jobHeader = {}
const baseUrl = 'http://localhost:8000/jobs/api/job/';
const createRequest = (url) => ({ url, headers: jobHeader })

export const jobApi = createApi({
    reducerPath: 'jobApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getJob: builder.query({
            query: ({ id }) => createRequest(`/${id}/`),
        })
    })
    
  });

export const { useGetJobQuery } = jobApi;
