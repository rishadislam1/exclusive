
import { Outlet } from "react-router-dom";
import NavbarMain from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

export default function () {
  return (
    <div className="">
      <NavbarMain />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}
