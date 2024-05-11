import React from "react";
import { FaRegEye, FaStar } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

export default function Product({ product }) {
  const { img, title, price, discount, strikePrice, likes } = product;
  return (
    <div>
      <div className="card border-0" style={{ width: " 18rem" }}>
        <div className="position-relative bg-light">
          <img
            className="card-img-top"
            src={img}
            alt="Card image cap"
            height={"300px"}
          />
          <p
            className="text-light bg-danger w-25 text-center position-absolute rounded"
            style={{ top: "20px", left: "5px" }}
          >
            -{discount}
          </p>
          <div
            className="position-absolute"
            style={{ top: "20px", right: "10px", fontSize: "25px" }}
          >
            <MdFavoriteBorder className="bg-white p-1 rounded-circle" /> <br />{" "}
            <FaRegEye className="bg-white p-1 rounded-circle" />
          </div>
        </div>
        <div className="card-body">
          <h1>{title}</h1>
          <div className="d-flex gap-3">
            <p className="text-danger">{price}</p>
            <s>{strikePrice}</s>
          </div>
          <div>
            <span style={{ color: "gold" }}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>{" "}
            ({likes})
          </div>
        </div>


      </div>
    </div>
  );
}
