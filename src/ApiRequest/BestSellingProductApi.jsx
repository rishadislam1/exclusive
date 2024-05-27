import axios from 'axios';
import { store } from '../redux/store/store';
import { setBestSellingProducts } from '../redux/features/BestSellingProduct/BestSellingProduct';

const BestSellingProductApi = async () => {
    try {
        const url = 'http://192.168.114.231:4001/back/api/ProductList/GetProductList/8';
        const response = await axios.get(url, { withCredentials: true });
        store.dispatch(setBestSellingProducts(response.data.Data))
       
    } catch (error) {
        console.error('Error fetching the category list:', error);
    }
};

export default BestSellingProductApi;
