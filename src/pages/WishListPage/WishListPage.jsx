import {useDispatch, useSelector} from "react-redux";
import Product from "../../Components/HomePageComponents/TodaysComponent/ProductSlider/Product.jsx";
import {clearWishList, setCartList} from "../../redux/features/wishList/WishList.js";
import SectionHeader from "../../Components/SectionHeader/SectionHeader.jsx";
import {useMemo} from "react";

const WishListPage = () => {
    const wishList =  useSelector(state=>state.wishListSlice.wishlist);
    const dispatch = useDispatch();
    const handleBag = () => {
        wishList.forEach(item => {
            dispatch(setCartList(item));
        });
        dispatch(clearWishList())
    };

    const allProducts = JSON.parse(localStorage.getItem("products"))


    window.scrollTo(0,0);

    const shuffleArray = (array) => {
        let shuffledArray = array.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    // Memoize the random products to avoid reshuffling on each render
    const randomProducts = useMemo(() => {
        if (allProducts?.products) {
            const shuffledProducts = shuffleArray(allProducts.products);
            return shuffledProducts.slice(0, 4);
        }
        return [];
    }, [allProducts]);

    return (
        <div className="container mx-auto">
            <div className="d-flex justify-content-between">
                <h5>Wishlist ({wishList.length}) </h5>
                <button className="btn btn-outline-dark" onClick={handleBag}>Move All To Bag</button>
            </div>
            <div className="mt-5 d-flex align-items-center gap-5 flex-wrap">
                {wishList.map((product, index) => <Product key={index} product={product}/>)}
            </div>

            <div className="mt-5 d-flex justify-content-between align-items-center">
                <SectionHeader categories={"Just For You"}/>
                <button className="btn btn-outline-dark" onClick={handleBag}>See All</button>
            </div>
            <div className="mt-5 d-flex align-items-center gap-5 flex-wrap">
            {randomProducts?.map((product, index) => <Product key={index} product={product}/>)}
            </div>
        </div>
    );
};

export default WishListPage;