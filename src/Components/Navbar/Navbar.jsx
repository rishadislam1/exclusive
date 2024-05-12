import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CiSearch } from "react-icons/ci";
import "./Navbar.css";
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

export default function NavbarMain() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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

  return (
      <div className={`navClass position-sticky top-0 ${scrolling ? 'bg-black  zIndex' : ''}`}>
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
                    <Nav.Link className={`${scrolling&&"text-white"}`}>Home</Nav.Link>
                  </NavLink>

                  <NavLink className={`({ isActive, isPending }) =>
                    isActive
                        ? "active"
                        : isPending
                            ? "pending"
                            : ""
                menu`} to="/contact" >
                    {" "}
                    <Nav.Link className={`${scrolling&&"text-white"}`}>Contact</Nav.Link>
                  </NavLink>
                  <NavLink to="/about" className={`({ isActive, isPending }) =>
                    isActive
                        ? "active"
                        : isPending
                            ? "pending"
                            : ""
                menu`}>
                    {" "}
                    <Nav.Link className={`${scrolling&&"text-white"}`}>About</Nav.Link>
                  </NavLink>
                  <NavLink to="/signup" className={`({ isActive, isPending }) =>
                    isActive
                        ? "active"
                        : isPending
                            ? "pending"
                            : ""
                menu`}>
                    {" "}
                    <Nav.Link className={`${scrolling&&"text-white"}`}>SignUp</Nav.Link>
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
              <MdFavoriteBorder className={`${scrolling&&"text-white"}`}
                  style={{ marginLeft: "10px", fontSize: "25px" }}
              />
              <IoCartOutline style={{ marginLeft: "10px", fontSize: "25px" }} className={`${scrolling&&"text-white"}`} />
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <hr className="menuhr" />
      </div>
  );
}
