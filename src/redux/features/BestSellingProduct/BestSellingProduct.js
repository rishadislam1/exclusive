import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    bestSellingProducts: []
}

const BestSellingProduct = createSlice({
  name: "bestSellingProduct",
  initialState,
  reducers: {
    setBestSellingProducts: (state,action)=>{
        state.bestSellingProducts=action.payload
    }
  }
});

export const {setBestSellingProducts} = BestSellingProduct.actions

export default BestSellingProduct.reducer