import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/apiSlice";
import productSlice from "../features/Products/ProductSlice.js";

export const store = configureStore({
    reducer:{
        products: productSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddlewares)=> getDefaultMiddlewares().concat(apiSlice.middleware)
})