import React from 'react'
import { useGetProductsQuery } from '../../../../redux/features/Products/ProductApi'
import Product from './Product';
import {FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";
import "./ProductSlider.css";


export default function ProductSlider() {
    const {data} = useGetProductsQuery();
    let box = document.querySelector('.product-container');

    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;


    }

    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;

    }

  return (
   <div>
       <div className="d-flex gap-3 justify-content-end">
           <button className="btn btn-primary" onClick={btnpressprev}><FaArrowLeftLong/></button>
           <button className="btn btn-primary" onClick={btnpressnext}><FaArrowRightLong/></button>

       </div>
       <div className='product-container d-flex justify-content-between align-items-center mt-5 gap-3 overflow-hidden'>
        {data?.products?.map((product)=><Product key={product.map} product={product}/>)}
        
    </div>
   <div className='d-flex justify-content-center align-items-center mt-5'> <button className='btn btn-danger'>View All Products </button></div>

   <hr className='mt-5' />
   </div>
  )
}
