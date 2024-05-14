import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/apiSlice";
import productSlice from "../features/Products/ProductSlice.js";

export const store = configureStore({
    reducer:{
        poroductList: productSlice,
    },
    middleware: (getDefaultMiddlewares)=> getDefaultMiddlewares().concat(apiSlice.middleware)
})