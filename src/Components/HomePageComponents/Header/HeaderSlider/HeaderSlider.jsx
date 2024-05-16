import React from "react";

import slider1 from "../../../../assets/images/slider1.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./HeaderSlider.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { FaApple } from "react-icons/fa";
import {FaArrowRightLong} from "react-icons/fa6";
// import required modules

export default function HeaderSlider() {
  return (
    <div className="headersliderdiv" style={{zIndex: "0"}}>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper" style={{zIndex:"0"}}
      >
        <SwiperSlide className="d-flex gap-5 bg-black text-light">
          <div>
            <div className="d-flex gap-3">
              <FaApple style={{fontSize: "20px"}}/>
              <p>iPhone 14 Series</p>

            </div>
            <button className="bg-transparent text-white border-0 "><span className="border-bottom border-0 ">Shop Now</span> <FaArrowRightLong/>
            </button>
          </div>


          <div>
            <img src={slider1} alt=""/>
          </div>
        </SwiperSlide>

        <SwiperSlide className="d-flex gap-5 bg-black text-light">
          <div>
            <div className="d-flex gap-3">
              <FaApple style={{fontSize: "20px"}}/>
              <p>iPhone 14 Series</p>

            </div>
            <button className="bg-transparent text-white border-0 "><span className="border-bottom border-0 ">Shop Now</span> <FaArrowRightLong/>
            </button>
          </div>


          <div>
            <img src={slider1} alt=""/>
          </div>
        </SwiperSlide>

        <SwiperSlide className="d-flex gap-5 bg-black text-light">
          <div>
            <div className="d-flex gap-3">
              <FaApple style={{fontSize: "20px"}}/>
              <p>iPhone 14 Series</p>

            </div>
            <button className="bg-transparent text-white border-0 "><span className="border-bottom border-0 ">Shop Now</span> <FaArrowRightLong/>
            </button>
          </div>


          <div>
            <img src={slider1} alt=""/>
          </div>
        </SwiperSlide>

        <SwiperSlide className="d-flex gap-5 bg-black text-light">
          <div>
            <div className="d-flex gap-3">
              <FaApple style={{fontSize: "20px"}}/>
              <p>iPhone 14 Series</p>

            </div>
            <button className="bg-transparent text-white border-0 "><span className="border-bottom border-0 ">Shop Now</span> <FaArrowRightLong/>
            </button>
          </div>


          <div>
            <img src={slider1} alt=""/>
          </div>
        </SwiperSlide>

        <SwiperSlide className="d-flex gap-5 bg-black text-light">
          <div>
            <div className="d-flex gap-3">
              <FaApple style={{fontSize: "20px"}}/>
              <p>iPhone 14 Series</p>

            </div>
            <button className="bg-transparent text-white border-0 "><span className="border-bottom border-0 ">Shop Now</span> <FaArrowRightLong/>
            </button>
          </div>


          <div>
            <img src={slider1} alt=""/>
          </div>
        </SwiperSlide>

        <SwiperSlide className="d-flex gap-5 bg-black text-light">
          <div>
            <div className="d-flex gap-3">
              <FaApple style={{fontSize: "20px"}}/>
              <p>iPhone 14 Series</p>

            </div>
            <button className="bg-transparent text-white border-0 "><span className="border-bottom border-0 ">Shop Now</span> <FaArrowRightLong/>
            </button>
          </div>


          <div>
            <img src={slider1} alt=""/>
          </div>
        </SwiperSlide>


       
      </Swiper>
    </div>
  );
}
