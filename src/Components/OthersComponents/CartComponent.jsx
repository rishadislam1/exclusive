import {useEffect, useState} from "react";
import {FaAngleDown, FaAngleUp} from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { clearSingleCartList } from "../../redux/features/wishList/WishList";

const CartComponent = ({productImage, product,price, onCountChange,id, item}) => {

    const [count, setCount] = useState(1);
    let totalPrice = Number(price)*count;
    const subtotal = totalPrice;
    const dispatch = useDispatch();

    useEffect(() => {
        onCountChange(id, count);
    }, [count]);

    const handleDelete = (productId)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(clearSingleCartList(productId))
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }

    return (
        <div className=" border-1 rounded overflow-x-auto row p-3 mt-5 align-items-center" style={{boxShadow:"1px 1px 4px 3px #EAECE2"}}>
            <Link to={`/productdetails/${id}`}  state={{product: item}} className="col-4 " style={{textDecoration:"none", color:"black"}}> <img src={productImage} style={{width:"20%"}} /> <span className="ms-2">{product}</span></Link>
            <div className="col-2  ">${price}</div>
            <div className="col-2">
                <div className="w-50 border rounded p-2 d-flex align-items-center gap-3">
                    <button className="btn" onClick={()=>setCount(count-1)} disabled={count<2&&true}><FaAngleDown/>
                    </button>
                    <div>{count}</div>

                    <button className="btn" onClick={()=>setCount(count+1)}><FaAngleUp/>
                    </button>

                </div>
            </div>
            <div className="col-2 ">{subtotal.toFixed(2)}</div>
            <div className="col-2 "><MdDeleteForever onClick={()=>handleDelete(id)} style={{fontSize:"25px", color:"red", cursor:"pointer"}}/>
</div>
        </div>
    );
};

export default CartComponent;