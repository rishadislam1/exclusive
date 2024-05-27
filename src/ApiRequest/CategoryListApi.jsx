import axios from 'axios';
import { store } from '../redux/store/store';
import { setCategoryList } from '../redux/features/CategoryListSlider/CategoryListSlider';

const fetchCategoryList = async () => {
    try {
        const url = 'http://192.168.114.231:4001/back/api/Category/GetCategoryList';
        const response = await axios.get(url, { withCredentials: true });
        store.dispatch(setCategoryList(response.data.Data))
       
    } catch (error) {
        console.error('Error fetching the category list:', error);
    }
};

export default fetchCategoryList;
