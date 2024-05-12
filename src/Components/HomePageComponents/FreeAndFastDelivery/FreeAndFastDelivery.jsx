import {TbTruckDelivery} from "react-icons/tb"
import './FreeAndFastDelivery.css';
import {TfiHeadphoneAlt} from "react-icons/tfi"
import {IoShieldCheckmark} from "react-icons/io5";



const FreeAndFastDelivery = () => {
    return (
        <div className="mt-5">
            <div className="mt-5 d-flex flex-wrap justify-content-center align-items-center gap-5">
                <div className="d-flex flex-column align-items-center gap-1">
                    <div className="bg-black text-white text-center rounded-circle deliveryBorder"
                         style={{fontSize: "30px"}}>
                        <TbTruckDelivery/>
                    </div>
                    <p className="mt-2" style={{fontWeight: "bold", fontSize: "20px"}}>FREE AND FAST DELIVERY</p>
                    <p>Free delivery for all orders over $140</p>
                </div>
                <div className="d-flex flex-column align-items-center gap-1">
                    <div className="bg-black text-white text-center rounded-circle deliveryBorder"
                         style={{fontSize: "30px"}}>
                        <TfiHeadphoneAlt />

                    </div>
                    <p className="mt-2" style={{fontWeight: "bold", fontSize: "20px"}}>24/7 CUSTOMER SERVICE</p>
                    <p>Friendly 24/7 customer support</p>
                </div>
                <div className="d-flex flex-column align-items-center gap-1">
                    <div className="bg-black text-white text-center rounded-circle deliveryBorder"
                         style={{fontSize: "30px"}}>
                        <IoShieldCheckmark />

                    </div>
                    <p className="mt-2" style={{fontWeight: "bold", fontSize: "20px"}}>MONEY BACK GUARANTEE</p>
                    <p>We reurn money within 30 days</p>
                </div>
            </div>
        </div>
    );
};

export default FreeAndFastDelivery;