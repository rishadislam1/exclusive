import { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp, FaStar } from "react-icons/fa";
import "./ProductDetails.css";
import { TbTruckDelivery } from "react-icons/tb";
import { IoReturnDownForward } from "react-icons/io5";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import { useParams } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import Rating from "react-rating";
import { CiStar } from "react-icons/ci";
import Offcanvas from "react-bootstrap/Offcanvas";
import { PiStarFill, PiStarLight } from "react-icons/pi";
import ReviewCard from "../OthersComponents/ReviewCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { ProductsDetailsApi } from "../../ApiRequest/ProductsDetailsApi.jsx";
import { IMAGE_BASE_URL } from "../../../public/config.js";
import RelatedProductApi from "../../ApiRequest/RelatedProductApi.jsx";
import Product from "../HomePageComponents/TodaysComponent/ProductSlider/Product.jsx";
import Swal from "sweetalert2";
import { clearSingleWishList, setWishList } from "../../redux/features/wishList/WishList.js";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
   
    (async () => {
      await ProductsDetailsApi(Number(productId));
    })();
  }, [productId]);

  const productDetailsWithApi = useSelector(
    (state) => state.productsdetails.productsDetails
  );

  const user = JSON.parse(localStorage.getItem("login"));

  const cartList = useSelector((state) => state.wishListSlice.cartList);
  const wishList = useSelector((state) => state.wishListSlice.wishlist);
  const {
    AvgRating,
    CategoryID,
    Color,
    ColorList,
    Summary,
    DiscountValue,
    ImageURL,
    ImagesList,
    Price,
    ReviewCount,
    ReviewList,
    Size,
    Tags,
    Title,
  } = productDetailsWithApi;

  useEffect(() => {
    // related products

    (async () => {
      await RelatedProductApi(CategoryID);
    })();
  }, [CategoryID]);


  const handleFav = (singleProduct) => {
   
    if (user) {
      const findInCart = cartList.some(
        (cartProduct) => cartProduct.ProductID === singleProduct.ProductID
      );
      const isInWishList = wishList.some(
        (isWishList) => isWishList.ProductID === singleProduct.ProductID
      );
      if (findInCart === true) {
        Swal.fire({
          title: "Product is in cart!",
          text: "The Product You have clicked is already added to the cart!",
          icon: "warning",
        });
      } else if (isInWishList === true) {
        setFavourite(!favourite); 
        dispatch(clearSingleWishList(singleProduct.id));
      } else {
        setFavourite(!favourite); 
        dispatch(setWishList(singleProduct));
      }
    } else {
      Swal.fire({
        title: "Please Login First",
        icon: "warning",
      });
    }
  };


  const productCategory = useSelector(state=>state.relatedProductsSlicer.relatedProducts);
 

  const discountPrice = Price - (Price * DiscountValue) / 100;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [rating, setRating] = useState(AvgRating); // Initialize with the placeholder rating

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // const productCategory = products?.products?.filter(
  //   (product) => product.category === Tags
  // );
  const filterRating = ReviewList?.filter((re) => re.Rating <= rating);

  const firstImage = ImagesList && IMAGE_BASE_URL + ImagesList[0]?.ImageURL;

  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);
  const [sizeSelect, setSizeSelect] = useState(Size);
  const [favourite, setFavourite] = useState(false);
  const [selectImage, setSelectImage] = useState(firstImage);
  const [prevImage, setPrevImage] = useState(firstImage);

  const handlePlus = () => {
    setCount(count + 1);
    setDisable(false);
  };
  const handleMinus = () => {
    if (count < 2) {
      setDisable(true);
    }
    setCount(count - 1);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  let box = document.querySelector(".product-container2");

  const btnpressprev = () => {
    let height = box?.clientHeight;
    box.scrollTop = box?.scrollTop - height;
  };

  const btnpressnext = () => {
    let height = box?.clientHeight;
    box.scrollTop = box?.scrollTop + height;
  };

  return (
    <div>
      <div className="d-lg-flex  gap-5 productDetails w-100">
        <div className="d-flex flex-md-row flex-column-reverse justify-content-center align-items-center gap-4 position-relative ">
          <div className="d-flex flex-md-column gap-2 overflow-hidden overflow-x-auto w-100 product-container2 imageContainer">
            <div
              className={`d-flex justify-content-center align-items-center w-full ${
                ImagesList?.length > 4 ? "d-block" : "d-none"
              } `}
            >
              <button
                className="position-absolute d-none d-md-block btn-slider"
                style={{
                  width: "21%",
                  height: "30px",
                  borderRadius: "5px",
                  top: "17px",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  border: "0",
                  color: "white",
                }}
                onClick={btnpressprev}
              >
                <FaArrowUp />
              </button>
            </div>

            {ImagesList?.map((image, index) => (
              <div
                key={index}
                onClick={() =>
                  setSelectImage(IMAGE_BASE_URL + ImagesList[index].ImageURL)
                }
              >
                <img
                  src={IMAGE_BASE_URL + image.ImageURL}
                  className="scrollImage"
                  style={{
                    height: "138px",
                    width: "200px",
                    cursor: "pointer",
                    border: "3px solid #F5F5F5",
                  }}
                />
              </div>
            ))}
            <div
              className={`d-flex justify-content-center align-items-center w-full ${
                ImagesList?.length > 4 ? "d-block" : "d-none"
              } `}
            >
              <button
                className="position-absolute bottom-0 btn btn-danger mt-lg-3 ms-2 ms-lg-0 d-none d-md-block btn-slider"
                style={{
                  width: "21%",
                  bottom: "17px",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  border: "0",
                  color: "white",
                }}
                onClick={btnpressnext}
              >
                <FaArrowDown />
              </button>
            </div>
          </div>

          <div
            className="d-flex justify-content-center align-items-center w-full"
            style={{ border: "3px solid #F5F5F5", height: "570px" }}
          >
            <div className="bg-white p-5 mainImageDiv rounded">
              <img
                src={selectImage !== prevImage ? selectImage : firstImage}
                className="mainImage w-100"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 mt-lg-0">
          <h4>{Title}</h4>
          <div
            className="d-flex flex-lg-row flex-column align-items-center"
            style={{ cursor: "pointer" }}
          >
            <div>
              <button onClick={handleShow} className="btn">
                <Rating
                  readonly
                  placeholderRating={AvgRating}
                  emptySymbol={
                    <CiStar style={{ color: "gold", fontSize: "20px" }} />
                  }
                  placeholderSymbol={
                    <FaStar style={{ color: "gold", fontSize: "20px" }} />
                  }
                />
                ( {ReviewCount})
              </button>
              <Offcanvas
                show={show}
                onHide={handleClose}
                placement={"end"}
                className="custom-offcanvas-width"
              >
                <Offcanvas.Header>
                  <Offcanvas.Title className="w-100">
                    <div className="border-1 rounded shadow p-3 d-flex justify-content-between align-items-center w-100">
                      <div>
                        <h4>Reviews</h4>
                      </div>
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <Rating
                          readonly
                          placeholderRating={AvgRating}
                          emptySymbol={
                            <CiStar
                              style={{ color: "gold", fontSize: "20px" }}
                            />
                          }
                          placeholderSymbol={
                            <FaStar
                              style={{ color: "gold", fontSize: "20px" }}
                            />
                          }
                          className="mb-1"
                        />
                        {AvgRating}/5 ({ReviewCount})
                        <div>
                          <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={handleClose}
                          ></button>
                        </div>
                      </div>
                    </div>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div className="d-flex justify-content-center align-items-center gap-3">
                    <Rating
                      placeholderRating={rating}
                      emptySymbol={
                        <PiStarLight
                          className="star"
                          style={{ color: "gold" }}
                        />
                      }
                      fullSymbol={
                        <PiStarFill
                          className="star"
                          style={{ color: "gold" }}
                        />
                      }
                      placeholderSymbol={
                        <PiStarFill
                          className="star"
                          style={{ color: "gold" }}
                        />
                      }
                      onChange={handleRatingChange}
                    />
                    <span>{rating} stars</span>
                  </div>
                  {filterRating?.length === 0 ? (
                    <ReviewCard description={"No Review Found"} />
                  ) : (
                    filterRating?.map((review, index) => (
                      <ReviewCard
                        name={review.UserName}
                        rating={review.Rating}
                        key={index}
                        description={review.Comment}
                      />
                    ))
                  )}
                </Offcanvas.Body>
              </Offcanvas>
            </div>{" "}
            |<span className="text-success ms-2">In Stock</span>
          </div>
          <h4 className="mt-2">${discountPrice}</h4>
          <p>{Title}</p>
          <hr />
          <form onSubmit={handleFormSubmit}>
            <div className="d-flex gap-3">
              Colors:
              <div className="form-check">
                <input
                  className="form-check-input red"
                  type="radio"
                  name="flexRadioDefault"
                  value="red"
                  id="redColor"
                />
              </div>
              <div className="form-check">
                <input
                  className="form-check-input blue"
                  type="radio"
                  name="flexRadioDefault"
                  value="blue"
                  id="blueColor"
                />
              </div>
            </div>
            <div className="d-flex gap-2 align-items-center mt-3">
              Size:{" "}
              <button
                className={` btn  rounded ${
                  sizeSelect === "XS"
                    ? "btn-danger border-danger"
                    : "btn-ghost border-success"
                }`}
                onClick={() => setSizeSelect("XS")}
              >
                XS
              </button>
              <button
                className={` btn   rounded ${
                  sizeSelect === "S"
                    ? "btn-danger border-danger"
                    : "btn-ghost border-success"
                }`}
                onClick={() => setSizeSelect("S")}
              >
                S
              </button>
              <button
                className={` btn  rounded ${
                  sizeSelect === "M"
                    ? "btn-danger border-danger"
                    : "btn-ghost border-success"
                }`}
                onClick={() => setSizeSelect("M")}
              >
                M
              </button>
              <button
                className={` btn    rounded ${
                  sizeSelect === "L"
                    ? "btn-danger border-danger"
                    : "btn-ghost border-success"
                }`}
                onClick={() => setSizeSelect("L")}
              >
                L
              </button>
              <button
                className={` btn  rounded ${
                  sizeSelect === "XL"
                    ? "btn-danger border-danger"
                    : "btn-ghost border-success"
                }`}
                onClick={() => setSizeSelect("XL")}
              >
                XL
              </button>
            </div>
            <div className="mt-3 d-flex align-items-center gap-3">
              <div className="d-flex btn-group ">
                <button
                  className="btn btn-ghost btn1"
                  onClick={handleMinus}
                  disabled={disable}
                >
                  -
                </button>
                <button className=" btn btn-ghost btn1  px-4">{count}</button>
                <button className="btn btn-ghost btn1" onClick={handlePlus}>
                  +
                </button>
              </div>
              <button className="btn btn-danger">Buy&nbsp;Now</button>
              <button
                className={` btn btn-ghost ${
                  favourite
                    ? "text-warning bg-danger border-danger"
                    : "text-black btn1"
                } `}
                onClick={() => handleFav(productDetailsWithApi)}
              >
                <MdFavorite
                  className={`${
                    favourite ? "text-warning " : "text-black border-2"
                  }`}
                />
              </button>
            </div>
          </form>
          <div className="border-2 rounded mt-3">
            <div className="deliverBorder">
              <div className="d-flex align-items-center gap-3">
                <TbTruckDelivery className="deliver" />

                <div>
                  <h5>Free Delivery</h5>
                  <p>Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-center gap-3">
                <IoReturnDownForward className="deliver" />

                <div>
                  <h5>Return Delivery</h5>
                  <p>Free 30 Days Delivery Returns. Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <SectionHeader categories="Related Items" />
      </div>

      <div className="d-md-flex flex-wrap align-items-center gap-5 ">
        {productCategory?.map((product,index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
