import axios from "axios";

import {setProducts} from "../redux/features/Products/ProductSlice.js";
import {store} from "../redux/store/store.js";

export async function ProductApi(){

    try{
        let url = 'data.json';
        const data = await axios.get(url,  { withCredentials: true })
        store.dispatch(setProducts(data?.data?.products));
        const productsData = data?.data;
        localStorage.setItem("products", JSON.stringify(productsData));

    } catch (e) {
        console.log(e)
        // store.dispatch();
    }
  }