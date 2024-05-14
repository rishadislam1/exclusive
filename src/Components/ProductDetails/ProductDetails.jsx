import {useState} from 'react';
import {FaStar} from "react-icons/fa";
import "./ProductDetails.css"
import {GrFavorite} from "react-icons/gr";
import {TbTruckDelivery} from "react-icons/tb";
import {IoReturnDownForward} from "react-icons/io5";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import Product from "../HomePageComponents/TodaysComponent/ProductSlider/Product.jsx";
import {useLocation} from "react-router-dom";
import {MdFavorite} from "react-icons/md";

const ProductDetails = () => {
    const {state} = useLocation();

    const products = JSON.parse(localStorage.getItem("products"))

    const { category, img, title, newPrice, reviews} = state.product;
    const productCategory = products?.products?.filter(product =>product.category === category);

    const [count,setCount] = useState(0);
    const [disable,setDisable] = useState(false);
    const [sizeSelect, setSizeSelect] = useState('xs');
    const [favourite, setFavourite] = useState(false);

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


    return (
        <div >
            <div className="d-lg-flex  gap-5 productDetails w-100">

                    <div className="d-flex flex-md-row flex-column justify-content-center align-items-center gap-4">
                        <div>
                            <div><img src={img} style={{height: "138px"}}/></div>
                            <div><img src={img} style={{height: "138px", marginTop: "10px"}}/></div>
                            <div><img src={img} style={{height: "138px", marginTop: "10px"}}/></div>
                            <div><img src={img} style={{height: "138px", marginTop: "10px"}}/></div>
                        </div>
                        <div>
                            <div className="bg-white p-5"><img src={img} className="mainImage w-100"/></div>
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
                                <label className="form-check-label" htmlFor="redColor">
                                   Red
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input blue" type="radio" name="flexRadioDefault" value="blue"
                                       id="blueColor" checked/>
                                <label className="form-check-label" htmlFor="blueColor">
                                    Blue
                                </label>
                            </div>
                        </div>
                        <div className="d-flex gap-2 align-items-center mt-3">
                            Size: <button className={`btn1 btn  border-1  rounded ${sizeSelect==='xs'?"btn-danger":"btn-ghost"}`} onClick={()=>setSizeSelect('xs')}>XS</button>
                            <button className={`btn1 btn  border-1  rounded ${sizeSelect==='s'?"btn-danger":"btn-ghost"}`} onClick={()=>setSizeSelect('s')}>S</button>
                            <button className={`btn1 btn  border-1  rounded ${sizeSelect==='m'?"btn-danger":"btn-ghost"}`} onClick={()=>setSizeSelect('m')}>M</button>
                            <button className={`btn1 btn  border-1  rounded ${sizeSelect==='l'?"btn-danger":"btn-ghost"}`} onClick={()=>setSizeSelect('l')}>L</button>
                            <button className={`btn1 btn  border-1  rounded ${sizeSelect==='xl'?"btn-danger":"btn-ghost"}`} onClick={()=>setSizeSelect('xl')}>XL</button>
                        </div>
                        <div className="mt-3 d-flex align-items-center gap-3">
                            <div className="d-flex btn-group ">
                                <button className="btn btn-ghost btn1" onClick={handleMinus} disabled={disable}>-
                                </button>
                                <button className=" btn btn-ghost btn1  px-4">{count}</button>
                                <button className="btn btn-ghost btn1" onClick={handlePlus}>+</button>
                            </div>
                            <button className="btn btn-danger">Buy&nbsp;Now</button>
                            <button className={`btn1 btn btn-ghost`} onClick={()=>setFavourite(!favourite)}><MdFavorite
                                className={`${favourite?"text-warning":"text-black border-2"}`}/>
                            </button>
                        </div>
                    </form>
                    <div className="border-2 rounded mt-5">
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