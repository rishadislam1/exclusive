import {Link} from "react-router-dom";
import CartComponent from "../../Components/OthersComponents/CartComponent.jsx";
import {useSelector} from "react-redux";
import "./CartListPage.css"
import {useState} from "react";

const CartListPage = () => {
    window.scrollTo(0, 0);
    const cartList = useSelector(state=>state.wishListSlice.cartList);
    const [counts, setCounts] = useState(cartList.map(item => ({ id: item.id, count: 1 })));
    // const totalPrice = useSelector(state=>state.wishListSlice.totalPriceList)
    // console.log(totalPrice)

    const handleCountChange = (id, count) => {
        setCounts(prevCounts =>
            prevCounts.map(item => (item.id === id ? { ...item, count } : item))
        );
    };

    const calculateTotalPrice = () => {
        return cartList.reduce((total, item) => {
            const itemCount = counts.find(count => count.id === item.id)?.count || 1;
            return total + item.newPrice * itemCount;
        }, 0).toFixed(2);
    };


    return (
        <div className="container mx-auto">
            <h2>
                <Link to={'/'} className="text-black">Home</Link> / <span>Cart</span>
            </h2>
            <div className="mt-5">
                <div className=" border-1 rounded overflow-x-auto row p-3 mt-5" style={{boxShadow:"1px 1px 4px 3px #EAECE2"}}>
                    <div className="col-4 fw-bold">Product</div>
                    <div className="col-2  fw-bold">{"Price"}</div>
                    <div className="col-2  fw-bold">{"Quantity"}</div>
                    <div className="col-2  fw-bold">{"Subtotal"}</div>
                    <div className="col-2  fw-bold">{"Remove"}</div>
                   
                </div>
                {cartList.map((item,index)=><CartComponent item={item} key={index} product={item.title} productImage={item.img} price={item.newPrice}  onCountChange={handleCountChange} id = {item.id} />)}
                <div className="mt-5 d-flex justify-content-between align-items-center">
                    <Link to={'/'}>
                        <button className="btn btn-outline-dark">Return To Shop</button>
                    </Link>

                    <button className="btn btn-outline-dark">Update Cart</button>
                </div>
                <div className="mt-5 d-flex flex-wrap justify-content-between align-items-center">
                    <div>
                        <input type="text" className="border-1 rounded py-2 px-3 inputPlace"
                               placeholder={"Coupon Code"}/>
                        <button className="btn btn-danger ms-2">Apply Coupon</button>

                    </div>
                    <div className="border-1 border-black rounded p-3" style={{width: "300px"}}>
                        <h4>Cart Total</h4>
                        <div className="d-flex justify-content-between mt-3">
                            <p>Subtotal:</p>
                            <p>${calculateTotalPrice()}</p>
                        </div>
                        <hr/>
                        <div className="d-flex justify-content-between mt-3">
                            <p>Shipping:</p>
                            <p>free</p>
                        </div>
                        <hr/>
                        <div className="d-flex justify-content-between mt-3">
                            <p>Total:</p>
                            <p>${calculateTotalPrice()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartListPage;