import axios from "axios";

import {store} from "../redux/store/store.js";
import { setProductsDetails } from "../redux/features/ProductsDetails/ProductsDetails.js";

export async function ProductsDetailsApi(productId){
    
    try{
        let url = `http://192.168.114.231:4001/back/api/ProductList/GetProductDetails/0/${productId}`;
        const response = await axios.get(url,  { withCredentials: true })
       
        store.dispatch(setProductsDetails(response.data.Data));
       

    } catch (e) {
        console.log(e)
        // store.dispatch();
    }
  }