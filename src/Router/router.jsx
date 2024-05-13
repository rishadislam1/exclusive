import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../pages/HomePage/HomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage.jsx";

const router= createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path:'/',
                element: <HomePage/>
            },
            {
                path: '/productdetails/:productId',
                element: <ProductDetailsPage/>
            }
        ]
    }
])

export default router;