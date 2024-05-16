import {Link, useLocation} from "react-router-dom";

import ProductDetails from "../../Components/ProductDetails/ProductDetails.jsx";
import "./ProductDetailsPage.css"

const ProductDetailsPage = () => {
    const {state} = useLocation();

    const {title, category } = state.product;

    window.scrollTo(0, 0);

    return (
        <div className="container mx-auto">
            <h4 className="mb-5"><Link to={'/'} style={{color: "black"}}>Home</Link>/<Link to={'/category'}  style={{color: "black"}}>{category}</Link>/ {title}</h4>
          <div>
              <ProductDetails/>
          </div>
        </div>
    );
};

export default ProductDetailsPage;