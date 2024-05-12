import {useGetProductsQuery} from "../../../redux/features/Products/ProductApi.js";
import Product from "../TodaysComponent/ProductSlider/Product.jsx";
import React from "react";


const BestSellong = () => {
    const {data} = useGetProductsQuery();

    return (
        <div className="mt-5">
            <div className="d-flex  justify-content-between align-items-center">
                <div>
                    <div style={{borderLeft: "7px solid red"}}>
                        <h4 style={{marginLeft: "20px", color: "red"}}>This Month</h4>
                    </div>
                    <div className="mt-4 d-flex align-items-center gap-5">
                        <h1>Best Selling Products</h1>

                    </div>
                </div>
                <div>
                    <button className="btn btn-danger">View All</button>
                </div>
            </div>
            <div>
                <div
                    className='product-container d-flex justify-content-between align-items-center mt-5 gap-3 overflow-hidden'>
                    {data?.products?.slice(0, 4).map((product) => <Product key={product.map} product={product}/>)}


                </div>
            </div>
        </div>
    );
};

export default BestSellong;