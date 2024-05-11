import React from "react";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera, CiHeadphones } from "react-icons/ci";
import { IoGameController } from "react-icons/io5";
import { MdComputer, MdOutlinePhonelinkRing } from "react-icons/md";
import './Categories.css'

export default function Categories() {
  return (
    <div className="mt-5">
      <div style={{ borderLeft: "7px solid red" }}>
        <h4 style={{ marginLeft: "20px", color: "red" }}>Categories</h4>
      </div>
      <div className="mt-4 d-flex align-items-center gap-5">
        <h1>Browse By Category</h1>

      </div>
      
      <div className="d-flex justify-content-between flex-column flex-md-row gap-2 flex-wrap align-items-center mt-4">
          <div className="border d-flex flex-column justify-content-center align-items-start p-5 rounded gap-3 categories">
            <MdOutlinePhonelinkRing style={{fontSize: "100px"}} />
            <p>Phones</p>
          </div>

          <div className="border d-flex flex-column justify-content-center align-items-start p-5 rounded gap-3 categories">
            <MdComputer style={{fontSize: "100px"}} />
            <p>Computer</p>
          </div>

          <div className="border d-flex flex-column justify-content-center align-items-start p-5 rounded gap-3 categories">
            <BsSmartwatch style={{fontSize: "100px"}} />
            <p>Smart Watch</p>
          </div>

          <div className="border d-flex flex-column justify-content-center align-items-start p-5 rounded gap-3 categories">
            <CiCamera style={{fontSize: "100px"}} />
            <p>Camera</p>
          </div>

          <div className="border d-flex flex-column justify-content-center align-items-start p-5 rounded gap-3 categories">
            <CiHeadphones style={{fontSize: "100px"}} />
            <p>HeadPhones</p>
          </div>
          <div className="border d-flex flex-column justify-content-center align-items-start p-5 rounded gap-3 categories">
            <IoGameController style={{fontSize: "100px"}} />
            <p>Gaming</p>
          </div> 
        </div>
    </div>
  );
}
