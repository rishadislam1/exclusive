import React, { useEffect, useState } from "react";
import ProductSlider from "./ProductSlider/ProductSlider";
const targetTime = new Date("2035-01-01").getTime();
export default function TodaysComponent() {
  const [currentTime, setCurrentTime] = useState(Date.now());

  const timeBetween = targetTime - currentTime;
  const seconds = Math.floor((timeBetween / 1000) % 60);
  const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
  const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
  const days = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ marginTop: "100px" }}>
      <div style={{ borderLeft: "7px solid red" }}>
        <h4 style={{ marginLeft: "20px", color: "red" }}>Today's</h4>
      </div>
      <div className="mt-4 d-md-flex align-items-center gap-5">
        <h1>Flash Sales</h1>

        <div>
          <h4 className="counter d-md-flex gap-3 align-items-center justify-content-center">
            <div>
              Days<h2>0{days} </h2>
            </div>
            <div>:</div>
            <div>
              Hours<h2>{hours} </h2>
            </div>
            <div>:</div>
            <div>
              Minutes<h2>{minutes}</h2>
            </div>
            <div>:</div>
            <div>
              Seconds<h2>{seconds} </h2>
            </div>
          </h4>
        </div>
  
      </div>
      <ProductSlider/>
    </div>
  );
}
