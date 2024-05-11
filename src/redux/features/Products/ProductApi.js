import { apiSlice } from "../apiSlice";

export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getProducts: builder.query({
            query: ()=>`data.json`
        })
    })
})

export const {useGetProductsQuery} = productApi;