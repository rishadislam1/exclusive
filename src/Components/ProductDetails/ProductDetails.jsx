import React, {useState} from 'react';
import {FaStar} from "react-icons/fa";
import {useSelector} from "react-redux";
import "./ProductDetails.css"
import {GrFavorite} from "react-icons/gr";
import {TbTruckDelivery} from "react-icons/tb";
import {IoReturnDownForward} from "react-icons/io5";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import Product from "../HomePageComponents/TodaysComponent/ProductSlider/Product.jsx";

const ProductDetails = ({productId}) => {

    const products = useSelector(state=>state.products.products);
    const singleProduct = products.find(product =>product.id === Number(productId));

    const { id, img, title, prevPrice, newPrice, color, reviews, company, category } = singleProduct;
    const productCategory = products.filter(product =>product.category === category);
    console.log(productCategory)
    const [count,setCount] = useState(0);
    const [disable,setDisable] = useState(false);

    const handlePlus=()=>{
        setCount(count+1);
        setDisable(false);
    }
    const handleMinus=()=>{
        if(count<2){
            setDisable(true);
        }
        setCount(count-1);
    }
    return (
        <div>
            <div className="d-md-flex align-items-center justify-content-center gap-5 ">
                <div className="">
                    <div className="d-md-flex justify-content-center align-items-center gap-4">
                        <div>
                            <div><img src={img} style={{height: "100px"}}/></div>
                            <div><img src={img} style={{height: "100px", marginTop: "10px"}}/></div>
                            <div><img src={img} style={{height: "100px", marginTop: "10px"}}/></div>
                            <div><img src={img} style={{height: "100px", marginTop: "10px"}}/></div>
                        </div>
                        <div>
                            <div><img src={img} className="mainImage w-100"/></div>
                        </div>
                    </div>
                </div>
                <div >
                    <h2>{title}</h2>
                    <div>
                        <span style={{color: "gold"}}>
                          <FaStar/>
                          <FaStar/>
                          <FaStar/>
                          <FaStar/>
                          <FaStar/>
                        </span>{" "}
                        {reviews} | <span className="text-success">In Stock</span>
                    </div>
                    <h4 className="mt-3">${newPrice}</h4>
                    <p>{title}</p>
                    <hr/>
                    <div>
                        Colors: {color}
                    </div>
                    <div className="d-flex gap-2 align-items-center mt-3">
                        Size: <button className="btn1 btn btn-ghost border-1  rounded">XS</button>
                        <button className="btn1 rounded btn btn-danger">S</button>
                        <button className="btn1 btn btn-ghost border-1  rounded">M</button>
                        <button className="btn1 btn btn-ghost border-1  rounded">L</button>
                        <button className="btn1 btn btn-ghost border-1  rounded">XL</button>
                    </div>
                    <div className="mt-5 d-flex align-items-center gap-3">
                        <div className="d-flex btn-group ">
                            <button className="btn btn-ghost btn1" onClick={handleMinus} disabled={disable}>-</button>
                            <button className=" btn btn-ghost btn1  px-4">{count}</button>
                            <button className="btn btn-ghost btn1" onClick={handlePlus}>+</button>
                        </div>
                        <button className="btn btn-danger">Buy Now</button>
                        <button className="btn1 btn btn-ghost"><GrFavorite />
                        </button>
                    </div>
                    <div className="border-2 rounded mt-5">
                        <div className="deliverBorder">
                            <div className="d-flex align-items-center gap-3">
                                <TbTruckDelivery className="deliver" />

                                <div>
                                    <h5>Free Delivery</h5>
                                    <p>Enter your postal code for Delivery Availability</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="d-flex align-items-center gap-3">
                                <IoReturnDownForward className="deliver"/>

                                <div>
                                    <h5>Return Delivery</h5>
                                    <p>Free 30 Days Delivery Returns. Details</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="mt-5">
                <SectionHeader categories="Related Items" />
            </div>

            <div className="d-md-flex flex-wrap align-items-center gap-5 ">
                {productCategory?.map((product)=><Product key={product.map} product={product}/>)}
            </div>
        </div>
    );
};

export default ProductDetails;