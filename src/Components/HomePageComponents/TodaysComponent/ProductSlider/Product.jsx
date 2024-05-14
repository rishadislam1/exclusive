import React from "react";
import { FaRegEye, FaStar } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import {Link} from "react-router-dom";
import "./ProductSlider.css"


export default function Product({ product }) {
  const { id, img, title, prevPrice, newPrice, color, reviews, company, category } = product;
  return (
      <Link className="linkto" to={`/productdetails/${id}`} state={{product: product}}>
        <div style={{cursor: "pointer"}}>
          <div className="card border-0" style={{width: " 18rem", height: "500px"}}>
            <div className="position-relative bg-light">
              <img
                  className="card-img-top"
                  src={img}
                  alt="Card image cap"
                  height={"300px"}
              />
              <p
                  className="text-light bg-danger w-25 text-center position-absolute rounded"
                  style={{top: "20px", left: "5px"}}
              >
                ${newPrice}

              </p>

              <p
                  className="text-light bg-danger w-25 text-center position-absolute rounded"
                  style={{top: "50px", left: "5px"}}
              >
                {category}

              </p>

              <div
                  className="position-absolute"
                  style={{top: "20px", right: "10px", fontSize: "25px"}}
              >
                <MdFavoriteBorder className="bg-white p-1 rounded-circle"/> <br/>{" "}
                <FaRegEye className="bg-white p-1 rounded-circle"/>
              </div>
            </div>
            <div className="card-body ">
              <h4>{title}</h4>
              <div className="d-flex gap-3">
                <p className="text-danger">{newPrice}</p>

                <s>{prevPrice}</s>
                <h6>{company}</h6>
                <h6>{color}</h6>
              </div>
              <div>
            <span style={{color: "gold"}}>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </span>{" "}
                ({reviews})
              </div>
            </div>

            <button className="btn addToCartBtn ">Add To Cart</button>
          </div>

        </div>
      </Link>
  );
}
