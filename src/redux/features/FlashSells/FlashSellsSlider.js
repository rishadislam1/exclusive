import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    flashSellList: []
}

const FlashSellsSlider = createSlice({
  name: "flashSellSlider",
  initialState,
  reducers: {
    setFlashSellList: (state,action)=>{
        state.flashSellList=action.payload
    }
  }
});

export const {setFlashSellList} = FlashSellsSlider.actions

export default FlashSellsSlider.reducer