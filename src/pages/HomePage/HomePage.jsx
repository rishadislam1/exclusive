
import Header from '../../Components/HomePageComponents/Header/Header'
import TodaysComponent from '../../Components/HomePageComponents/TodaysComponent/TodaysComponent'
import Categories from '../../Components/HomePageComponents/Categories/Categories'
import BestSellong from "../../Components/HomePageComponents/BestSelling/BestSellong.jsx";
import Music from "../../Components/HomePageComponents/Music/Music.jsx";
import ExploreProducts from "../../Components/HomePageComponents/ExploreProduct/ExploreProducts.jsx";
import NewArraival from "../../Components/HomePageComponents/NewArrival/NewArraival.jsx";
import FreeAndFastDelivery from "../../Components/HomePageComponents/FreeAndFastDelivery/FreeAndFastDelivery.jsx";
import {ProductApi} from "../../ApiRequest/ProductApi.jsx";
import {useEffect} from "react";
import flashSellApi from '../../ApiRequest/FlashSellApi.jsx';
import BestSellingProductApi from '../../ApiRequest/BestSellingProductApi.jsx';
import fetchCategoryList from '../../ApiRequest/CategoryListApi.jsx';

export default function HomePage() {

    useEffect(() => {
        // Call the ProductApi function when the component mounts
        (async () => {
          await flashSellApi();
        })();
    
          // best selling product
    
          (async () => {
            await BestSellingProductApi();
          })();
    
        // categorylist
    
        (async () => {
          await fetchCategoryList();
        })();

    }, []);




  return (
    <div className="position-relative container mx-auto">
        <Header/>
        <TodaysComponent/>
        <Categories/>
        <BestSellong/>
        <Music/>
        <ExploreProducts/>
        <NewArraival/>
        <FreeAndFastDelivery/>

    </div>
  )
}
