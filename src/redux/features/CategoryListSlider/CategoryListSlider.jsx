import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryList: []
}

const CategoryListSlider = createSlice({
  name: "categoryListSlider",
  initialState,
  reducers: {
    setCategoryList: (state,action)=>{
        state.categoryList=action.payload
    }
  }
});

export const {setCategoryList} = CategoryListSlider.actions

export default CategoryListSlider.reducer