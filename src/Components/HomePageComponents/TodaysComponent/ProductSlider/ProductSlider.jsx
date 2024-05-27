
import Product from './Product';
import {FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";
import "./ProductSlider.css";
import {useSelector} from "react-redux";


export default function ProductSlider() {
    // const data = useSelector(state=>state.poroductList.products);
    const data = useSelector(state=>state.flashSellSlider.flashSellList)
  
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
       <div className='product-container d-flex justify-content-start align-items-center mt-5 gap-5 overflow-hidden'>
        {data?.map((product,index)=><Product key={index} product={product}/>)}
        
    </div>
   <div className='d-flex justify-content-center align-items-center mt-5'> <button className='btn btn-danger'>View All Products </button></div>

   <hr className='mt-5' />
   </div>
  )
}
