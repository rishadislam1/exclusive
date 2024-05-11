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
// import required modules

export default function HeaderSlider() {
  return (
    <div className="headersliderdiv ">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide className="d-flex gap-5 bg-black text-light">
          <div className="d-flex gap-3">
            <FaApple style={{ fontSize: "20px" }} />
            <p>iPhone 14 Series</p>
          </div>
          <div>
            <img src={slider1} alt="" srcset="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="d-flex gap-5 bg-black text-light">
          <div className="d-flex gap-3">
            <FaApple style={{ fontSize: "20px" }} />
            <p>iPhone 14 Series</p>
          </div>
          <div>
            <img src={slider1} alt="" srcset="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="d-flex gap-5 bg-black text-light">
          <div className="d-flex gap-3">
            <FaApple style={{ fontSize: "20px" }} />
            <p>iPhone 14 Series</p>
          </div>
          <div>
            <img src={slider1} alt="" srcset="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="d-flex gap-5 bg-black text-light">
          <div className="d-flex gap-3">
            <FaApple style={{ fontSize: "20px" }} />
            <p>iPhone 14 Series</p>
          </div>
          <div>
            <img src={slider1} alt="" srcset="" />
          </div>
        </SwiperSlide>

       
      </Swiper>
    </div>
  );
}
