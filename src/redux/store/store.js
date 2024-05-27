import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/apiSlice";
import productSlice from "../features/Products/ProductSlice.js";
import wishList from "../features/wishList/WishList.js";
import CategoryListSlider from "../features/CategoryListSlider/CategoryListSlider.jsx";
import FlashSellsSlider from "../features/FlashSells/FlashSellsSlider.js";
import ProductsDetails from "../features/ProductsDetails/ProductsDetails.js";
import BestSellingProduct from "../features/BestSellingProduct/BestSellingProduct.js";
import RelatedProducts from "../features/RelatedProducts/RelatedProducts.js";

export const store = configureStore({
    reducer:{
        poroductList: productSlice,
        wishListSlice: wishList,
        categoryListSlider: CategoryListSlider,
        flashSellSlider: FlashSellsSlider,
        productsdetails:ProductsDetails,
        bestSellingProduct:BestSellingProduct,
        relatedProductsSlicer:RelatedProducts
    },
    
})
