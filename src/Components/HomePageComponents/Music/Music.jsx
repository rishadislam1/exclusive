import './Music.css';
import radio from '../../../assets/images/radio.png';
import {useEffect, useState} from "react";
const targetTime = new Date("2035-01-01").getTime();

const Music = () => {
    const [currentTime, setCurrentTime] = useState(Date.now());

    const timeBetween = targetTime - currentTime;
    const seconds = Math.floor((timeBetween / 1000) % 60);
    const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
    const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
    const days = 5;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(Date.now());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="mt-5">
            <div className="bg-black rounded w-full p-5 d-flex flex-wrap justify-content-center align-items-center gap-5">
                <div>
                    <h4 className="categoriesText">Categories</h4>
                    <h1 className="text-white">Enhance Your <br/>Music Experience</h1>
                    <div className="d-flex flex-wrap gap-3 align-items-center">
                        <div className="hour">{days} <p>Days</p></div>
                        <div className="hour">{hours} <p>Hours</p></div>
                        <div className="hour">{minutes} <p>Minutes</p></div>
                        <div className="hour">{seconds} <p>Seconds</p></div>
                    </div>
                    <button className="mt-5 btn btn-success">Buy Now</button>
                </div>
                <div>
                    <img src={radio} className="radioImage w-100" />
                </div>
            </div>
        </div>
    );
};

export default Music;