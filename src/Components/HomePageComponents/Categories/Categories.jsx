import React, { useEffect } from "react";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera, CiHeadphones } from "react-icons/ci";
import { IoFlash, IoGameController } from "react-icons/io5";
import { MdComputer, MdOutlinePhonelinkRing, MdSell } from "react-icons/md";
import "./Categories.css";
import { useSelector } from "react-redux";
import { FaArrowLeftLong, FaArrowRightLong, FaComputer } from "react-icons/fa6";
import { SiYoutubegaming } from "react-icons/si";
import { FaCamera, FaHeadphones } from "react-icons/fa";

export default function Categories() {
  const categoryList = useSelector(
    (state) => state.categoryListSlider.categoryList
  );
  const data = useSelector((state) => state.flashSellSlider.flashSellList);

   let box = document.querySelector(".product-container1");


  const btnpressprev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };

  const btnpressnext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };

  const icons = [
    <SiYoutubegaming style={{ fontSize: "100px" }} />,
    <MdOutlinePhonelinkRing style={{ fontSize: "100px" }} />,
    <FaComputer style={{ fontSize: "100px" }} />,
    <BsSmartwatch style={{ fontSize: "100px" }} />,
    <FaCamera style={{ fontSize: "100px" }} />,
    <FaHeadphones style={{ fontSize: "100px" }} />,
    <IoFlash style={{ fontSize: "100px" }} />,
    <MdSell style={{ fontSize: "100px" }} />,
  ];

  return (
    <div className="mt-5">
      <div style={{ borderLeft: "7px solid red" }}>
        <h4 style={{ marginLeft: "20px", color: "red" }}>Categories</h4>
      </div>
      <div className="mt-4 d-flex align-items-center gap-5">
        <h1>Browse By Category</h1>
      </div>
      <div className="d-flex gap-3 justify-content-end">
        <button className="btn btn-primary" onClick={btnpressprev}>
          <FaArrowLeftLong />
        </button>
        <button className="btn btn-primary" onClick={btnpressnext}>
          <FaArrowRightLong />
        </button>
      </div>
      <div className="product-container1 d-flex justify-content-start align-items-center mt-5 gap-5 overflow-hidden">
        {categoryList?.map((category, index) => (
          <div
            key={index}
            className="border d-flex flex-column justify-content-center align-items-start p-5 rounded gap-3 categories"
          >
            {icons[index]}
            <p>{category?.CategoryName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
