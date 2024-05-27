import { useState, useEffect } from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {CiLogout, CiSearch, CiUser} from "react-icons/ci";
import "./Navbar.css";
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import {FaRegStar, FaRegUser, FaShoppingBag} from "react-icons/fa";
import {RxCrossCircled} from "react-icons/rx";
import {useSelector} from "react-redux";

export default function NavbarMain() {
    const navigate = useNavigate();
  const [scrolling, setScrolling] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
let email;
 if(localStorage.getItem("login")){
   email = JSON.parse(localStorage.getItem("login")).email;
 }


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 // wishlist

    const wishList =  useSelector(state=>state.wishListSlice.wishlist);
    const cartList = useSelector(state=>state.wishListSlice.cartList);


 const handleLogout = ()=>{
     localStorage.removeItem("login");
     setShowDetails(false)
     navigate('/')
 }

  return (
      <div className={`navClass position-sticky top-0 ${scrolling ? 'bg-black  zIndex' : 'zIndex'}`}>
        <Navbar expand="lg" className="container mx-auto">
          <Container fluid>
            <Link to="/" className="text-decoration-none
            ">
              {" "}
              <Navbar.Brand className={`${scrolling&&"text-white"}`}>Exclusive</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <div className="mx-auto">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                >
                  <NavLink to="/" className={`({ isActive, isPending }) =>
                    isActive
                        ? "active"
                        : isPending
                            ? "pending"
                            : ""
                menu `}>
                    {" "}
                    <menu className={`${scrolling&&"text-white"}`}>Home</menu>
                  </NavLink>

                  <NavLink className={`({ isActive, isPending }) =>
                    isActive
                        ? "active"
                        : isPending
                            ? "pending"
                            : ""
                menu  text-center d-flex `} to="/contact" >
                    {" "}
                    <menu className={`${scrolling&&"text-white"} text-center`}>Contact</menu>
                  </NavLink>
                  <NavLink to="/about" className={`({ isActive, isPending }) =>
                    isActive
                        ? "active"
                        : isPending
                            ? "pending"
                            : ""
                menu`}>
                    {" "}
                    <menu className={`${scrolling&&"text-white"}`}>About</menu>
                  </NavLink>
                  <NavLink to="/signup" className={`({ isActive, isPending }) =>
                    isActive
                        ? "active"
                        : isPending
                            ? "pending"
                            : ""
                menu`}>
                    {" "}
                    <menu className={`${scrolling&&"text-white"}`}>SignUp</menu>
                  </NavLink>

                </Nav>
              </div>

              <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ position: "relative" }}
              >
                <Form.Control
                    type="search"
                    placeholder="What you are looking for"
                    className="formSearch"
                    aria-label="Search"
                />
                <CiSearch
                    style={{
                      fontSize: "25px",
                      position: "absolute",
                      right: "10%",
                      transform: "translateX(50%)",
                    }}
                />
              </div>
             <Link to={'/wishlist'} className="text-decoration-none position-relative"> <MdFavoriteBorder className={`${scrolling&&"text-white"}`}
                                     style={{ marginLeft: "10px", fontSize: "25px" }}
             /> {wishList.length > 0 && <div className="position-absolute" style={{
                 top: "-12px",
                 right: "-8px",
                 fontSize: "15px",
                 backgroundColor: "red",
                 color: "white",
                 width: "25px",
                 height: "23px",
                 textAlign: "center",
                 borderRadius: "50%"
             }}>{wishList.length}</div>}</Link>

                <Link to={'/cartlist'} className="text-decoration-none position-relative"> <IoCartOutline
                    style={{marginLeft: "10px", fontSize: "25px"}} className={`${scrolling && "text-white"}`}/>
                    {cartList?.length > 0 && <div className="position-absolute" style={{
                        top: "-12px",
                        right: "-8px",
                        fontSize: "15px",
                        backgroundColor: "blue",
                        color: "white",
                        width: "25px",
                        height: "23px",
                        textAlign: "center",
                        borderRadius: "50%"
                    }}>{cartList.length}</div>}</Link>


                {/*  profile */}
                {
                    email &&
                    <div className="position-relative">
                        <FaRegUser style={{marginLeft: "10px", fontSize: "30px", cursor: "pointer"}}
                               className={`bg-danger  rounded-circle p-2 text-white`} onClick={()=>setShowDetails(!showDetails)}/>

                    <div style={{zIndex: "100", top: "50px",right:"0", color: "white", padding: "10px", borderRadius: "10px", width: "250px"}} className={`profileClass position-absolute ${showDetails?"transitionOnProfile":"transitionOnProfileHidden "}`}>
                        <div>
                            <p style={{cursor: "pointer"}}><CiUser className="me-2" style={{fontWeight: "bold", fontSize: "20px"}}/>
                                Manage My Account</p>
                            <p style={{cursor: "pointer"}}><FaShoppingBag className="me-2" style={{fontWeight: "bold", fontSize: "20px"}}/>
                                 My Order</p>
                            <p style={{cursor: "pointer"}}><RxCrossCircled
                                className="me-2" style={{fontWeight: "bold", fontSize: "20px"}}/>
                               My Collections</p>
                            <p style={{cursor: "pointer"}}><CiUser

                                className="me-2" style={{fontWeight: "bold", fontSize: "20px"}}/>
                                My Reviews</p>
                            <p onClick={handleLogout} style={{cursor: "pointer"}}><CiLogout className="me-2" style={{fontWeight: "bold", fontSize: "20px"}}/>
                                LogOut</p>
                        </div>
                    </div>

                  </div>
              }


            </Navbar.Collapse>
          </Container>
        </Navbar>
        <hr className="menuhr"/>
      </div>
  );
}
