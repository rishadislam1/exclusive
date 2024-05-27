

import {lazy} from "react";

const router = [
    {
        url: '/',
        component: lazy(()=>import('../pages/HomePage/HomePage.jsx'))
    },
    {
        url: '/productdetails/:productId',
        component: lazy(()=>import('../pages/ProductDetailsPage/ProductDetailsPage.jsx'))
    },
    {
        url: '/signup',
        component: lazy(()=>import('../pages/SignInPage/SignInPage.jsx'))
    },
    {
        url: '/login',
        component: lazy(()=>import('../pages/SignInPage/Login.jsx'))
    },
    {
        url: '/wishlist',
        component: lazy(()=>import('../pages/WishListPage/WishListPage.jsx'))
    },
    {
        url: '/cartlist',
        component: lazy(()=>import('../pages/CartList/CartListPage.jsx'))
    },
    {
        url: '*',
        component: lazy(()=>import('../pages/NotFound/NotFound.jsx'))
    }
]

export default  router;