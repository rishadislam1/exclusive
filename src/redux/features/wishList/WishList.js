import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    wishlist: [],
    cartList: [],
    totalPriceList: 0
}

export const WishListSlice = createSlice({
    name: "wishListSlice",
    initialState,
    reducers: {
        setWishList: (state, action)=>{
            state.wishlist.push( action.payload)
        },
        clearWishList: (state)=>{
            state.wishlist = []
        },
        clearSingleWishList: (state, action)=>{
            const idToRemove = action.payload;
            state.wishlist = state.wishlist.filter(item => item.id !== idToRemove);
        },
        clearSingleCartList: (state, action)=>{
            const idToRemove = action.payload;
            state.cartList = state.cartList.filter(item => item.id !== idToRemove);
        },
        setCartList: (state, action)=>{
            state.cartList.push( action.payload)
        },
        totalCount: (state, action)=>{
            state.totalPriceList+= action.payload
        }
    }
});

export const {setWishList,setCartList, clearWishList, clearSingleWishList, totalCount, clearSingleCartList} = WishListSlice.actions;
export default WishListSlice.reducer;