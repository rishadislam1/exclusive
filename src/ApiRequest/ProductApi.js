import axios from "axios";

export async function ProductApi(){
    try{
        let url = Base_URL + 'data.json';
        axios.get(url)
    } catch (e) {
        store.dispatch(HideLoader());
        await ErrorAlert(e?.response?.data?.Message?.toString());
    }
}