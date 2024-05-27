import axios from 'axios';
import { store } from '../redux/store/store';
import { setRelatedProducts } from '../redux/features/RelatedProducts/RelatedProducts';

const RelatedProductApi = async (categoryId) => {
   
    try {
        const url = `http://192.168.114.231:4001/back/api/ProductList/GetProductList/${categoryId}`;
        const response = await axios.get(url, { withCredentials: true });
        store.dispatch(setRelatedProducts(response.data.Data))
       
    } catch (error) {
        console.error('Error fetching the category list:', error);
    }
};

export default RelatedProductApi;
