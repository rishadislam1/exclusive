import {useLocation, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {FaStar} from "react-icons/fa";
import React, {useEffect} from "react";
import ProductDetails from "../../Components/ProductDetails/ProductDetails.jsx";
import "./ProductDetailsPage.css"

const ProductDetailsPage = () => {
    const { productId } = useParams();
    const {state} = useLocation();

    const {title, category } = state.product;
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);
    return (
        <div >
            <h4 className="mb-5">Account/{category}/{title}</h4>
          <div>
              <ProductDetails/>
          </div>
        </div>
    );
};

export default ProductDetailsPage;