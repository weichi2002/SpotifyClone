import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
    
export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '427d3c633emsh9e776a3977474d7p1ad1f4jsn1c58c7d8d206' )
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world'}),
    }),

});

export const {
    useGetTopChartsQuery
} = shazamCoreApi; 