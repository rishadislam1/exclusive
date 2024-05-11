import React from "react";
import { Link } from "react-router-dom";
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
  return (
    <div>
      <Navbar expand="lg" className="">
        <Container fluid>
          <Link to="/" className="text-decoration-none">
            {" "}
            <Navbar.Brand>Exclusive</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="mx-auto">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Link to="/" className="text-decoration-none">
                  {" "}
                  <Nav.Link>Home</Nav.Link>
                </Link>

                <Link to="/" className="text-decoration-none">
                  {" "}
                  <Nav.Link>Contact</Nav.Link>
                </Link>
                <Link to="/" className="text-decoration-none">
                  {" "}
                  <Nav.Link>About</Nav.Link>
                </Link>
                <Link to="/" className="text-decoration-none">
                  {" "}
                  <Nav.Link>SignUp</Nav.Link>
                </Link>
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
            <MdFavoriteBorder
              style={{ marginLeft: "10px", fontSize: "25px" }}
            />
            <IoCartOutline style={{ marginLeft: "10px", fontSize: "25px" }} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr className="menuhr" />
    </div>
  );
}
