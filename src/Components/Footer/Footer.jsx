import React from "react";
import "./Footer.css";
import { IoSend } from "react-icons/io5";
import qrcode from '../../assets/images/qrcode.png'
import apps from '../../assets/images/apps.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

export default function Footer() {
  return (
    <div className="mt-5">
      {/* <!-- Footer --> */}
      <footer className="text-center text-lg-start bg-black text-light ">
        {/* <!-- Section: Social media --> */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <!-- Left --> */}

          {/* <!-- Left -->

    
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media -->

  <!-- Section: Links  --> */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Exclusive
                </h6>
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Subscribe
                </h6>
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Get 10% off your first order
                </h6>
                <h6 className="text-uppercase fw-bold mb-4 d-flex align-items-center position-relative">
                  <input
                    type="email"
                    className="form-control bg-transparent text-light"
                    placeholder="Enter Your Email"
                  />
                  <IoSend
                    className="position-absolute"
                    style={{ right: "20px" }}
                  />
                </h6>
              </div>
              {/* <!-- Grid column -->

        <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Support</h6>
                <p>
                  <p className="text-reset">
                    111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                  </p>
                </p>
                <p>
                  <p className="text-reset">exclusive@gmail.com</p>
                </p>
                <p>
                  <p className="text-reset">+88015-88888-9999</p>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Account</h6>
                <p>My Account</p>
                <p>Login / Register</p>
                <p>Cart</p>
                <p>Wishlist</p>
                <p>Shop</p>
              </div>
              {/* <!-- Grid column --> */}

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Quick Link</h6>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
              </div>

              {/* <!-- Grid column --> */}

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Download Apps</h6>
                <small>Save $3 with App New User Only</small>
                <div className="text-uppercase fw-bold mb-4 d-flex gap-3 mt-3">
                    <div><img src={qrcode} alt="" srcset="" /></div>
                    <div><img src={apps} alt="" srcset="" /></div>
                </div>
                <div className="text-uppercase fw-bold mb-4 d-flex justify-content-between gap-3 mt-3" style={{fontSize: "20px"}}>
                    <FaFacebook/> <FaTwitter/> <FaInstagram/> <FaLinkedin/> <CiYoutube/>
                </div> 
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-4"
          style={{ backgroundColor: " rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold ms-1" href="https://mdbootstrap.com/">
            exclusive
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </div>
  );
}
