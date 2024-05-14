import {useLocation} from "react-router-dom";

import ProductDetails from "../../Components/ProductDetails/ProductDetails.jsx";
import "./ProductDetailsPage.css"

const ProductDetailsPage = () => {
    const {state} = useLocation();

    const {title, category } = state.product;

    window.scrollTo(0, 0);

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