
import Product from "../TodaysComponent/ProductSlider/Product.jsx";

import {useSelector} from "react-redux";


const BestSellong = () => {

    // const data = useSelector(state=>state.poroductList.products);
    const data = useSelector(state=>state.bestSellingProduct.bestSellingProducts);


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
                    {data?.map((product,index) => <Product key={index} product={product}/>)}


                </div>
            </div>
        </div>
    );
};

export default BestSellong;