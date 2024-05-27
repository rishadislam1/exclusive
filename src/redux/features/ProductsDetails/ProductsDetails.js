import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsDetails: []
}

export const ProductsDetails = createSlice({
    name:"productsdetails",
    initialState,
    reducers: {
        setProductsDetails: (state, action) => {
            state.productsDetails = action.payload
        }
    }
})

export const { setProductsDetails } = ProductsDetails.actions;
export default ProductsDetails.reducer;