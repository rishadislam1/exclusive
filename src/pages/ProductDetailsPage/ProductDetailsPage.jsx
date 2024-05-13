import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {FaStar} from "react-icons/fa";
import React from "react";
import ProductDetails from "../../Components/ProductDetails/ProductDetails.jsx";

const ProductDetailsPage = () => {
    const { productId } = useParams();

    const products = useSelector(state=>state.products.products);
    const singleProduct = products.find(product =>product.id === Number(productId));
    const { id, img, title, prevPrice, newPrice, color, reviews, company, category } = singleProduct;

    return (
        <div>
            <h3>Account/{category}/{title}</h3>
           <ProductDetails productId={productId}/>
        </div>
    );
};

export default ProductDetailsPage;