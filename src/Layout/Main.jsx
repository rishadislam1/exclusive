import React from "react";
import { Outlet } from "react-router-dom";
import NavbarMain from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

export default function () {
  return (
    <div className="container mx-auto">
      <NavbarMain />
      <div className="">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}
