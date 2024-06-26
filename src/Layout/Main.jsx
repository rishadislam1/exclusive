
import NavbarMain from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import '../index.css'

export default function Main({children}) {
  return (
    <div className="position-relative bg-white">
      <NavbarMain />
      <div className="z-0" style={{minHeight: "100vh"}}>

          {children}
      </div>
      <Footer/>
    </div>
  );
}
