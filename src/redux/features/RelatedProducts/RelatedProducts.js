import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    relatedProducts: []
}

export const RealtedProducts = createSlice({
    name: "relatedProductsSlicer",
    initialState,
    reducers: {
        setRelatedProducts: (state, action)=>{
            state.relatedProducts = action.payload
        }
    }
});

export const {setRelatedProducts} = RealtedProducts.actions;

export default RealtedProducts.reducer;