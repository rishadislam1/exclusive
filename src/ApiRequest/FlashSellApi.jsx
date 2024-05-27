import axios from 'axios';
import { store } from '../redux/store/store';
import { setFlashSellList } from '../redux/features/FlashSells/FlashSellsSlider';

const flashSellApi = async () => {
    try {
        const url = 'http://192.168.114.231:4001/back/api/ProductList/GetProductList/7';
        const response = await axios.get(url, { withCredentials: true });
        store.dispatch(setFlashSellList(response.data.Data))
       
    } catch (error) {
        console.error('Error fetching the category list:', error);
    }
};

export default flashSellApi;
