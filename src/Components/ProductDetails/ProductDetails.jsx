import {useEffect, useState} from 'react';
import {FaArrowDown, FaArrowUp, FaStar} from "react-icons/fa";
import "./ProductDetails.css"
import {TbTruckDelivery} from "react-icons/tb";
import {IoReturnDownForward} from "react-icons/io5";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import Product from "../HomePageComponents/TodaysComponent/ProductSlider/Product.jsx";
import {useLocation} from "react-router-dom";
import {MdFavorite} from "react-icons/md";

const ProductDetails = () => {


    const {state} = useLocation();

    const products = JSON.parse(localStorage.getItem("products"))

    const { category, img, title, newPrice, reviews, images} = state.product;
    const productCategory = products?.products?.filter(product =>product.category === category);

    const [count,setCount] = useState(0);
    const [disable,setDisable] = useState(false);
    const [sizeSelect, setSizeSelect] = useState('xs');
    const [favourite, setFavourite] = useState(false);
    const [selectImage, setSelectImage] = useState(images[0]);
    const [prevImage, setPrevImage] = useState(images[0]);

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

    const handleFormSubmit = (e)=>{
        e.preventDefault();
    }
    let box = document.querySelector('.product-container');
    const btnpressprev = () => {

        let height = box?.clientHeight;
        box.scrollTop = box?.scrollTop - height;
    }

    const btnpressnext = () => {

        let height = box?.clientHeight;
        box.scrollTop = box?.scrollTop + height;

    }

    return (
        <div >
            <div className="d-lg-flex  gap-5 productDetails w-100">
                <div className={`${images.length > 4 ? "d-block":"d-none"} `}>
                    <button className="btn btn-danger" onClick={btnpressprev}><FaArrowUp />
                    </button>
                    <button className="btn btn-danger mt-lg-3 ms-2 ms-lg-0"  onClick={btnpressnext}><FaArrowDown />
                    </button>
                </div>
                <div className="d-flex flex-md-row flex-column-reverse justify-content-center align-items-center gap-4 ">
                    <div className="d-flex flex-md-column gap-2 overflow-hidden product-container" style={{height: "580px"}}>
                        {images?.map((image, index) => <div key={index} onClick={() => setSelectImage(images[index])}>
                            <img src={image} style={{height: "138px", width: "200px", cursor: "pointer", border: "3px solid #F5F5F5"}}/></div>)}
                    </div>

                    <div>
                        <div className="bg-white p-5 mainImageDiv rounded" style={{border: "3px solid #F5F5F5"}}><img
                            src={selectImage !== prevImage ? selectImage : images[0]} className="mainImage w-100"/>
                        </div>
                    </div>
                </div>

                <div className="mt-5 mt-lg-0">
                    <h4>{title}</h4>
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
                    <h4 className="mt-2">${newPrice}</h4>
                    <p>{title}</p>
                    <hr/>
                    <form onSubmit={handleFormSubmit}>
                        <div className="d-flex gap-3">
                            Colors:
                            <div className="form-check">
                                <input className="form-check-input red" type="radio" name="flexRadioDefault" value="red"
                                       id="redColor"/>

                            </div>
                            <div className="form-check">
                                <input className="form-check-input blue" type="radio" name="flexRadioDefault"
                                       value="blue"
                                       id="blueColor"/>

                            </div>
                        </div>
                        <div className="d-flex gap-2 align-items-center mt-3">
                            Size: <button
                            className={` btn  rounded ${sizeSelect === 'xs' ? "btn-danger border-danger" : "btn-ghost border-success"}`}
                            onClick={() => setSizeSelect('xs')}>XS</button>
                            <button
                                className={` btn   rounded ${sizeSelect === 's' ? "btn-danger border-danger" : "btn-ghost border-success"}`}
                                onClick={() => setSizeSelect('s')}>S
                            </button>
                            <button
                                className={` btn  rounded ${sizeSelect === 'm' ? "btn-danger border-danger" : "btn-ghost border-success"}`}
                                onClick={() => setSizeSelect('m')}>M
                            </button>
                            <button
                                className={` btn    rounded ${sizeSelect === 'l' ? "btn-danger border-danger" : "btn-ghost border-success"}`}
                                onClick={() => setSizeSelect('l')}>L
                            </button>
                            <button
                                className={` btn  rounded ${sizeSelect === 'xl' ? "btn-danger border-danger" : "btn-ghost border-success"}`}
                                onClick={() => setSizeSelect('xl')}>XL
                            </button>
                        </div>
                        <div className="mt-3 d-flex align-items-center gap-3">
                            <div className="d-flex btn-group ">
                                <button className="btn btn-ghost btn1" onClick={handleMinus} disabled={disable}>-
                                </button>
                                <button className=" btn btn-ghost btn1  px-4">{count}</button>
                                <button className="btn btn-ghost btn1" onClick={handlePlus}>+</button>
                            </div>
                            <button className="btn btn-danger">Buy&nbsp;Now</button>
                            <button
                                className={` btn btn-ghost ${favourite ? "text-warning bg-danger border-danger" : "text-black btn1"} `}
                                onClick={() => setFavourite(!favourite)}><MdFavorite
                                className={`${favourite ? "text-warning " : "text-black border-2"}`}/>
                            </button>
                        </div>
                    </form>
                    <div className="border-2 rounded mt-3">
                        <div className="deliverBorder">
                            <div className="d-flex align-items-center gap-3">
                                <TbTruckDelivery className="deliver"/>

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
            <SectionHeader categories="Related Items"/>
            </div>

            <div className="d-md-flex flex-wrap align-items-center gap-5 ">
                {productCategory?.map((product) => <Product key={product.map} product={product}/>)}
            </div>
        </div>
    );
};

export default ProductDetails;