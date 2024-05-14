import SectionHeader from "../../SectionHeader/SectionHeader.jsx";
import Product from "../TodaysComponent/ProductSlider/Product.jsx";
import React from "react";
import {useGetProductsQuery} from "../../../redux/features/Products/ProductApi.js";
import {useSelector} from "react-redux";

const ExploreProducts = () => {

    const data = useSelector(state=>state.poroductList.products);
    return (
        <div className="mt-5">
            <SectionHeader categories="Our Products" header="Explore Our Products"/>
            <div
                className='product-container d-flex flex-wrap justify-content-between align-items-center mt-5 gap-3'>
                {data?.slice(0,8).map((product) => <Product key={product.map} product={product}/>)}

            </div>
            <div className="mt-5 d-flex justify-content-center align-items-center">
                <button className="btn btn-danger">View All Products</button>
            </div>
        </div>
    );
};

export default ExploreProducts;