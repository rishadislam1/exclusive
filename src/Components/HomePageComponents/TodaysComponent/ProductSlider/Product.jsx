import React, { useEffect, useState } from "react";
import { FaRegEye, FaStar } from "react-icons/fa";
import { MdDeleteForever, MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import "./ProductSlider.css";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSingleWishList,
  clearWishList,
  setCartList,
  setWishList,
} from "../../../../redux/features/wishList/WishList.js";
import Swal from "sweetalert2";
import Rating from "react-rating";
import { CiStar } from "react-icons/ci";
import { IMAGE_BASE_URL } from "../../../../../public/config.js";

export default function Product({ product }) {

  const [favAdd, setFavAdd] = useState(false);

  const {
    ProductID,
    ImageURL,
    Title,
    Summary,
    DiscountValue,
    Tags,
    Size,
    Price,
    Color,
    company,
    category,
    AvgRating,
    ReviewCount
  } = product;

  
 


  const dispatch = useDispatch();

  const discountPrice = Price - (Price * DiscountValue) / 100;
  const discountCut = (Price * DiscountValue) / 100;


  const cartList = useSelector((state) => state.wishListSlice.cartList);
  const wishList = useSelector((state) => state.wishListSlice.wishlist);

  const location = useLocation();
  const { pathname } = location;

  const user = JSON.parse(localStorage.getItem("login"));

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
        setFavAdd(!favAdd);
        dispatch(clearSingleWishList(singleProduct.id));
      } else {
        setFavAdd(!favAdd);
        dispatch(setWishList(singleProduct));
      }
    } else {
      Swal.fire({
        title: "Please Login First",
        icon: "warning",
      });
    }
  };

  const handleCart = (singleProduct) => {
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
      } else {
        if (isInWishList) {
          setFavAdd(!favAdd);
          dispatch(clearSingleWishList(singleProduct.ProductID));
        }
        dispatch(setCartList(singleProduct));
      }
    } else {
      Swal.fire({
        title: "Please Login First",
        icon: "warning",
      });
    }
  };

  return (
    <div>
      <div style={{ cursor: "pointer" }}>
        <div
          className="card border-0"
          style={{ width: " 18rem", height: "500px" }}
        >
          <div className="position-relative bg-light">
            <div style={{ height: "300px" }}>
              {" "}
              <Link
                className="linkto"
                to={`/productdetails/${ProductID}`}
                style={{ height: "300px" }}
              >
                <img
                  className="card-img-top border"
                  src={IMAGE_BASE_URL+ImageURL}
                  alt={Title}
                  style={{ height: "300px" }}
                />
              </Link>
            </div>

            <p
              className="text-light bg-danger w-25 text-center position-absolute rounded"
              style={{ top: "20px", left: "5px" }}
            >
              -${discountCut}
            </p>

            <p
              className="text-light bg-danger w-25 text-center position-absolute rounded"
              style={{ top: "50px", left: "5px" }}
            >
              {Tags}
            </p>

            <div
              className="position-absolute"
              style={{ top: "20px", right: "10px", fontSize: "25px" }}
            >
              <button
                className="border-0 bg-transparent"
                onClick={() => handleFav(product)}
              >
                {" "}
                {pathname === "/wishlist" ? (
                  <MdDeleteForever
                    className="bg-danger rounded p-1 text-white"
                    style={{ fontSize: "30px" }}
                  />
                ) : (
                  <>
                    {favAdd ? (
                      <MdFavorite style={{ color: "yellow" }} />
                    ) : (
                      <MdFavoriteBorder className="bg-white p-1 rounded-circle" />
                    )}
                  </>
                )}{" "}
              </button>
              <br />{" "}
              <button className="border-0 bg-transparent">
                {" "}
                <FaRegEye className="bg-white p-1 rounded-circle" />
              </button>
            </div>
          </div>
          <Link
            to={`/productdetails/${ProductID}`}
            className="card-body linkto"
          >
            <h5 style={{ fontWeight: "bold" }}>{Title}</h5>
            <div className="d-flex gap-3">
              <p className="text-danger">{discountPrice}</p>

              <s>{Price}</s>
              {/* <h6>{company}</h6> */}
            </div>
            <div>
              <span style={{ color: "gold" }}>
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
              </span>{" "}
              ({ReviewCount})
            </div>
          </Link>

          {pathname === "/wishlist" ? (
            ""
          ) : (
            <button
              className="btn addToCartBtn "
              onClick={() => handleCart(product)}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
