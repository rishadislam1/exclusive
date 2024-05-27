import {Link, useLocation, useParams} from "react-router-dom";

import ProductDetails from "../../Components/ProductDetails/ProductDetails.jsx";
import "./ProductDetailsPage.css"
import { useEffect } from "react";
import { ProductsDetailsApi } from "../../ApiRequest/ProductsDetailsApi.jsx";
import { useSelector } from "react-redux";

const ProductDetailsPage = () => {
    const { productId } = useParams();

  
  useEffect(()=>{
    // console.log('first')
    (async () => {
      await ProductsDetailsApi(Number(productId));
    })();
  },[])

  const productDetailsWithApi = useSelector(state=>state.productsdetails.productsDetails)


  const {Title,Tags} = productDetailsWithApi;


    window.scrollTo(0, 0);

    return (
        <div className="container mx-auto">
           <h4 className="mb-5"><Link to={'/'} style={{color: "black"}}>Home</Link>/<Link to={'/category'}  style={{color: "black"}}>{Tags}</Link>/ {Title}</h4> 
          <div>
              <ProductDetails/>
          </div>
        </div>
    );
};

export default ProductDetailsPage;